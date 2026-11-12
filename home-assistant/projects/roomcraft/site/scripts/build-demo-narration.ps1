# Run in Windows PowerShell with Microsoft Zira Desktop and FFmpeg on PATH.
param([string] $OutputPath)

$ErrorActionPreference = 'Stop'
$sampleRate = 44100
$voiceName = 'Microsoft Zira Desktop'
$invariant = [Globalization.CultureInfo]::InvariantCulture
$sourceRoot = Split-Path -Parent $PSScriptRoot
if (!$OutputPath) { $OutputPath = Join-Path $sourceRoot 'public/demo-narration-v1.mp3' }
$OutputPath = [IO.Path]::GetFullPath($OutputPath)

function Invoke-Ffmpeg([string[]] $Arguments) {
    & ffmpeg.exe -nostdin -hide_banner -loglevel error -y @Arguments
    if ($LASTEXITCODE -ne 0) { throw 'FFmpeg failed while building the narration.' }
}

function Read-Duration([string] $Path) {
    $value = & ffprobe.exe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 $Path
    if ($LASTEXITCODE -ne 0) { throw "Cannot read the narration audio duration for $Path." }
    return [double]::Parse($value, $invariant)
}

Push-Location -LiteralPath $sourceRoot
try {
    $cueJson = & node --input-type=module -e "import {STORYBOOK_DEMO_VOICE_CUES as cues} from './ha-local/storybook-demo.mjs'; console.log(JSON.stringify(cues));"
    if ($LASTEXITCODE -ne 0) { throw 'Cannot load the Roomcraft demo cues.' }
    $cues = $cueJson | ConvertFrom-Json
} finally {
    Pop-Location
}

$durationMs = 0
foreach ($cue in $cues) {
    if ($cue.startMs -ne $durationMs -or $cue.durationMs -le 160 -or !$cue.text) {
        throw "Invalid or discontinuous narration cue $($cue.id)."
    }
    $durationMs += $cue.durationMs
}
if ($durationMs -ne 60000) { throw 'Expected a 60-second narration timeline.' }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$waveFormat = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(
    $sampleRate, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$temporary = Join-Path ([IO.Path]::GetTempPath()) ('roomcraft-narration-' + [Guid]::NewGuid().ToString('N'))
$null = New-Item -ItemType Directory -Path $temporary

try {
    $synth.SelectVoice($voiceName)
    $synth.Volume = 94
    $synth.Rate = 2
    $segments = @()
    for ($index = 0; $index -lt $cues.Count; $index++) {
        $cue = $cues[$index]
        $source = Join-Path $temporary 'voice.wav'
        $trimmed = Join-Path $temporary 'trimmed.wav'
        $file = 'segment-{0:00}.wav' -f $index
        $segment = Join-Path $temporary $file
        $synth.SetOutputToWaveFile($source, $waveFormat)
        $synth.Speak($cue.text)
        $synth.SetOutputToNull()

        $trim = 'silenceremove=start_periods=1:start_duration=0.018:start_threshold=-49dB'
        Invoke-Ffmpeg @('-i', $source, '-af', "highpass=f=70,$trim,areverse,$trim,areverse", '-c:a', 'pcm_s16le', $trimmed)
        $natural = Read-Duration $trimmed
        $available = ($cue.durationMs - 165) / 1000
        $tempo = [Math]::Max(1, [Math]::Ceiling(1000 * $natural / $available) / 1000)
        if ($tempo -gt 1.25) { throw "Shorten cue $($cue.id) to keep narration intelligible." }
        $tempoArgument = $tempo.ToString('0.000', $invariant)
        $samples = [long]($sampleRate * $cue.durationMs / 1000)
        Invoke-Ffmpeg @('-i', $trimmed, '-af', "atempo=$tempoArgument,adelay=45:all=1,apad,atrim=end_sample=$samples",
            '-ar', $sampleRate, '-ac', '1', '-c:a', 'pcm_s16le', $segment)
        $segments += "file '$file'"
        Write-Host ('{0,-18} {1,4} ms, voice {2,4} ms, tempo {3}' -f
            $cue.id, $cue.startMs, [Math]::Round($natural * 1000), $tempoArgument)
    }
    $manifest = Join-Path $temporary 'segments.txt'
    [IO.File]::WriteAllLines($manifest, $segments, [Text.Encoding]::ASCII)
    $track = Join-Path $temporary 'narration.mp3'
    Invoke-Ffmpeg @('-f', 'concat', '-safe', '1', '-i', $manifest, '-map_metadata', '-1', '-c:a', 'libmp3lame',
        '-b:a', '64k', '-ar', $sampleRate, '-ac', '1', '-id3v2_version', '0', '-write_id3v1', '0', $track)

    # Decode through the MP3 gapless information and verify exact program time.
    $decoded = Join-Path $temporary 'decoded.pcm'
    Invoke-Ffmpeg @('-i', $track, '-f', 's16le', '-c:a', 'pcm_s16le', $decoded)
    $expectedBytes = 2 * $sampleRate * $durationMs / 1000
    if ((Get-Item -LiteralPath $decoded).Length -ne $expectedBytes) { throw 'Narration duration drifted.' }
    Move-Item -LiteralPath $track -Destination $OutputPath -Force
    Write-Host ('Verified {0} seconds, {1}' -f ($durationMs / 1000), (Get-FileHash -LiteralPath $OutputPath).Hash)
} finally {
    $synth.Dispose()
    foreach ($entry in Get-ChildItem -LiteralPath $temporary -File) {
        Remove-Item -LiteralPath $entry.FullName
    }
    Remove-Item -LiteralPath $temporary
}
