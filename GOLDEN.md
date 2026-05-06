# GOLDEN · the smart-contract demo is locked

> **`examples/contract_demo.html`** — version of 2026-05-07 — is the canonical
> reference implementation of THE :VARIETY contract clade and the SIGILFAE
> LUDUS game-frame. Tagged **`contract-v1.0-golden`**.

## What this is

A single self-contained HTML file (~106 KB) that demonstrates the empire's
visual smart-contract grammar end-to-end on a phone:

- **DOTGRAMMA** parser · `:` declares a contract; dots and colons after it
  are participants; dashes are decorative; the parser auto-closes the
  polygon so triangles, squares, pentagons all render as proper closed shapes
- **THE :VARIETY** clade · TESTIS witness, FISCUS escrow, plus PANIS,
  ANIMA, QUADRA, TESSERA, OPERA, APIS, PYXIS, NOTAE
- **SIGILFAE LUDUS** game-frame · score complexity, win on honour,
  leaderboard, fanfare, daily replayable, camera-composite art
- **Adaptive layout** · 1 user → vertical pair · 2 users → triangle ·
  N users → regular (N+1)-gon, empire at top vertex; polygon shrinks
  for high N; hard clamp keeps every fairy on-stage
- **Two parsing notations** · multi-colon shorthand (`:`, `::`, `:::`) and
  explicit dot notation (`:.-.`, `:.-.-.`); `userCount = max(colons, dots)`
- **Player-2 invite** · 2-minute link-or-reset window, 4 channels
  (QR / biscuit / phone / email)
- **Streaming pay-as-you-go** loaded biscuits with thumbprint-locked escrow
- **Rubberband resolution** · honour gilds, collapse implodes; black mark
  on default; 51% / 49% rail on soured deals
- **WHITE BLOOD** · the demo's reward currency; ShortFactory pays the user
  white blood when the empire is the payer; soul-bind via ANIMA fairy
  menu binds the balance to an SFT soul
- **BAKE QR** · tap = bake the contract into a scannable QR encoding
  `smartcontract.shortfactory.shop/?contract=…&p=…`; horizontal swipe on
  the button sets committed probability (100% GUARANTEED → 0% BLUFF)
- **Inbound URL pickup** · scanning a baked QR loads the contract +
  probability into another phone instantly
- **Side command menu** · 16 thumb-scrollable operators on the right edge
- **Studio migration banner** · auto-flags unruly contracts and links to
  smartcontract.shortfactory.shop/studio
- **Mobile fullscreen** · `@media (max-width: 600px)` drops the desktop
  phone-frame; phone fills 100dvh
- **Background gestures** · tap stage = camera snap cycle · hold = full
  reset · long-hold any fairy = swap payer · tap fairy = species menu
- **Dopamine sound palette** · declare/swap/stake/link-x4/pay/honour/
  collapse/win-fanfare; 5–7s 3-voice fanfare on win
- **Camera composite** · `getUserMedia` at z:0; contract mesh on top;
  the composite IS the win-as-art
- **Fairy voice** · Web Speech API · female / pitch 2.0 / rate 1.25 ·
  prefers Princess + novelty voices, then Karen/Tessa/Allison · toggle
  🧚‍♀️/🤐 in the topbar · visual subtitle bubble accompanies every line ·
  she fairysplains every move

## Where it lives

- This repo: `examples/contract_demo.html`
- Live: <https://smartcontract.shortfactory.shop/>
- Local zip: `C:\Users\User\Desktop\contract-demo-GOLDEN-2026-05-07.zip`
- Git tag: `contract-v1.0-golden` (commit pinned)

## Lock

Per empire convention: **DO NOT MODIFY golden without explicit ask**.

- **Additions OK** — adding new species, new sounds, new pay options that
  don't change existing semantics is fine; commit those on `main`
- **Refactors require permission** — moving the parser, changing layout
  math, swapping the voice engine, etc. need Dan's say-so first
- **Future versions branch off this tag** — if a v2 is needed, branch
  `contract-v2-WIP` from `contract-v1.0-golden` and submit a PR
- **Bug fixes are NOT refactors** — fix the bug; if the fix is more than
  ~10 lines or touches unrelated code, ask first

## Author

Doctrine · UNKLE_DAVID_BOWIE (Dan)
Build · UNKLE_ROAL_DAHL (the Scribe)
Locked · 2026-05-07
