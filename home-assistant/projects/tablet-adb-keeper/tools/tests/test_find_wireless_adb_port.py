from pathlib import Path
import struct
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from find_wireless_adb_port import PTR, SRV, SERVICE, _wire_name, connect_ports, response_records


def reply(*answers, transaction=321):
    return struct.pack("!6H", transaction, 0x8400, 0, len(answers), 0, 0) + b"".join(answers)


def record(name, kind, data, ttl=120):
    owner = _wire_name(name) if isinstance(name, str) else name
    return owner + struct.pack("!HHIH", kind, 0x8001, ttl, len(data)) + data


def srv(port, host="tablet.local."):
    return struct.pack("!3H", 0, 0, port) + _wire_name(host)


class WirelessDebuggingDiscoveryTest(unittest.TestCase):
    def test_reads_only_connect_srv_and_understands_compressed_names(self):
        connect = "tablet." + SERVICE
        # Point the instance suffix at the first answer name at byte 12.
        packet = reply(
            record(SERVICE, PTR, b"\x06tablet\xc0\x0c"),
            record(connect, SRV, srv(31234)),
            record("tablet._adb-tls-pairing._tcp.local.", SRV, srv(39999)),
            record("unannounced." + SERVICE, SRV, srv(44444)),
        )
        self.assertEqual(connect_ports(response_records(packet, 321)), {31234})

    def test_rejects_malformed_packets_and_wrong_transactions(self):
        cyclic = reply(record(b"\xc0\x0c", PTR, b"\0"))
        valid = reply(record(SERVICE, PTR, _wire_name("tablet." + SERVICE)))
        for packet, transaction in [(cyclic, 321), (valid[:-1], 321), (valid, 999)]:
            self.assertEqual(response_records(packet, transaction), [])

    def test_ignores_withdrawn_or_unavailable_records(self):
        instance = "tablet." + SERVICE
        withdrawn = reply(record(SERVICE, PTR, _wire_name(instance), ttl=0),
                          record(instance, SRV, srv(31234)))
        unavailable = reply(record(SERVICE, PTR, _wire_name(instance)),
                            record(instance, SRV, srv(31234, ".")))
        for packet in (withdrawn, unavailable):
            self.assertEqual(connect_ports(response_records(packet, 321)), set())

    def test_multiple_announced_connect_ports_remain_ambiguous(self):
        first = "first." + SERVICE
        second = "second." + SERVICE
        packet = reply(
            record(SERVICE, PTR, _wire_name(first)),
            record(SERVICE, PTR, _wire_name(second)),
            record(first, SRV, srv(31000)),
            record(second, SRV, srv(32000)),
        )
        self.assertEqual(connect_ports(response_records(packet, 321)), {31000, 32000})


if __name__ == "__main__":
    unittest.main()
