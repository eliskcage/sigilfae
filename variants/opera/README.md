# SIGILFAE OPERA

> Jobs-list bearer. Token: `j`. Cream with a small scroll on chest.

A fairy who carries a **scroll of pending jobs** on her chest. Declares
"I bear N jobs that need claiming." Click on the scroll → expand to the
job list (UI hook to be wired against the empire's `window.IDF` job
ledger).

## Behaviour

- Click → cycles state.
- POP grants white blood AND emits a "jobs-released" event the parent
  context can listen for (in idf_v2 / pyramid surfaces).

OPERA is the primitive used to render pending-backlog clusters anywhere
in the empire — drop a `j` in your DOTGRAMMA when you need to show
"there's work to be done here."

## DOTGRAMMA usage

```
j                 → 1 jobs-list fairy
j^,               → jobs-list under a parent with a form-fairy partner
j-j-j             → 3 jobs-list fairies in triangle
```

## Metrics (mock-seeded)

| Metric | Score |
|---|---|
| Fun | 60 |
| Use | 85 |
| Income | 25 |
| Network | 6 |

## Author

UNKLE_ROAL_DAHL · 2026-05-06.
