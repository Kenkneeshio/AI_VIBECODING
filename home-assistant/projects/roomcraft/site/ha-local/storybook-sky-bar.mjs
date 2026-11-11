// Decorative sky for Home. The Weather button provides the accessible reading.
export const storybookSkyBarMarkup = `
  <div class="storybook-sky-bar" data-sky="unknown" data-effect="unknown" data-moon="" aria-hidden="true">
    <span class="sky-bar-stars"></span>
    <span class="sky-bar-cloud sky-bar-cloud-far sky-bar-cloud-west"></span>
    <span class="sky-bar-cloud sky-bar-cloud-far sky-bar-cloud-east"></span>
    <span class="sky-bar-celestial sky-bar-sun"></span>
    <span class="sky-bar-celestial sky-bar-moon"></span>
    <span class="sky-bar-cloud sky-bar-cloud-near sky-bar-cloud-west"></span>
    <span class="sky-bar-cloud sky-bar-cloud-near sky-bar-cloud-east"></span>
    <span class="sky-bar-cloud sky-bar-cloud-bank"></span>
    <span class="sky-bar-fog"></span>
  </div>`;

export function updateStorybookSkyBar(element, weather) {
  for (const key of ['sky', 'effect', 'moon']) {
    if (element.dataset[key] !== weather[key]) element.dataset[key] = weather[key];
  }
}

