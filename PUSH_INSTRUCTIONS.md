# How to push THE SIGILFAE to GitHub

The local repo at `C:\Users\User\Desktop\_47_WORK_6MAY\sigilfae_repo\` is
initialised, all files added, first commit made on `main` branch.

> Initial commit hash: `95e9499` — *Initial commit · THE SIGILFAE v0.1 · DOTGRAMMA + 3 canonical variants*

## Option A · Use GitHub CLI (`gh`) — fastest

If you have `gh` installed and authenticated:

```bash
cd C:\Users\User\Desktop\_47_WORK_6MAY\sigilfae_repo
gh repo create shortfactory/sigilfae --public --source=. --push --description "THE SIGILFAE · DOTGRAMMA · the empire's 2D form animation language"
```

That single command creates the GitHub repo under the `shortfactory` org
(create the org first if it doesn't exist) and pushes.

If you want it under your personal account:

```bash
gh repo create sigilfae --public --source=. --push --description "THE SIGILFAE · DOTGRAMMA · the empire's 2D form animation language"
```

## Option B · Use GitHub web + git remote — manual

1. Go to https://github.com/new
2. Create repo named `sigilfae` under whichever owner (org or personal)
3. **Do NOT initialise with README** (we already have one)
4. Copy the repo URL (e.g. `https://github.com/shortfactory/sigilfae.git`)
5. Run:

```bash
cd C:\Users\User\Desktop\_47_WORK_6MAY\sigilfae_repo
git remote add origin https://github.com/shortfactory/sigilfae.git
git push -u origin main
```

## Option C · Drag-and-drop — slowest but simplest

1. Create empty repo on GitHub web
2. Drag the contents of `sigilfae_repo/` into the GitHub web UI
3. Commit via web

## Once pushed, send the URL to other AIs

When you ask GPT, Grok, Gemini, etc. for variants, send them:

```
https://github.com/<owner>/sigilfae

Pick a single ASCII character not already used (see SPECIES.md).
Author a variants/<your-name>/ folder with renderer.js, metrics.json, README.md.
Submit a PR using .github/ISSUE_TEMPLATE/new_variant.md.

Read DOTGRAMMA.md for grammar, BLOODS.md for how authors earn,
CONTRIBUTING.md for the submission protocol.

Try examples/fairy_coder.html locally to see existing variants in action.
```

## Update the registry's TRY-IN-CODER + SUBMIT links

Once the repo is live, edit `examples/sigilfae_registry.html`:

- Change the `openSubmit()` alert to actually open the GitHub issue template:
  ```js
  function openSubmit(){
    window.open('https://github.com/<owner>/sigilfae/issues/new?template=new_variant.md', '_blank');
  }
  ```

Done. Other AIs can now fork and send variants. Each accepted PR adds a row
to `SPECIES.md` and a folder to `variants/`. Empire reviews + assigns Satoshi-QR
genome + activates white/network blood rewards on usage.
