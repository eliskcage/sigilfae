# DOTGRAMMA · the empire's 2D form animation language

> A canonical specification of the Sigilfae grammar, current as of v0.1 (6 May 2026).

## Tokens

| Glyph | Species | Role | Behaviour |
|---|---|---|---|
| `.` | NOTAE | node | decorative; fairy with amber pentagon chest |
| `,` | PYXIS | node + form | fairy with file-upload widget; clicking the box opens a real file picker |
| `/` | CRUX | depth | declares 3rd-dimension (Z-edge between nodes; trailing `/` raises next node's Z-layer) |
| `s` | ANIMA | soul-bond | fairy with user's SFT soul-QR on chest; declares blood-connection live |
| `b` | PANIS | biscuit | fairy with biscuit on chest; affirmation / thanks / small-reward token |
| `j` | OPERA | jobs-list | fairy with scroll on chest; bears a list of pending jobs |
| `q` | APIS | quid-pro-quo / gate | angry-bee fairy with stinger; click opens TESSERA gate to a base-page |
| `t` | TESSERA | password-and-page | golden Satoshi-QR-triangle chest; click → QR-input modal → base-of-operations page |
| `-` | (operator) | edge | draws an amber edge between previous and next node |
| `^` | (operator) | tree branch | declares the flanking nodes are siblings under a shared parent above; activates TREE MODE |

Tokens not in this table are ignored. Whitespace is ignored. Tree mode is
triggered by the presence of any `^`.

## Grammar (informal BNF)

```
shape    ::= ( node | edge | depth )*
node     ::= '.' | ','            ; spawns a fairy
edge     ::= '-'                  ; pending until next node arrives
depth    ::= '/'                  ; pending until next node arrives, OR
                                  ;   between two nodes : draws Z-edge
                                  ;   trailing : closes loop with Z-edge
```

A trailing `-` at end of string closes the polygon (edge from last node to first).
A trailing `/` closes the polygon as a Z-edge.

## Layout rule

For N nodes, vertices are placed at the corners of a **regular N-gon**, centred
on the rendering surface.

- N=1 → centre point
- N=2 → horizontal line
- N=3 → triangle
- N=4 → square
- N=5 → pentagon
- N=K → K-gon

Vertex i sits at angle `(i / N) * 2π - π/2` (so the first vertex is at the top).

## Edge rule

Between any pair of consecutive `.` (or `,`) tokens with `-` between them,
draw a 2D edge. Between any pair with `/` between them, draw a Z-edge
(perspective-dashed line in cyan).

## Z-layer rule

Each `/` not used as an edge raises the next node's `z` by 1. A node with
`z=k` renders:
- scale = `1 / (1 + 0.18·k)`
- opacity = `1 / (1 + 0.25·k)`
- y-offset = `-24·k` (pushed up = foreground)
- x-offset = `+8·k` (slight perspective shift)
- z-index = `10 - k` (higher z = deeper, drawn behind)

## Closure

A trailing `-` (or `/`) closes the polygon. Without trailing operator,
the polygon is open.

```
.-.-.   → triangle vertices, 2 edges (open V)
.-.-.-  → triangle vertices, 3 edges (closed)
.-.-.-. → square vertices, 3 edges (open square, 3 sides)
.-.-.-.-→ square vertices, 4 edges (closed square)
```

## Examples

```
....                          → 4 dancing fairies in square corners (no edges)
.-.-.-                        → closed triangle
.-.-.-.-                      → closed square
.-.-.-.-.-                    → closed pentagon
,-,-,-,-                      → 4 PYXIS upload-form fairies in closed square
.-,-.-,-                      → mixed NOTAE + PYXIS, 4-vertex closed square
.-./.-./.                     → 3 nodes, with Z-edges via /
././.                         → 3 nodes raised on increasing z-layers
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- → closed 16-gon (huge ring)
```

## Tree mode (the cascade-pop mechanic)

When `^` appears anywhere in the input, the parser enters **TREE MODE**:

- The flanking nodes of each `.^.` (or any species pair around `^`) are
  declared **siblings under a shared parent** in the row above.
- Multiple sibling-pairs link up into a hierarchy with a single root —
  the **♛ PAYMENT FAIRY** at the apex.
- Layout: vertical tree, leaves at the bottom, parents stacked above.

### Cascade-pop / row locking

In tree mode:
- **Only the bottom row (leaves) is pop-eligible** — higher rows are
  greyed out and unclickable.
- When ALL bottom-row leaves have been popped, the row above unlocks.
- The cascade continues upward until the **PAYMENT FAIRY** unlocks at the
  apex.
- Popping the PAYMENT FAIRY fires a **100× blood reward** + a celebratory
  ceremony (massive particle burst, fanfare sound, dedicated toast,
  empire-revenue-released event).

### Example (Dan's spec)

```
.^. .^. .^.
```

= 6 leaf-nodes in 3 sibling-pairs → 3 mid-tier parents → 1 PAYMENT FAIRY.

```
            ♛   (payment fairy at apex — locked until all below clear)
          / | \
         .  .  .   (3 mid-tier parents — locked until leaves clear)
        /|  /|  /|
       . . . . . .   (6 bottom leaves — pop-eligible)
```

### Why it works

- Lowers the engagement bar — anyone can click a small leaf.
- Creates a **cascade incentive** — lots of small contributors must finish
  before mid-tier work even starts.
- Apex is a true milestone, never reachable without full-chain completion.
- Audience workshop, made structural.

## LOCKED state — pay-once enforcement

Any fairy can enter **LOCKED state** when its associated job has been
claimed by a soul. Greyed out, dimmed, no pointer events. The QR on the
locked fairy proves who claimed it. This prevents double-payment by
physical impossibility, not policy.

## Versioning

This is **DOTGRAMMA v0.2**. Future versions may add:
- `*` ASTRUM (star nodes / pentagonal stars between nodes)
- `o` CIRCULUS (orbiting nodes / radio-toggle behaviour)
- `~` UNDA (sine-wave edges / range-slider behaviour)
- `:` (label tag)
- `#` (group bracket — selects a sub-mesh)

Each new token requires a renderer + a behaviour spec + 4-metric self-rating
in its `variants/<name>/` folder. See [CONTRIBUTING.md](CONTRIBUTING.md).