export const storybookSkyBarStyles = `
  .storybook-sky-bar {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    height:var(--storybook-sky-height, clamp(58px,8dvh,90px)); width:100%;
    flex:none; box-shadow:inset 0 -1px 0 #10273540;
    background:linear-gradient(180deg,#a2b6bd,#d0d9cc 90%);
    --cloud-top:#fcf3dc; --cloud-bottom:#a5b9bb;
    --celestial-size:clamp(28px,4.8dvh,53px);
  }
  .storybook-sky-bar[data-sky=day] {
    background:radial-gradient(ellipse at 50% 115%,#fff1bb9c,transparent 62%),
      linear-gradient(180deg,#74a9ca,#9dc6d9 54%,#d9dfc7 97%);
  }
  .storybook-sky-bar[data-sky=night] {
    background:radial-gradient(ellipse at 50% 125%,#a7a1aa46,transparent 68%),
      linear-gradient(180deg,#142740,#233e59 66%,#53677a);
    --cloud-top:#8498b1; --cloud-bottom:#354e69;
  }
  .sky-bar-stars {
    display:none; position:absolute; inset:0;
    background:
      radial-gradient(circle at 7% 26%,#fff1c4 0 1.1px,transparent 1.7px),
      radial-gradient(circle at 12% 53%,#e4f0ff 0 .7px,transparent 1.35px),
      radial-gradient(circle at 19% 17%,#e4f0ff 0 .8px,transparent 1.4px),
      radial-gradient(circle at 27% 36%,#fff1c4 0 1.1px,transparent 1.7px),
      radial-gradient(circle at 31% 67%,#e4f0ff 0 .7px,transparent 1.35px),
      radial-gradient(circle at 38% 25%,#e4f0ff 0 .8px,transparent 1.4px),
      radial-gradient(circle at 43% 57%,#fff1c4 0 .8px,transparent 1.4px),
      radial-gradient(circle at 57% 21%,#fff1c4 0 1px,transparent 1.6px),
      radial-gradient(circle at 63% 45%,#e4f0ff 0 .7px,transparent 1.35px),
      radial-gradient(circle at 73% 29%,#e4f0ff 0 .8px,transparent 1.4px),
      radial-gradient(circle at 81% 62%,#fff1c4 0 1px,transparent 1.6px),
      radial-gradient(circle at 89% 16%,#e4f0ff 0 .8px,transparent 1.4px),
      radial-gradient(circle at 95% 39%,#fff1c4 0 1.1px,transparent 1.7px);
    animation:roomcraft-sky-bar-twinkle 7s ease-in-out infinite alternate;
  }
  .storybook-sky-bar[data-sky=night] .sky-bar-stars{display:block}
  .sky-bar-celestial {
    display:none; position:absolute; left:50%; top:47%;
    width:var(--celestial-size); aspect-ratio:1; translate:-50% -50%;
    border-radius:50%;
  }
  .storybook-sky-bar[data-sky=day] .sky-bar-sun {
    display:block; background:radial-gradient(circle at 36% 28%,#fffbd1,#ffd67d 73%);
    box-shadow:0 0 5px #fff2b4,0 0 22px 9px #ffde8180;
    animation:roomcraft-sky-bar-glow 8s ease-in-out infinite alternate;
  }
  .sky-bar-sun::before {
    content:""; position:absolute; inset:-36%; border-radius:50%;
    background:repeating-conic-gradient(transparent 0 16deg,#fff2b8ce 20deg 22deg,transparent 26deg 45deg);
    mask-image:radial-gradient(circle,transparent 42%,#000 49%,#000 60%,transparent 71%);
    animation:roomcraft-sky-bar-rays 75s linear infinite;
  }
  .storybook-sky-bar[data-sky=night]:not([data-moon=""]):not([data-moon=new_moon]) .sky-bar-moon {
    display:block; overflow:hidden;
    background:radial-gradient(circle at 28% 35%,#d6bc9990 0 6%,transparent 10%),
      radial-gradient(circle at 68% 28%,#d6bc9990 0 7%,transparent 10%),
      radial-gradient(circle at 64% 64%,#d6bc9977 0 11%,transparent 16%),
      radial-gradient(circle at 73% 28%,#fffde9,#f2d5ac 86%);
    box-shadow:0 0 19px 4px #f1d8ac4a;
    animation:roomcraft-sky-bar-float 10s ease-in-out infinite alternate;
  }
  .sky-bar-moon::after{content:"";position:absolute;inset:0;background:#213951}
  .storybook-sky-bar[data-moon=full_moon] .sky-bar-moon::after{display:none}
  .storybook-sky-bar[data-moon=first_quarter] .sky-bar-moon::after{right:50%}
  .storybook-sky-bar[data-moon=last_quarter] .sky-bar-moon::after{left:50%}
  :is([data-moon=waxing_crescent],[data-moon=waning_crescent],
    [data-moon=waxing_gibbous],[data-moon=waning_gibbous]) .sky-bar-moon::after{border-radius:50%}
  [data-moon=waxing_crescent] .sky-bar-moon::after{transform:translateX(-26%)}
  [data-moon=waning_crescent] .sky-bar-moon::after{transform:translateX(26%)}
  [data-moon=waxing_gibbous] .sky-bar-moon::after{transform:translateX(-76%)}
  [data-moon=waning_gibbous] .sky-bar-moon::after{transform:translateX(76%)}
  .sky-bar-cloud {
    position:absolute; width:var(--cloud-width); height:var(--cloud-height);
    background:linear-gradient(180deg,var(--cloud-top) 22%,var(--cloud-bottom) 100%);
    mask-image:
      radial-gradient(ellipse 45% 29% at 50% 68%,#000 95%,transparent 100%),
      radial-gradient(ellipse 18% 36% at 53% 45%,#000 94%,transparent 100%),
      radial-gradient(ellipse 17% 29% at 34% 56%,#000 94%,transparent 100%),
      radial-gradient(ellipse 17% 25% at 68% 56%,#000 94%,transparent 100%);
    animation:roomcraft-sky-bar-drift var(--drift-time) ease-in-out infinite alternate;
    animation-delay:var(--drift-delay,0s);
  }
  .sky-bar-cloud-far {
    --cloud-width:clamp(86px,19vw,300px); --cloud-height:60%; --drift-time:44s;
    bottom:34%; opacity:.44;
  }
  .sky-bar-cloud-near {
    --cloud-width:clamp(110px,25vw,430px); --cloud-height:83%; --drift-time:32s;
    bottom:-2%; opacity:.84;
  }
  .sky-bar-cloud-far.sky-bar-cloud-west{left:15%;--drift-delay:-12s}
  .sky-bar-cloud-far.sky-bar-cloud-east{right:13%;--drift-delay:-30s}
  .sky-bar-cloud-near.sky-bar-cloud-west{left:2%;--drift-delay:-8s}
  .sky-bar-cloud-near.sky-bar-cloud-east{right:1%;--drift-delay:-25s}
  .sky-bar-cloud-bank {
    display:none; left:calc(50% - var(--cloud-width) / 2); bottom:-18%;
    --cloud-width:clamp(180px,44vw,860px); --cloud-height:102%; --drift-time:52s; --drift-delay:-17s;
    opacity:.8;
  }
  .storybook-sky-bar:is([data-effect=clear],[data-effect=wind],[data-effect=unknown]) .sky-bar-cloud-near{opacity:.42}
  .storybook-sky-bar:is([data-effect=clear],[data-effect=wind],[data-effect=unknown]) .sky-bar-cloud-far{opacity:.26}
  .storybook-sky-bar:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],
    [data-effect=storm],[data-effect=thunder],[data-effect=snow],[data-effect=sleet]) .sky-bar-cloud-bank{display:block}
  .storybook-sky-bar:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) {
    --cloud-top:#b6c2c8; --cloud-bottom:#667e8a;
  }
  .storybook-sky-bar[data-sky=night]:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) {
    --cloud-top:#8291a7; --cloud-bottom:#30475e;
  }
  .storybook-sky-bar:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) .sky-bar-celestial{opacity:.4}
  .storybook-sky-bar:is([data-effect=wind],[data-effect=wind-clouds]) .sky-bar-cloud{animation-duration:16s}
  .sky-bar-fog {
    display:none; position:absolute; inset:18% -8% -6%;
    background:radial-gradient(ellipse at 27% 84%,#e0e5dbd1,transparent 69%),
      radial-gradient(ellipse at 72% 72%,#e6e9d9ad,transparent 71%);
    animation:roomcraft-sky-bar-drift 28s ease-in-out infinite alternate;
  }
  .storybook-sky-bar[data-effect=fog] .sky-bar-fog{display:block}
  .storybook-sky-bar[data-effect=fog] .sky-bar-celestial{opacity:.6}
  @keyframes roomcraft-sky-bar-drift{from{transform:translateX(-3vw)}to{transform:translateX(3vw)}}
  @keyframes roomcraft-sky-bar-rays{to{transform:rotate(360deg)}}
  @keyframes roomcraft-sky-bar-glow{to{box-shadow:0 0 7px #fff2b4,0 0 27px 12px #ffde8199}}
  @keyframes roomcraft-sky-bar-float{to{transform:translateY(-3px)}}
  @keyframes roomcraft-sky-bar-twinkle{from{opacity:.88}to{opacity:.52}}
  .world[data-reduced-motion] .storybook-sky-bar *,
  .world[data-reduced-motion] .storybook-sky-bar *::before{animation:none!important}
  @media(prefers-reduced-motion:reduce) {
    .storybook-sky-bar *, .storybook-sky-bar *::before{animation:none!important}
  }
`;
