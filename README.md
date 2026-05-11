# Pablo Villoslada-Blanco Personal Website

This repository contains the source code for the personal website of **Pablo Villoslada-Blanco, PhD**.

The site presents my work at the intersection of **Bioinformatics**, **Biostatistics**, **Artificial Intelligence**, **multiomics**, **precision medicine**, and **cancer research**.

Website: [https://pvilloslada.com/](https://pvilloslada.com/)

## Overview

The website is designed as a professional profile, online CV, research portfolio, and contact point for scientific collaborations, consulting conversations, and translational biomedical data projects.

It includes:

- professional profile and current affiliation;
- research and technical expertise;
- selected research software and data products;
- publication and academic profile links;
- scientific outreach and professional writing;
- awards, memberships, and background;
- public CV and CVN downloads.

## Technical Notes

This is a lightweight static website built with plain HTML, CSS, and JavaScript.

Main public-facing files:

- `index.html` - main website structure and metadata.
- `styles.css` - visual design and responsive layout.
- `script.js` - language toggle and dynamic public metrics.
- `profile.json` - machine-readable profile metadata.
- `llms.txt` - concise profile summary for LLM discovery.
- `brief/` - branded redirect to the deployed PVB Intelligence Brief.

## Discovery

The site includes structured metadata and discovery files for search engines, social previews, and machine-readable profile indexing:

- canonical metadata;
- Open Graph and Twitter card metadata;
- `schema.org` Person and ProfilePage data;
- `robots.txt` and `sitemap.xml`;
- `profile.json`;
- `llms.txt`;
- `humans.txt`.

## Deployment

The site is published through GitHub Pages.

Changes pushed to the repository are deployed automatically through the GitHub Actions workflow in `.github/workflows/pages.yml`.
