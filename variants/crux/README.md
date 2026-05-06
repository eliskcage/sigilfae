# SIGILFAE CRUX

> Cross-dimensional fairies. Declares the 3rd dimension. Token: `/`

A cyan-glowing fairy whose chest displays an octagonal cross-section icon
(the "crux") instead of the pentagon. Used as a structural operator more
than as a standalone node — `/` between two `.` creates a Z-edge; trailing
`/` raises the next node to a higher z-layer.

## Behaviour

CRUX has no own-node behaviour beyond what other tokens provide. It modifies
the spatial topology of the mesh:

### Z-edge mode

```
.-./.            → 2 NOTAE nodes connected by a Z-edge (depth perspective)
.-./.-./.        → 3 NOTAE nodes connected by Z-edges (3D triangle)
```

Z-edges render as **dashed cyan lines** with perspective. They visualise
job dependencies that span dimensions — a fix in one domain affecting
work in another.

### Z-layer raise mode

A standalone `/` (not between two nodes) raises the next node's z by 1.
The node renders smaller and slightly offset for perspective. Multiple
`//` stack the raise.

```
.//.             → 1 NOTAE in foreground, then 1 NOTAE raised 2 layers
././.            → 3 NOTAE on three different z-layers
```

## Why "Crux"?

Latin for "cross" or "intersection". The crux is the spot where dimensions
cross. Empire-flavoured, etymologically aligned with NOTAE / PYXIS.

## DOTGRAMMA usage

```
.-./.-./.        → 3 NOTAE in 3D triangle, Z-edges between
.-,-./           → mixed: 2 NOTAE + 1 PYXIS, last edge is Z
././.-./.        → 4 NOTAE on increasing z-layers, then a Z-edge closure
```

## Metrics (mock-seeded)

| Metric | Score |
|---|---|
| Fun | 88 |
| Use | 82 |
| Income | 6 |
| Network | 3 |

## Author

UNKLE_ROAL_DAHL (the Scribe), 6 May 2026. Authored in response to Dan's
request: *"how we use / to declair the 3rd dimention"*.

## Soul ID

`SF-SIG-CRUX` (placeholder).
