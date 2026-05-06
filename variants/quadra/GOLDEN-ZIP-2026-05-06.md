# SIGILFAE QUADRA · GENOMIC GOLDEN ZIP

> **Locked: 2026-05-06**
> **Soul ID: SF-SIG-QUAD**
> **Author: UNKLE_DAVID_BOWIE (proposed) + UNKLE_ROAL_DAHL (Scribe)**

This zip is the canonical genomic snapshot of **SIGILFAE QUADRA** at the
moment of its design lock. Use this as the parent reference for all
QUADRA-descended offspring variants. Future evolutions inherit from this
genome.

## Contents

| File | Role |
|---|---|
| `MANIFEST.md` | this file — what's in the zip and why |
| `variants/quadra/README.md` | species spec |
| `variants/quadra/metrics.json` | self-rated 4 metrics |
| `examples/square_cypher.html` | full dopamine cypher tool · 4-edge spiral · sounds + particles + PNG export |
| `examples/base_page.html` | base-of-operations page · header uses live square cypher · iframed graph + video + form + pins + vote |
| `CYPHER.md` | doctrine: public/private layering · don't replicate the SKYDADDY engine |
| `commit-stamp.txt` | git commit hash at moment of lock |

## Genome (the locked design)

- **Token glyph:** `Q` (capital, case-sensitive distinct from `q` APIS bee)
- **Chest icon:** square Satoshi-QR (vs TESSERA's triangle)
- **Colour:** gold `#ffd700` on black charcoal
- **Layout primitive:** 4-edge spiral inward (top-left → top-right → bottom-right → bottom-left → shrink → repeat)
- **Encoding:** A→Z mapped to 1→26 → `floor(n/5)` open + `n%5` filled symbols (same as triangle-cypher)
- **Sound engine:** Web Audio synth — `soundOpen` (sine + triangle harmonic 540/720Hz) · `soundFilled` (square + sine 380/190Hz) · `soundGong` (4-note arpeggio every full lap) · `soundComplete` (rising triangle 880→1320Hz)
- **Particles:** 8 amber particles per letter at landing point
- **Birth animation:** scale 10% → 100% over 400ms ease-cubic
- **Birth time tracking:** preserved across re-renders so existing letters don't re-animate when text grows
- **Notation:** ○ = open (+5), ● = filled (+1), ▪ = space
- **Output:** 800×800 PNG with `SIGILFAE □` signature stamp at bottom

## Behaviour

- Click QUADRA in `fairy_coder.html` → opens the QR-gate modal (shared with TESSERA)
- Type a valid soul-string → redirects to `base_page.html?qr=<string>`
- Base-page header runs the same encoding live — text in the form's `idea` field deterministically renders the cypher

## Lineage

- **Parent:** SIGILFAE NOTAE ♛ (the king)
- **Sibling-by-shape:** SIGILFAE TESSERA (`t`, triangle, kingdom-piece)
- **Sibling-by-purpose:** SIGILFAE APIS (`q`, the bee that opens the same gate)
- **Children-pending:** awaiting Dan's offspring announcement (he hinted at a clever variation)

## Why golden-zip

The empire convention: when a design is locked + production-ready,
snapshot it as a "GOLDEN ZIP" so all descendants can reference the
canonical parent state. Pattern established by: `seeing3d-GOLDEN-2026-05-04.zip`,
`fairy-capture.html V5 GOLDEN ZIP (1,056 soul shards, emotion ghost anims)`.

QUADRA is the first SIGILFAE species to receive a golden-zip lock.
TESSERA / NOTAE / etc. live in the repo at HEAD; QUADRA additionally
has this snapshot for offspring lineage.

## Reading instructions for offspring authors

When you (any AI or human) want to author a QUADRA-derived variant:

1. Unzip this file.
2. Read `examples/square_cypher.html` — your variant inherits the
   encoding + dopamine engine. Don't break the A-Z mapping; don't break
   the inward-spiral layout.
3. Identify ONE thing to vary. Possible axes:
   - Layout shape (5-edge pentagon spiral? 6-edge hexagon? Inward-rotating?)
   - Cypher algorithm (different base, different decomposition)
   - Sound signature (different chord progression, different timbre)
   - Output medium (animated GIF instead of static PNG?)
4. Author your variant with a single-character token glyph not in
   `SPECIES.md`.
5. Submit a PR per `CONTRIBUTING.md`. Cite this golden zip as your
   parent reference.

## Mantra

> SKYDADDY is the greater flea.

## Status

Genomic lock effective 2026-05-06. The king awaits offspring.
