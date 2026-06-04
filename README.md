# Jailbreak Scaling Laws project page

This folder is a static GitHub Pages site for **Jailbreak Scaling Laws for Large Language Models: Polynomial-Exponential Crossover**.

The layout has been restyled to match the academic project page format at `energy-based-fine-tuning.github.io`: large centered title, blue author links, dark rounded paper/code buttons, and a light gray TL;DR card.

## Files to upload

Upload the contents of this folder to the root of your GitHub Pages repository. The repository root should contain `index.html` directly.

```text
index.html
favicon.svg
.nojekyll
404.html
robots.txt
assets/
paper-source/
```

## Before publishing

1. Replace the `href="#"` on the **Code** button in `index.html` with your public code repository URL.
2. Replace `assets/paper/jailbreak-scaling-laws-draft.pdf` with the final paper PDF when available.
3. Replace the placeholder BibTeX entry in `index.html` when the official arXiv/conference citation is available.
4. The Harvard and MIT logos are loaded from the URLs you provided, with local text-based fallback wordmarks in `assets/img/logos/` for offline preview.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages setup

1. Create a repository, for example `jailbreak-scaling-laws`.
2. Upload this folder's contents to the repository root.
3. Go to **Settings -> Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` and **Folder** to `/root`.
6. Save.

Your page will be available at:

```text
https://YOUR-USERNAME.github.io/jailbreak-scaling-laws/
```

For a root user page, create a repository named exactly `YOUR-USERNAME.github.io` and upload the same files there.


## Deployment note

This version inlines the project-page CSS and JavaScript in `index.html`. This avoids the common GitHub Pages issue where `assets/css/style.css` is cached from an older deployment and the live site looks different from the local preview.

For the cleanest deployment, remove the old repository contents first, then copy this folder's contents into the repository root and push. Do not only replace `index.html` while leaving old assets in place.
