"""Discover a known tablet's current Wireless debugging endpoint over mDNS."""

import argparse
import ipaddress
import secrets
import socket
import struct
import time


SERVICE = "_adb-tls-connect._tcp.local."
MULTICAST = ("224.0.0.251", 5353)
PTR, SRV = 12, 33


def _wire_name(name):
    labels = name.rstrip(".").split(".") if name != "." else []
    return b"".join(bytes([len(label)]) + label.encode("ascii") for label in labels) + b"\0"


def _read_name(packet, offset):
    labels = []
    visited = set()
    end = None
    while offset not in visited:
        visited.add(offset)
        length = packet[offset]
        if length == 0:
            return ".".join(labels).lower() + ".", end if end is not None else offset + 1
        if (length & 0xC0) == 0xC0:
            end = end if end is not None else offset + 2
            offset = ((length & 0x3F) << 8) | packet[offset + 1]
            continue
        if length > 63 or offset + length >= len(packet):
            raise ValueError("Invalid DNS label")
        label = packet[offset + 1:offset + 1 + length].decode("ascii")
        if "." in label:
            raise ValueError("DNS label contains a presentation separator")
        labels.append(label)
        offset += length + 1
    raise ValueError("Cyclic DNS name")


def response_records(packet, transaction):
    """Return valid IPv4 discovery reply records, or ignore a malformed packet."""
    try:
        reply_id, flags, questions, answers, authority, extra = struct.unpack_from("!6H", packet)
        if reply_id != transaction or (flags & 0x820F) != 0x8000:
            return []
        records = []
        offset = 12
        for _ in range(questions):
            _, offset = _read_name(packet, offset)
            offset += 4
        if offset > len(packet):
            return []
        for _ in range(answers + authority + extra):
            owner, offset = _read_name(packet, offset)
            kind, rrclass, ttl, length = struct.unpack_from("!HHIH", packet, offset)
            offset += 10
            end = offset + length
            if end > len(packet):
                return []
            if (rrclass & 0x7FFF) == 1 and ttl > 0:
                if kind == PTR:
                    target, next_offset = _read_name(packet, offset)
                    if next_offset == end:
                        records.append((owner, PTR, target))
                elif kind == SRV and length >= 7:
                    port = struct.unpack_from("!H", packet, offset + 4)[0]
                    target, next_offset = _read_name(packet, offset + 6)
                    if port and target != "." and next_offset == end:
                        records.append((owner, SRV, port))
            offset = end
        return records
    except (IndexError, ValueError, struct.error):
        return []


def _query(sock, address, questions):
    transaction = 1 + secrets.randbelow(65535)
    header = struct.pack("!6H", transaction, 0, len(questions), 0, 0, 0)
    payload = b"".join(_wire_name(name) + struct.pack("!HH", kind, 1) for name, kind in questions)
    sock.sendto(header + payload, MULTICAST)
    deadline = time.monotonic() + 2
    records = []
    while (remaining := deadline - time.monotonic()) > 0:
        sock.settimeout(remaining)
        try:
            packet, sender = sock.recvfrom(9000)
        except TimeoutError:
            break
        if sender == (address, MULTICAST[1]):
            records.extend(response_records(packet, transaction))
    return records


def _instances(records):
    return {value for owner, kind, value in records if owner == SERVICE and kind == PTR
            and value.endswith("." + SERVICE)}


def connect_ports(records):
    """Keep only SRV ports for instances announced by the connect-service PTR."""
    instances = _instances(records)
    return {value for owner, kind, value in records if kind == SRV and owner in instances}


def discover(address):
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP) as sock:
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, 1)
        records = _query(sock, address, [(SERVICE, PTR)])
        missing = _instances(records) - {owner for owner, kind, _ in records if kind == SRV}
        # A normal tablet advertises one instance. Ignore pathological replies.
        if len(missing) > 8:
            return set()
        if missing:
            records.extend(_query(sock, address, [(name, SRV) for name in sorted(missing)]))
    return connect_ports(records)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("tablet_ipv4", type=ipaddress.IPv4Address, help="Known tablet's LAN IPv4 address")
    args = parser.parse_args()
    try:
        ports = discover(str(args.tablet_ipv4))
    except OSError as error:
        parser.exit(1, f"Local mDNS probe failed: {error}\n")
    if len(ports) != 1:
        parser.exit(1, "A single Wireless debugging endpoint was not discovered. Check the tablet's Wireless debugging screen.\n")
    print(f"{args.tablet_ipv4}:{ports.pop()}")


if __name__ == "__main__":
    main()
