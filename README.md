# pavillos.github.io

Personal website for Pablo Villoslada-Blanco, PhD.

## Local preview

Open `index.html` directly in a browser, or run a local static server if preferred.

## Update public files

Replace files manually while keeping stable public filenames:

- `photos/profile-clean.png` for the main portrait.
- `documents/pablo-villoslada-blanco-cv.pdf` for the public CV.
- `documents/pablo-villoslada-blanco-cvn-english.pdf` for the public CVN.
- `documents/pablo-villoslada-blanco-cva-aei.pdf` and `documents/pablo-villoslada-blanco-cva-isciii.pdf` if those CVA files are used again.

After committing and pushing to GitHub, the public links remain stable.

## SEO and LLM discovery

The site includes:

- HTML metadata and canonical URL
- Open Graph and Twitter card metadata
- `schema.org` Person and ProfilePage structured data
- `profile.json` machine-readable profile
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `humans.txt`
- Web manifest

## Deployment

This is a static website. The included GitHub Actions workflow publishes the repository root to GitHub Pages when changes are pushed to `main`.
