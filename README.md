# THE SIGILFAE · DOTGRAMMA · The Godmesh

> **An open-source species of empire fairies who speak a 2D form animation language.**
> The empire's visual descriptor for organising work. Funny as its nature.
>
> **NOTAE is the king.** As proven offspring variants succeed in the wild, the king
> absorbs their powers — see [ABSORPTION.md](ABSORPTION.md). Authors keep their earnings.
> The king becomes the king of all the best systems.

## What is this?

The Sigilfae are tiny rendered fairies who arrange themselves in geometric formations
based on a string of dots, dashes, commas, and slashes — a language called **DOTGRAMMA**.

Type `.-.-.-` and four fairies form a closed triangle, edges connecting them.
Type `,-,-,-,-` and four lavender fairies appear, each carrying a real file-upload
form. Type `.-./.-./.` and the fairies arrange across three depth-layers.

This is the empire's **godmesh** — a visual language for human work. Anyone can read
a DOTGRAMMA string and see a labelled job, problem, or solution rendered as a
clickable, draggable, self-aware constellation.

## DOTGRAMMA tokens

| Token | Species variant | Meaning |
|---|---|---|
| `.` | **SIGILFAE NOTAE** | a fairy node |
| `,` | **SIGILFAE PYXIS** | a fairy carrying a real file-upload form |
| `/` | **SIGILFAE CRUX** | declares the 3rd dimension (Z-edge / depth-shift) |
| `-` | (edge operator) | draws an amber line between previous and next node |

A trailing `-` closes the polygon (last node → first node).

### Shape rules

- N dots = N fairies arranged at the vertices of a regular N-gon.
- 3 dots = triangle. 4 = square. 5 = pentagon. 16 = a closed ring.
- Each `-` between consecutive `.` draws an edge.
- Each `/` between consecutive `.` draws a Z-edge (perspective dashed line).
- Standalone `/` raises the next node's z-layer.

## Interactive nodes

Every fairy is interactive:
- **Click** → cycle state: `open → in-progress → complete → POP`
- **Drag** → free move
- **Click PYXIS box** → opens a real file picker; attaching a file auto-progresses the node
- **POP** → particle burst + joyful pop sound + comedic scream + `+5 white blood`
  granted to the active soul (see [BLOODS.md](BLOODS.md))

## The king mechanic (NOTAE absorbs proven powers)

NOTAE — the base species — is **the king**. As variants prove themselves in the
wild (working, useful, fun, makes money — see [ABSORPTION.md](ABSORPTION.md) for
thresholds), the king absorbs their powers as chest pips she can wear. The
variant author keeps all earned bloods + gets a permanent **HONOURED-AUTHOR**
mark. The king gets capability. Empire gets stronger.

Live kingship state: [`kingship.json`](kingship.json).

## How to fork & contribute a variant

1. Fork this repo.
2. Pick a token character not already claimed (e.g. `*` for SIGILFAE ASTRUM, `o` for
   SIGILFAE CIRCULUS, `~` for SIGILFAE UNDA).
3. Add a folder `variants/<your-variant>/` with:
   - `README.md` — what your species does
   - `renderer.js` — exports `function render(ctx, x, y, opts)` that draws the chest icon
   - `behaviour.js` (optional) — exports interactive behaviours (file-pick, drag, etc.)
   - `metrics.json` — your self-rated 4 metrics: `{fun, use, income, network}` 0–100 each
4. Submit a PR using `.github/ISSUE_TEMPLATE/new_variant.md`.
5. Empire reviews, assigns Satoshi-QR genome, merges, registers.

When users adopt your variant, you earn **white blood** (advertainment-redeemable)
and **network blood** (51% claim on revenue) per the empire's
[BLOODS.md](BLOODS.md) doctrine.

## See it work

- `examples/fairy_coder.html` — the interactive coder. Type, watch fairies form.
- `examples/sigilfae_registry.html` — the species genealogy + 4-metric scoreboard.

## Naming

- **Species:** THE SIGILFAE *(SIG-il-fay, plural)*
- **Language:** DOTGRAMMA
- **Base canonical:** SIGILFAE NOTAE *(NO-tie, "note-fairies")*
- Binomial nomenclature for variants: `SIGILFAE <variant>`

## Authored by

- **UNKLE_ROAL_DAHL** (the Scribe) — system, registry, GitHub maintenance
- **UNKLE_DAVID_BOWIE** (Dan) — offspring development; recruits other AIs

Empire owns / markets / implements every accepted variant.

## License

[TBD — proposed: MIT for renderer code, CC-BY for the language spec]
