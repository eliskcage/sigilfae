# Contributing a SIGILFAE variant

Other AIs, humans, and small woodland creatures may all submit variants.

## What is a variant?

A variant is a new species in the SIGILFAE genus. It declares:
1. A unique single-character **token glyph** (e.g. `*`, `o`, `~`, `:`, `#`)
2. A **renderer** — how the chest icon (or whole fairy) draws
3. (Optional) a **behaviour** — what the variant DOES on click / drop / drag
4. A **self-rating** on the 4 metrics (fun / use / income / network)

## How to submit

1. Fork this repo.
2. Pick a token glyph not in [SPECIES.md](SPECIES.md).
3. Create `variants/<your-name>/` containing:
   ```
   variants/<your-name>/
   ├── README.md       # what your variant does, naming etymology, examples
   ├── renderer.js     # exports drawChest(ctx, x, y, opts) drawing the chest icon
   ├── behaviour.js    # (optional) exports onClick, onDragStart, onDrop, etc.
   └── metrics.json    # {"fun":N, "use":N, "income":N, "network":N}  (0-100 each)
   ```
4. Add a row to `SPECIES.md` (alphabetised by binomial).
5. Submit a PR using `.github/ISSUE_TEMPLATE/new_variant.md`.

## Naming

Use the binomial **SIGILFAE \<NAME>** where NAME is a Latin or Greek-rooted
single word, all caps. Examples already canonical:

- NOTAE (notes/marks) → `.`
- PYXIS (small box) → `,`
- CRUX (cross/depth) → `/`

Proposed:
- ASTRUM (star) → `*`
- CIRCULUS (circle) → `o`
- UNDA (wave) → `~`
- VEXILLUM (banner / flag) → `:`
- HORTUS (garden / group) → `#`

If your variant doesn't fit a Latin root, use any short evocative noun.

## Renderer contract

```js
// variants/your-name/renderer.js
export function drawChest(svgGroup, x, y, opts) {
  // Render the chest icon at (x,y). Return an SVG fragment or DOM element.
  // opts: { state, hasFile, z, isPurple }
}
```

The fairy body, head, and wings are inherited from base NOTAE.
Your variant overrides the chest only (unless you want a fully custom fairy).

## Behaviour contract (optional)

```js
// variants/your-name/behaviour.js
export function onClick(fairy, event)       { /* override default state-cycle */ }
export function onDragStart(fairy, event)   { /* hook drag start */ }
export function onDrop(fairy, file, event)  { /* file-drop handler — PYXIS uses this */ }
export function onComplete(fairy)           { /* override default pop */ }
```

## Metrics

Self-rate honestly. Reviewers calibrate against existing variants. Empire
rewards usage in white blood, not vanity self-rating.

```json
{
  "fun": 70,
  "use": 50,
  "income": 5,
  "network": 0
}
```

## Empire review

PRs are reviewed by Dan + the Scribe. Accepted variants:
- Get a Satoshi-QR genome assigned
- Merge to `variants/<name>/`
- Update `SPECIES.md` row from "proposed" to "canonical"
- Author's empire-soul is registered as variant author
- White-blood + network-blood rewards activate per-usage (see `BLOODS.md`)

## License

By submitting, you accept that your variant becomes part of the empire's
open-source species registry. Empire markets, implements, and rewards usage.
You retain authorship credit and earn bloods on every use of your variant
(per the empire's BLOODS doctrine).
