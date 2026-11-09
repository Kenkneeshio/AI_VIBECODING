(function installRoomcraftDeterminismCore(root) {
  'use strict';

  const CORE_VERSION = '1.0.0';
  const FORMAT_VERSION = 1;
  const SHA256_PREFIX = 'sha256:';

  class DeterminismError extends Error {
    constructor(code, message, details) {
      super(message);
      this.name = 'DeterminismError';
      this.code = code;
      if (details !== undefined) this.details = details;
    }
  }

  function fail(code, message, details) {
    throw new DeterminismError(code, message, details);
  }

  function assert(condition, code, message, details) {
    if (!condition) fail(code, message, details);
  }

  function compareCodeUnits(left, right) {
    const a = String(left);
    const b = String(right);
    return a < b ? -1 : a > b ? 1 : 0;
  }

  function pathFor(parent, key) {
    if (typeof key === 'number') return `${parent}[${key}]`;
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key)
      ? `${parent}.${key}`
      : `${parent}[${JSON.stringify(key)}]`;
  }

  function canonicalStringify(value) {
    const active = new WeakSet();

    function visit(current, path) {
      if (current === null) return 'null';
      const kind = typeof current;
      if (kind === 'string' || kind === 'boolean') return JSON.stringify(current);
      if (kind === 'number') {
        assert(Number.isFinite(current), 'NON_FINITE_NUMBER', `Non-finite number at ${path}`);
        return Object.is(current, -0) ? '0' : JSON.stringify(current);
      }
      if (kind !== 'object') {
        fail('UNSUPPORTED_VALUE', `Unsupported ${kind} at ${path}`);
      }
      assert(!active.has(current), 'CYCLIC_VALUE', `Cyclic value at ${path}`);
      active.add(current);

      let output;
      if (Array.isArray(current)) {
        const enumerableExtras = Object.keys(current).filter(key => {
          const index = Number(key);
          return !Number.isInteger(index) || index < 0 || index >= current.length || String(index) !== key;
        });
        assert(enumerableExtras.length === 0, 'ARRAY_EXTRA_PROPERTY',
          `Array has enumerable non-index properties at ${path}`, enumerableExtras);
        const parts = [];
        for (let index = 0; index < current.length; index += 1) {
          const descriptor = Object.getOwnPropertyDescriptor(current, String(index));
          assert(descriptor, 'SPARSE_ARRAY', `Sparse array slot at ${pathFor(path, index)}`);
          assert(Object.prototype.hasOwnProperty.call(descriptor, 'value'), 'ACCESSOR_VALUE',
            `Accessor values are not deterministic at ${pathFor(path, index)}`);
          parts.push(visit(descriptor.value, pathFor(path, index)));
        }
        output = `[${parts.join(',')}]`;
      } else {
        assert(Object.prototype.toString.call(current) === '[object Object]', 'NON_PLAIN_OBJECT',
          `Only plain records are supported at ${path}`);
        const enumerableSymbols = Object.getOwnPropertySymbols(current)
          .filter(symbol => Object.prototype.propertyIsEnumerable.call(current, symbol));
        assert(enumerableSymbols.length === 0, 'SYMBOL_KEY',
          `Enumerable symbol keys are not supported at ${path}`);
        const keys = Object.keys(current).sort(compareCodeUnits);
        const parts = keys.map(key => {
          const descriptor = Object.getOwnPropertyDescriptor(current, key);
          assert(descriptor && Object.prototype.hasOwnProperty.call(descriptor, 'value'), 'ACCESSOR_VALUE',
            `Accessor values are not deterministic at ${pathFor(path, key)}`);
          return `${JSON.stringify(key)}:${visit(descriptor.value, pathFor(path, key))}`;
        });
        output = `{${parts.join(',')}}`;
      }

      active.delete(current);
      return output;
    }

    return visit(value, '$');
  }

  function canonicalClone(value) {
    return JSON.parse(canonicalStringify(value));
  }

  function deepFreeze(value, seen) {
    if (value === null || typeof value !== 'object') return value;
    const visited = seen || new WeakSet();
    if (visited.has(value)) return value;
    visited.add(value);
    Object.keys(value).forEach(key => deepFreeze(value[key], visited));
    return Object.freeze(value);
  }

  function utf8Bytes(value) {
    const text = String(value);
    const bytes = [];
    for (let index = 0; index < text.length; index += 1) {
      const first = text.charCodeAt(index);
      let point;
      if (first >= 0xD800 && first <= 0xDBFF) {
        const second = text.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
          point = 0x10000 + ((first - 0xD800) << 10) + (second - 0xDC00);
          index += 1;
        } else {
          point = 0xFFFD;
        }
      } else if (first >= 0xDC00 && first <= 0xDFFF) {
        point = 0xFFFD;
      } else {
        point = first;
      }

      if (point <= 0x7F) {
        bytes.push(point);
      } else if (point <= 0x7FF) {
        bytes.push(0xC0 | (point >>> 6), 0x80 | (point & 0x3F));
      } else if (point <= 0xFFFF) {
        bytes.push(0xE0 | (point >>> 12), 0x80 | ((point >>> 6) & 0x3F), 0x80 | (point & 0x3F));
      } else {
        bytes.push(0xF0 | (point >>> 18), 0x80 | ((point >>> 12) & 0x3F),
          0x80 | ((point >>> 6) & 0x3F), 0x80 | (point & 0x3F));
      }
    }
    return new Uint8Array(bytes);
  }

  function byteArray(value) {
    if (typeof value === 'string') return utf8Bytes(value);
    if (ArrayBuffer.isView(value)) {
      return new Uint8Array(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength));
    }
    if (Object.prototype.toString.call(value) === '[object ArrayBuffer]') {
      return new Uint8Array(value.slice(0));
    }
    if (Array.isArray(value)) {
      value.forEach((byte, index) => assert(Number.isInteger(byte) && byte >= 0 && byte <= 255,
        'INVALID_BYTE', `Invalid byte at index ${index}`));
      return new Uint8Array(value);
    }
    fail('INVALID_BYTES', 'Expected a string, ArrayBuffer, typed array, or byte array');
  }

  const SHA256_CONSTANTS = Object.freeze([
    0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
    0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
    0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
    0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
    0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
    0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
    0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
    0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
  ]);

  function rotateRight(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }

  function sha256Bytes(value) {
    const input = byteArray(value);
    const paddedLength = Math.ceil((input.length + 9) / 64) * 64;
    const padded = new Uint8Array(paddedLength);
    padded.set(input);
    padded[input.length] = 0x80;
    const bitLength = input.length * 8;
    const high = Math.floor(bitLength / 0x100000000);
    const low = bitLength >>> 0;
    for (let offset = 0; offset < 4; offset += 1) {
      padded[paddedLength - 8 + offset] = (high >>> (24 - offset * 8)) & 0xFF;
      padded[paddedLength - 4 + offset] = (low >>> (24 - offset * 8)) & 0xFF;
    }

    const state = new Uint32Array([
      0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
      0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
    ]);
    const words = new Uint32Array(64);

    for (let block = 0; block < padded.length; block += 64) {
      for (let index = 0; index < 16; index += 1) {
        const offset = block + index * 4;
        words[index] = ((padded[offset] << 24) | (padded[offset + 1] << 16)
          | (padded[offset + 2] << 8) | padded[offset + 3]) >>> 0;
      }
      for (let index = 16; index < 64; index += 1) {
        const s0 = rotateRight(words[index - 15], 7) ^ rotateRight(words[index - 15], 18)
          ^ (words[index - 15] >>> 3);
        const s1 = rotateRight(words[index - 2], 17) ^ rotateRight(words[index - 2], 19)
          ^ (words[index - 2] >>> 10);
        words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
      }

      let a = state[0];
      let b = state[1];
      let c = state[2];
      let d = state[3];
      let e = state[4];
      let f = state[5];
      let g = state[6];
      let h = state[7];
      for (let index = 0; index < 64; index += 1) {
        const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
        const choose = (e & f) ^ ((~e) & g);
        const temp1 = (h + sum1 + choose + SHA256_CONSTANTS[index] + words[index]) >>> 0;
        const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
        const majority = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (sum0 + majority) >>> 0;
        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
      }
      state[0] = (state[0] + a) >>> 0;
      state[1] = (state[1] + b) >>> 0;
      state[2] = (state[2] + c) >>> 0;
      state[3] = (state[3] + d) >>> 0;
      state[4] = (state[4] + e) >>> 0;
      state[5] = (state[5] + f) >>> 0;
      state[6] = (state[6] + g) >>> 0;
      state[7] = (state[7] + h) >>> 0;
    }

    return SHA256_PREFIX + Array.from(state)
      .map(word => word.toString(16).padStart(8, '0'))
      .join('');
  }

  function sha256String(value) {
    return sha256Bytes(utf8Bytes(value));
  }

  function canonicalHash(value) {
    return sha256String(canonicalStringify(value));
  }

  function safeToken(value, label) {
    const token = String(value).trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
    assert(token.length > 0, 'INVALID_ID_TOKEN', `${label} must contain an ASCII letter or number`);
    return token.slice(0, 40);
  }

  function createSeededIdFactory(options) {
    const config = options || {};
    const seed = Object.prototype.hasOwnProperty.call(config, 'seed') ? canonicalClone(config.seed) : 'roomcraft';
    const namespace = safeToken(config.namespace || 'object', 'ID namespace');
    let counter = config.start === undefined ? 0 : config.start;
    assert(Number.isSafeInteger(counter) && counter >= 0, 'INVALID_ID_COUNTER', 'ID counter must be a non-negative safe integer');
    const seedHash = canonicalHash(seed);

    function snapshot() {
      return deepFreeze({ formatVersion: FORMAT_VERSION, seedHash, namespace, counter });
    }

    function restore(value) {
      const state = canonicalClone(value);
      assert(state.formatVersion === FORMAT_VERSION, 'ID_STATE_VERSION', 'Unsupported seeded ID state version');
      assert(state.seedHash === seedHash && state.namespace === namespace, 'ID_STATE_MISMATCH',
        'Seeded ID state belongs to another seed or namespace');
      assert(Number.isSafeInteger(state.counter) && state.counter >= 0, 'INVALID_ID_COUNTER',
        'ID state counter must be a non-negative safe integer');
      counter = state.counter;
      return snapshot();
    }

    function next(kind) {
      const type = safeToken(kind || 'item', 'ID kind');
      counter += 1;
      const sequence = String(counter).padStart(6, '0');
      const digest = sha256String(`${seedHash}\u0000${namespace}\u0000${type}\u0000${counter}`).slice(SHA256_PREFIX.length, 19);
      return `${namespace}-${type}-${sequence}-${digest}`;
    }

    return Object.freeze({ next, snapshot, restore, get counter() { return counter; }, seedHash, namespace });
  }

  root.RoomcraftDeterminismCore = Object.freeze({
    CORE_VERSION,
    FORMAT_VERSION,
    SHA256_PREFIX,
    DeterminismError,
    assert,
    compareCodeUnits,
    canonicalize: canonicalClone,
    canonicalStringify,
    canonicalClone,
    clone: canonicalClone,
    canonicalHash,
    deepFreeze,
    utf8Bytes,
    sha256Bytes,
    sha256String,
    createSeededIdFactory,
    createIdAllocator: createSeededIdFactory
  });
}(typeof window !== 'undefined' ? window : globalThis));
