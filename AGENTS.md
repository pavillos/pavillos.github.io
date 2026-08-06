# Project Agent Instructions

This repository contains the personal website for Pablo Villoslada-Blanco, PhD, published with GitHub Pages at https://pvilloslada.com/.

Use these instructions for Codex, Claude, or any other coding agent working on this project.

## Project Goal

Maintain a professional bilingual personal website for Pablo Villoslada-Blanco focused on:

- Bioinformatics & Biostatistics
- Artificial Intelligence (AI)
- multiomics
- precision medicine
- cancer research
- academic credibility with consulting and biotech/industry projection

The site should feel professional, direct, product-oriented, and consistent with a restrained black/grey/blue visual identity.

## Technical Setup

This is a static website using plain HTML, CSS, and JavaScript.

Main files:

- `index.html`: main website content and SEO metadata.
- `styles.css`: visual design and responsive layout.
- `script.js`: Spanish translation toggle, external link handling, dynamic metrics.
- `profile.json`: machine-readable profile for discovery.
- `llms.txt`: LLM discovery summary.
- `site.webmanifest`: web app metadata and icon.
- `brief/index.html`: branded redirect to the deployed PVB Intelligence Brief.
- `assets/logo-pvb.svg`: main logo used in the header.
- `assets/favicon.svg`: favicon.
- `photos/profile-clean.png`: main portrait used by the website.
- `documents/pablo-villoslada-blanco-cv.pdf`: public CV.
- `documents/pablo-villoslada-blanco-cvn-english.pdf`: public CVN.

## Publishing

The site is published through GitHub Pages from this repository. After changes:

```bash
git status --short
git add <changed files>
git commit -m "Clear descriptive message"
git push
```

A GitHub Actions workflow deploys the site.

## Core Content Rules

Keep the hero positioning as:

```text
Bioinformatics & Biostatistics | Artificial Intelligence | multiomics | precision medicine | cancer research
```

Use `multiomics`, not `multi-omics`.

Hero role should use:

```text
Postdoctoral Research Assistant at GMEG (CNIO, CIBERONC)
```

Artificial Intelligence (AI) is defined in the hero. After that, use `AI` consistently.

Current affiliation should express that GMEG belongs to CNIO/CIBERONC:

```text
Genetic & Molecular Epidemiology Group (GMEG) - Spanish National Cancer Research Center (CNIO) and Centro de Investigación Biomédica en Red Cáncer (CIBERONC)
```

Do not over-focus general expertise on pancreatic cancer. General sections should say cancer research broadly. PDACMOC/PDAConsensus may mention pancreatic cancer or pancreatic ductal adenocarcinoma because that is the product use case.

In Spanish, prefer `cáncer de páncreas` over `pancreático` in the product translation.

## Bilingual Rules

The English text lives directly in `index.html`.

The Spanish translation lives in `script.js` under `translations.es`.

When changing visible website copy, update both English and Spanish unless the page is intentionally English-only.

The `brief/` page is intentionally English-only for now.

Check Spanish carefully for accents and natural phrasing:

- Bioinformática
- Bioestadística
- investigación en cáncer
- medicina de precisión
- índice h
- Membresías
- Formación
- cáncer de páncreas

## Metrics Rules

The hero metrics follow different update strategies.

### Years of experience

Source: start date `2018-10-01`.

This is calculated in `script.js` from:

```html
<strong data-years-since="2018-10-01" data-exact-years>7+</strong>
```

Rule:

- Show exact completed years on the anniversary date.
- Show `N+` after the anniversary has passed.

Example: if 7 completed years have passed and it is after the anniversary, show `7+`.

### Software and data systems

Source: manually maintained portfolio count.

Current count is:

```text
9
```

Counted systems:

- PDACMOC
- PDAConsensus
- PVB Intelligence Brief
- Virome bioinformatics pipeline
- iDESC package improvements
- ORACLE
- LORE-AI
- LaTeX Documents system
- Quarto Slides system

Use the exact number, not a `+` bucket. This metric includes public products, private scientific production systems, bioinformatics pipelines, package contributions, and in-development software systems.

### PubMed records

Source: PubMed E-utilities API.

Search reference:

```text
(Villoslada-Blanco) OR (SCOURGE Cohort Group[Corporate Author])
```

The visible number is formatted in blocks of 5:

- 21 -> `20+`
- 25 -> `25`
- 26 -> `25+`

The HTML should always include a visible initial value, never `...`, so the page is readable if the API is slow or blocked.

### Conference contributions

