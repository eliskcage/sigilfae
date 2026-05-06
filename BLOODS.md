# BLOODS · how SIGILFAE variant authors earn

The empire issues four bloods. Variant authors interact with three of them.

## The four bloods

| Blood | Earned by | Spendable on |
|---|---|---|
| **GOLD** | bloodline / inheritance (sealed) | privileged content unlocks |
| **WHITE** | proof-of-contribution + referral payouts | advertainment (promote your own work) |
| **RED** (level 2) | promotion of WHITE for level-2 souls | cashable / liquid SFT |
| **NETWORK** | count of working phones in your network | multiplier on white-blood payouts |

## How variant authors earn

When a user invokes your variant in their DOTGRAMMA string and the resulting
fairy is **completed** (popped) or **stakes a fix**:

1. **Worker** (the user clicking the node) gets `49%` of the job's gross income
   in cash/SFT.
2. **Empire** takes `51%` gross.
3. Out of empire's 51%, your variant's **author** receives **WHITE BLOOD** —
   capped at `51% × workerCash`, scaled by the AUTHOR's network blood
   (phone count, target 200+ for max cap), gated by quality + usage.
4. **Network blood**: each successful usage adds +1 to the author's
   working-phones count for that variant's lineage.

Maximum case (author has 200+ phones, top-quality usage):
- Worker: 49% cash
- Author: ~25% in white blood
- Empire treasury: ~26%

Low network case (author has <200 phones):
- Author's white-blood payout scales linearly with `network/200`.
- Empire treasury keeps the rest.

## Why white blood matters

White blood is **advertainment-redeemable** — spend it to promote your own
projects through the empire's content network. Users want white blood
because they want to advertise. This creates demand for VARIANTS that get
USED a lot (more use = more white blood).

## Level-2 promotion (red blood)

When a soul reaches level 2 (criteria TBD: cumulative white blood threshold +
network depth + soul-score gate), their accumulated white blood converts to
**RED BLOOD** — finite supply, cashable for real SFT/cash.

## Loyalty mechanic

If you author a variant that gets used by a soul-who-is-going-places (a high-
network user whose own work earns big), you rise with them — your white-blood
accumulates faster from their downstream activity. **The network is fairness-
aware as its structure.**

## Absorption preserves author earnings

If your variant proves itself and gets absorbed by NOTAE-the-king (see
[ABSORPTION.md](ABSORPTION.md)):

- **All your accumulated white blood + network blood is preserved.**
- When users invoke your token directly, your variant fires and you still earn.
- You receive a permanent `HONOURED-AUTHOR` mark — visible across the registry.
- Soul-score bump + faster path to **level 2** (red blood, cashable).

Absorption is recognition, not reassignment. The king gets capability; the
author gets retained earnings + permanent honour. Three-way win.

## Tracking

Every variant carries:
- Soul ID (Satoshi QR genome) assigned on merge
- Author soul ID (pinned at submission)
- Live usage telemetry → 4 metrics
- White-blood + network-blood ledger, per-author

See [`examples/sigilfae_registry.html`](examples/sigilfae_registry.html) for
the live registry (dev mock).

## Implementation

The canonical mechanic call is:

```js
window.IDF.logJobCompletion({
  jobId: 'godmesh-pop',          // or any job id
  workerIncome: jobGrossRevenue,
  workerSoul: workerSoulId,
  referrerSoul: variantAuthorSoulId,  // ← author of the variant being used
  workQuality: 0.0..1.0,
  usage: 0.0..1.0,
  networkAtTime: authorPhoneCount
});
```

This is exposed by `examples/fairy_coder.html` and `examples/sigilfae_registry.html`
as `window.IDF` and `window.FairyCoder` respectively. Server-side authoritative
ledger is on the empire's roadmap.
