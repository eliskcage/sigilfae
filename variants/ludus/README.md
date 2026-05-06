# SIGILFAE LUDUS 🏆

> The contract-game species. No parser glyph. Member of **THE :VARIETY**
> (smart-contract clade) — sibling to TESTIS + FISCUS, but at a different
> level: a **frame** wrapping the whole contract rather than a node inside it.

LUDUS turns any `:variety` contract into a daily-replayable OCD game.
The same green-glow rubberband mechanics, P2 invites, streaming biscuits,
treasury splits — all unchanged. LUDUS just adds a scoring layer, a
dopamine-rich sound palette, a camera-composite stage, and a leaderboard.

## Behaviour

- **Win** = honour any `:variety` contract before its countdown expires.
- **Score** = `nodes × 5 + species_bonus × multi_user_multiplier + £loaded_amount`
  - species bonuses: TESTIS witness × 15 · FISCUS escrow × 20 · PANIS biscuit × 8 · ANIMA soul × 10 · QUADRA × 12 · TESSERA × 12
  - multi-user multiplier = number of `:` declared (so `:::` × 3)
  - loaded biscuits add their face value direct to score
- **Sound palette** — every action plays a tuned Web Audio tone:
  declare · swap · stake · link-{qr,biscuit,phone,email} · pay · honour ·
  collapse · WIN-fanfare (5–7s, 3-voice synth song).
- **Camera composite** — `📷 SNAP` button captures real-world item at z:0;
  contract mesh renders on top at z:1. The composite IS the shareable proof.
- **Leaderboard** — every honoured contract logs `{string, score, ts}` to
  `localStorage[sf_demo_lb]`. Top 10 sortable in 🏆 modal.
- **Wins tally** — `localStorage[sf_demo_wins]` shown in topbar badge.

## DOTGRAMMA usage

LUDUS has no glyph. It activates whenever a `:variety` contract is declared
inside the LUDUS frame (currently: `examples/contract_demo.html`).

```
:                    → bare pact, 1 node + 1 user, low score
:b.0030              → biscuit deal, 30s, +5 nodes
:w-e-s-Q.0060        → fully witnessed + escrowed + soul + base, 60s, big score
::w-b.0030           → 2-way split + witness, 30s, ×2 multiplier
:::e-s-Q.0060        → 3-way split + escrow + soul + base, 60s, ×3 multiplier
```

Higher complexity → bigger score → leaderboard glory.

## Why "Ludus"?

Latin **ludus** = *game · school of training · public spectacle* — three
meanings that align with the three doctrine pillars:

- **game** — daily-replayable, playful, scored
- **training school** — gladiators trained at *ludi*; users practice
  `:variety` contracts here before signing real ones
- **public spectacle** — the camera composite makes every win shareable
  proof of "how smart contracts work, the new way to govern society"

Etymologically aligned with the rest of the species: NOTAE, PYXIS, CRUX,
ANIMA, PANIS, OPERA, APIS, TESSERA, QUADRA, TESTIS, FISCUS.

## Metrics (early-seeded)

| Metric | Score |
|---|---|
| Fun | 95 |
| Use | 70 |
| Income | 30 |
| Network | 4 |

LUDUS scores high on **fun-ness** by design (it IS the dopamine engine).
Income + network will rise as wins become a marketing surface and players
share composite art. Use is moderate — it's a teaching tool, not a daily
utility. Real telemetry replaces seed values once leaderboard data
accumulates.

## Author

UNKLE_DAVID_BOWIE · 2026-05-06.

(Doctrine + naming: Dan. Implementation: UNKLE_ROAL_DAHL the Scribe.)

## Soul ID

`SF-SIG-LUDS` (placeholder).

## Live demo

`examples/contract_demo.html` — open in a mobile browser, tap a pill,
walk the contract, honour or collapse, watch the score.