Source: CVN, not automated.

Current CVN says 28 works presented in national and international congresses, so the visible metric is:

```text
25+
```

Use the same block-of-5 rule:

- 28 -> `25+`
- 30 -> `30`
- 31 -> `30+`

### h-index

Source: CVN, not Google Scholar automation.

Current CVN says h-index 9 according to Google Scholar. Mark this in HTML as CVN-sourced:

```html
<strong data-cvn-count="9">9</strong>
```

Do not scrape Google Scholar. It has no stable official public API for this use.

## Updating CV, CVN, and Photo

If replacing files and keeping the same path/name, links update after commit and push.

- Main portrait: replace `photos/profile-clean.png`.
- CV: replace `documents/pablo-villoslada-blanco-cv.pdf`.
- CVN: replace `documents/pablo-villoslada-blanco-cvn-english.pdf`.

If file names change, update `index.html`, metadata, and any references.

When CVN changes, manually review and update:

- conference contributions metric
- h-index metric
- awards, roles, memberships if needed
- education or career trajectory if needed

## Design and Responsive Rules

Use restrained black, grey, white, and blue. Main accent color is defined in CSS as `--accent`.

Buttons:

- Primary contact button should remain black.

Avoid adding heavy new sections to the top navigation unless the content is real and stable.

Do not justify paragraphs on tablet or mobile. Justification creates uneven word spacing. Current CSS should leave mobile/tablet paragraphs left-aligned.

## Copyright Notice

The footer reads `© Pablo Villoslada-Blanco` — **no year, no year range**. Do not add one, and remove it if it reappears.

The year carries no legal weight: protection is automatic under the Berne Convention, and the `© year name` form is a pre-1989 US formality. What it does carry is a maintenance cost — a hardcoded year goes stale every January, and a dated footer is the strongest visual cue that a site is abandoned. This site is static HTML, so nothing refreshes the year on its own.

The rule governs the **footer**, not `LICENSE`. That file is a dated legal instrument: it keeps `Copyright (c) 2026 Pablo Villoslada-Blanco`, written once and never updated. It is what records the date, which is precisely why the footer does not have to. **Footer without a year, `LICENSE` with one.**

`LICENSE` matters more here than anywhere else: this is the only public repository, and without that file GitHub lists it as unlicensed while its Terms of Service let any user view and fork it. The licence covers the code, design and original text, and states explicitly that it does **not** restrict citing the academic publications listed on the site.

The name is always the full hyphenated form, **Pablo Villoslada-Blanco**. The email, the `pvilloslada.com` domain and the `PVB` initials all drop the second surname, so do not infer it from them.

Same convention applies in `pvb-intelligence-brief`, `sample-tracker`, `pvb-research-knowledge-system` and `pvb-brain`.

## PVB Intelligence Brief

`brief/index.html` is a branded redirect to the deployed product/workflow:

```text
PVB Intelligence Brief
```

Current state:

- The personal website keeps `/brief/` as a stable branded entry point.
- `/brief/` redirects to `https://pvb-intelligence-brief.vercel.app/brief`.
- Keep PVB Intelligence Brief represented in the Product & software section.
- Keep this section described as deployed rather than planned.

Concept: an AI-assisted research intelligence workflow for daily news curation and weekly public digests.

## SEO and LLM Discovery

When positioning changes, update all relevant sources:

- `index.html` title, meta description, structured data
- `profile.json`
- `llms.txt`
- `site.webmanifest` if needed

Keep `llms.txt` concise and factual.

Do not claim capabilities or public outputs that do not exist yet.

## Validation Checklist

Before finishing any change, run:

```bash
node --check script.js
python3 -m json.tool profile.json
python3 -m json.tool site.webmanifest
git diff --check
git status --short
```

For layout changes, use Chrome headless screenshots when possible:

```bash
python3 -m http.server 4173
google-chrome --headless --no-sandbox --disable-gpu --window-size=390,1500 --screenshot=/tmp/mobile.png http://127.0.0.1:4173/
google-chrome --headless --no-sandbox --disable-gpu --window-size=768,1800 --screenshot=/tmp/tablet.png http://127.0.0.1:4173/
google-chrome --headless --no-sandbox --disable-gpu --window-size=1440,1100 --screenshot=/tmp/desktop.png http://127.0.0.1:4173/
```

Stop the local server after screenshots.

## Git Safety

Do not revert user changes unless explicitly requested.

Before committing, check:

```bash
git status --short
```

Only add files relevant to the requested change.

Use clear commit messages.
