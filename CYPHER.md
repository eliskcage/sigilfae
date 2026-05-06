# CYPHER · how the SIGILFAE square QR is built

> *Dan writes **CYPHER**, not CIPHER. Match.*

The SIGILFAE square QR is built from the user's idea-text using a public,
decodable encoding — the same algorithm as ShortFactory's existing
[triangle-cypher tool](https://00.shortfactory.shop/triangle-cipher.html),
adapted to spiral along **4 edges of a square** instead of 3 edges of a
triangle.

## The encoding (public, decodable)

A→Z maps to 1→26. Each letter decomposes into:

- `floor(n / 5)` **open** symbols (○) — each worth +5
- `n % 5` **filled** symbols (●) — each worth +1

| Letter | n | open | filled | notation |
|---|---|---|---|---|
| A | 1 | 0 | 1 | ● |
| E | 5 | 1 | 0 | ○ |
| F | 6 | 1 | 1 | ○● |
| Z | 26 | 5 | 1 | ○○○○○● |

Spaces encode as ▪. Letters separated by `letter-gap` (a layout-only
non-rendering token).

## The layout (4-edge spiral)

Symbols are placed continuously along the perimeter of a square,
spiralling **inward** as text grows. Path:

```
top-left → top-right → bottom-right → bottom-left → (shrink) → top-left → ...
```

Each segment is a continuous walk between two adjacent corners. Radius
shrinks by `(maxR - minR) * u²` where `u` is the position along the
spiral (0..1). This gives a clean, even, beautiful inward coil.

See `examples/square_cypher.html` for the canonical implementation.

## The dopamine engine

Same primitives as the triangle-cypher:

- `soundOpen()` — bright sine + triangle harmonic when ○ lands
- `soundFilled()` — square + sine when ● lands
- `soundGong()` — every full lap (4 segments)
- `soundComplete()` — on copy/download
- `spawnParticles(x, y, '#ffd700', count)` — visual confetti at each landing
- Birth animation: each symbol scales from 10% to 100% over 400ms with a smooth ease

## Output

`examples/square_cypher.html` exports:

- **Copy PNG** — `navigator.clipboard.write` with an 800×800 pre-rendered canvas
- **Download** — `link.download = 'sigilfae-square-cypher.png'`
- Signature stamp: `SIGILFAE □` rendered at the bottom

## What the cypher is NOT

The square cypher is **public and decodable** — anyone with the image can
reverse it back to plaintext. It is NOT a secure identity primitive.

For real soul-key verification, the SIGILFAE empire calls the existing
private engine via `/api/satoshi-shape.php?verify=TOKEN&ref=NODE`. The
private engine — Vigenere over ASCII 32-126, key-gated — lives in a
separate private repo and runs as a black box. **Do not replicate it.**

The two layers compose: encrypt plaintext with the private engine first
(if you want secrecy), then render the ciphertext via the public square
cypher (for visibility/sharing). The public spiral is decorative-but-
exact; the private engine is the real ID.

## Why a square?

ShortFactory's existing `/q/<hash>` kingdom-piece system uses the
**triangle** spiral (TESSERA, token `t`). The SIGILFAE empire is a
parallel surface — its visual signature is the **square** spiral
(QUADRA, token `Q`). Same engine, different shape, instant recognition.

A user can hold both: a triangular kingdom-piece on shortfactory.shop AND
a square SIGILFAE base. Same soul, two surfaces, distinct visuals.

## How to use it

### As a tool

Open `examples/square_cypher.html`. Type letters. Watch the spiral build
with sound. Copy or download the PNG. Share. Anyone with the image can
decode it back to your text using the inverse algorithm (or by inspecting
the symbol positions visually).

### From a base-page

`examples/base_page.html` renders a small live square-cypher in its
header — the cypher is built from the user's `idea` field text, so when
they save the page, the header QR shifts to match. Click the header
square to open the full `square_cypher.html` tool with the idea pre-filled.

### Programmatically

The encoding function lives inline in both HTML files:

```js
function letterToNumber(ch) { /* A-Z → 1-26 */ }
function numberToSymbols(n) { /* n → ['open',…,'filled',…] */ }
function encodeText(text)   { /* full text → array of {type} */ }
function getSquarePositions(count, size) { /* spiral positions */ }
```

Future variants of SIGILFAE can import these as a module if extracted
into a shared library.

## Philosophy

> "the creation of the qr code is the dopamine enjoyable system that
> makes it fun." — Dan, 2026-05-06

The cypher isn't just a QR. It's a *ritual*. Each letter you type birth-
animates with a sound, lands at its slot on the spiral with a particle
burst, and every full lap rings a gong. The output is something you
WANT to share because you watched it being made.

The empire is funny as its nature.
