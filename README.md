# Jailbreak Scaling Laws for Large Language Models - Project Page

This folder contains a GitHub Pages-ready static project page for:

**Jailbreak Scaling Laws for Large Language Models: Polynomial-Exponential Crossover**

Authors: Indranil Halder, Annesya Banerjee, Cengiz Pehlevan

## Files

```text
.
├── index.html                         # Main project page
├── favicon.svg                        # Lightweight site icon
├── .nojekyll                          # Keeps GitHub Pages from processing files with Jekyll
├── assets/
│   ├── css/style.css                  # Page styling
│   ├── js/main.js                     # Tabs and small interactions
│   ├── img/                           # Figures copied from the paper zip
│   └── paper/jailbreak-scaling-laws-draft.pdf
└── paper-source/                      # LaTeX files from the uploaded source
```

## Important notes before publishing

1. The uploaded zip did not include `references.bib`. I compiled a draft PDF from `arxiv.tex`, but citations/references in that PDF may show as unresolved. Replace `assets/paper/jailbreak-scaling-laws-draft.pdf` with the final compiled PDF before announcing the page.
2. The page includes a disabled "Code link pending" button. Replace it with the public code repository link when available.
3. The BibTeX entry is a preprint placeholder. Replace it with the official arXiv/conference BibTeX after release.
4. Review all figures and captions before publishing, especially any safety-sensitive descriptions.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

### Option A - User/organization site

Use this when you want the URL to be:

```text
https://YOUR-GITHUB-USERNAME.github.io/
```

1. Create a new public GitHub repository named exactly:

   ```text
   YOUR-GITHUB-USERNAME.github.io
   ```

2. Upload all files from this folder to the repository root.
3. Commit and push.
4. Go to **Settings -> Pages**.
5. Set **Source** to **Deploy from a branch**.
6. Set **Branch** to `main` and folder to `/root`.
7. Save and wait for GitHub Pages to deploy.

### Option B - Project site

Use this when you want a URL like:

```text
https://YOUR-GITHUB-USERNAME.github.io/jailbreak-scaling-laws/
```

1. Create a repository, for example:

   ```text
   jailbreak-scaling-laws
   ```

2. Upload all files from this folder to the repository root.
3. Commit and push.
4. Go to **Settings -> Pages**.
5. Set **Source** to **Deploy from a branch**.
6. Set **Branch** to `main` and folder to `/root`.
7. Save and wait for GitHub Pages to deploy.

## Recommended edits in `index.html`

Search for these strings and replace them before publication:

- `Code link pending`
- `Preprint project page`
- `@misc{halder2026jailbreakscalinglaws`
- `assets/paper/jailbreak-scaling-laws-draft.pdf` if you rename the final PDF

## Updating the paper PDF

Replace this file:

```text
assets/paper/jailbreak-scaling-laws-draft.pdf
```

with the final PDF. Keep the same filename to avoid changing links in `index.html`.

## Replacing images

All images are referenced from:

```text
assets/img/
```

To replace a figure, keep the same filename or update the corresponding `src="..."` path in `index.html`.
