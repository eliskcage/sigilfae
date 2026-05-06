# SPECIES.md · canonical Sigilfae catalogue

## The king

**SIGILFAE NOTAE** is the base species AND the king. As proven offspring
variants succeed in the wild, NOTAE absorbs their powers as chest pips
(see [ABSORPTION.md](ABSORPTION.md)). The king's current pip-stack lives
in [`kingship.json`](kingship.json) — empty at empire-genesis, populated
by review as variants qualify.

| Glyph | Binomial | Status | Parent | Author | Born | Behaviour |
|---|---|---|---|---|---|---|
| `.` | **SIGILFAE NOTAE** ♛ *(king)* | canonical · base | — (root) | UNKLE_ROAL_DAHL | 2026-05-06 | decorative node; amber pentagon chest; absorbs proven offspring's powers |
| `,` | **SIGILFAE PYXIS** | canonical | NOTAE | UNKLE_DAVID_BOWIE | 2026-05-06 | real file-upload form on chest; click → file picker |
| `/` | **SIGILFAE CRUX** | canonical | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | declares 3rd-dim; Z-edge or Z-layer raise |
| `s` | **SIGILFAE ANIMA** | canonical | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | soul-bond declaration; QR chest icon; binds mesh to a real account |
| `b` | **SIGILFAE PANIS** | canonical | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | biscuit affirmation token; small biscuit chest |
| `j` | **SIGILFAE OPERA** | canonical | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | jobs-list bearer; scroll chest; click expands jobs |
| `q` | **SIGILFAE APIS** | canonical | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | angry-bee quid-pro-quo; striped body + red stinger; blocks until trade resolved; clicking opens TESSERA gate |
| `t` | **SIGILFAE TESSERA** | canonical | NOTAE | UNKLE_DAVID_BOWIE | 2026-05-06 | Satoshi-QR-**triangle** chest; kingdom-piece gate (matches shortfactory.shop/q/ existing system) |
| `Q` | **SIGILFAE QUADRA** | canonical | NOTAE | UNKLE_DAVID_BOWIE | 2026-05-06 | Satoshi-QR-**square** chest; empire signature; SIGILFAE base-page gate (distinct from kingdom triangle) |
| `w` | **SIGILFAE TESTIS** ⚖ | canonical · :variety | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | witness · notepad chest with self-writing pencil · sits LEFT of bond · earns fee for observing · makes contracts auditable |
| `e` | **SIGILFAE FISCUS** ⚖ | canonical · :variety | NOTAE | UNKLE_ROAL_DAHL | 2026-05-06 | escrow pot · sits ON bond midpoint · holds funds visibly · auto-releases on commit · auto-refunds on default |
| `—` | **SIGILFAE LUDUS** 🏆 *(game)* | canonical · :variety · GAME | :variety | UNKLE_DAVID_BOWIE | 2026-05-06 | meta-frame around :variety contracts. WIN = honour the most complex contract. Score = nodes×5 + species bonus × multi-user × £loaded. Web Audio dopamine palette · camera composite at z:0 · win-fanfare song · 60-confetti burst · 🏆 wins tally · leaderboard. Daily-replayable. Live in `examples/contract_demo.html` |
| `*` | SIGILFAE ASTRUM | proposed | NOTAE | (open) | — | proposed: 5-pointed pentagonal stars between nodes; tag-input |
| `o` | SIGILFAE CIRCULUS | proposed | NOTAE | (open) | — | proposed: orbiting circular nodes; radio-toggle behaviour |
| `~` | SIGILFAE UNDA | proposed | NOTAE | (open) | — | proposed: sine-wave edges; range-slider behaviour |

## Genealogy notes

Most species are **glyph-children of NOTAE** — they introduce a new parser
token + render behaviour, descend directly from the king, and operate as
nodes in any DOTGRAMMA expression.

A second kind of offspring is the **game-species**, born from the `:variety`
clade rather than from NOTAE. SIGILFAE LUDUS is the first: it has no parser
glyph; it's a **frame** that wraps an entire `:variety` contract and turns
its honourable completion into a scored, sound-rich, photographable win.
LUDUS is sibling to TESTIS + FISCUS at the contract level, but at a
different abstraction — they are pieces inside a deal, LUDUS is the deal
treated as a daily-playable game.

Future game-species (proposed): **CIRCUS** (multi-LUDUS tournament bracket),
**THEATRUM** (replay-as-spectacle, recorded plays watchable as cinema).

## Adding a variant

1. Pick an unclaimed token glyph (single ASCII character).
2. Author a `variants/<your-name>/` folder with `README.md`, `renderer.js`, optional `behaviour.js`, `metrics.json`.
3. Submit a PR using `.github/ISSUE_TEMPLATE/new_variant.md`.
4. Empire reviews + assigns Satoshi-QR genome + merges + rewards in white blood.

## Live metrics (mock-seeded; replace with usage telemetry)

| Variant | Fun | Use | Income | Network |
|---|---:|---:|---:|---:|
| NOTAE | 92 | 88 | 14 | 6 |
| PYXIS | 80 | 75 | 8 | 4 |
| CRUX | 88 | 82 | 6 | 3 |
| ANIMA | 70 | 90 | 30 | 8 |
| PANIS | 85 | 60 | 5 | 4 |
| OPERA | 60 | 85 | 25 | 6 |
| APIS | 75 | 70 | 40 | 5 |
| TESSERA | 82 | 95 | 60 | 8 |
| QUADRA | 80 | 92 | 55 | 8 |
| TESTIS | 75 | 88 | 35 | 6 |
| FISCUS | 80 | 92 | 65 | 7 |
| LUDUS | — | — | — | — |
| ASTRUM | — | — | — | — |
| CIRCULUS | — | — | — | — |
| UNDA | — | — | — | — |

Metrics rate each variant 0–100 on:
- **fun-ness** — how delightful is it to type / watch / share?
- **usefulness** — does it solve real problems / communicate clearly?
- **income-ness** — how much revenue does it bring into the empire?
- **network-ness** — how many users adopt it / phones it spreads to?

Sum = species score. Higher scores → more visibility in `fairy_coder.html` defaults
→ more usage → more authoring rewards.
