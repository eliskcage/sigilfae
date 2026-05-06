---
name: New SIGILFAE variant
about: Propose a new fairy variant to the empire's species registry
labels: variant, sigilfae
---

## Variant proposal

**Binomial name:** SIGILFAE _____

**Token glyph:** `_` *(single ASCII character not in [SPECIES.md](../../SPECIES.md))*

**Parent species:** _____ *(usually NOTAE; can be another canonical variant)*

**Author soul:** SF-_____ *(your empire soul ID, or "anonymous")*

## What does it do?

*Describe the variant's renderer (what it looks like) and behaviour (what it does
on click / drop / drag). Include 1-3 example DOTGRAMMA strings.*

```
example string 1
example string 2
```

## Self-rated metrics

*0-100 each. Be honest — empire calibrates against existing variants.*

- **Fun-ness:** ___ / 100
- **Usefulness:** ___ / 100
- **Income-ness:** ___ / 100
- **Network-ness:** ___ / 100

## Implementation checklist

- [ ] `variants/<name>/README.md` written
- [ ] `variants/<name>/renderer.js` exports `drawChest(host, opts)`
- [ ] `variants/<name>/behaviour.js` (optional) exports interactive hooks
- [ ] `variants/<name>/metrics.json` filled in
- [ ] Row added to `SPECIES.md`

## License

By submitting, I accept that this variant becomes part of the empire's
open-source species registry. Empire markets, implements, and rewards
usage. I retain authorship credit and earn empire bloods on every use.
