# CarlsbadTours.com

Nature interpretation for Carlsbad and North County San Diego.

## Stack
- [Astro](https://astro.build) — static site generator
- Tailwind CSS — styling
- GitHub Pages — hosting (free)
- Namecheap — custom domain

## Local development

```bash
npm install
npm run dev
```

Runs at http://localhost:4321

## Content workflow

Add new articles as `.md` files in `src/content/`:

| Section  | Folder                      | URL pattern            |
|----------|-----------------------------|------------------------|
| Places   | `src/content/places/`       | `/places/slug`         |
| Wildlife | `src/content/wildlife/`     | `/wildlife/slug`       |
| Seasons  | `src/content/seasons/`      | `/seasons/slug`        |
| Guides   | `src/content/guides/`       | `/guides/slug`         |

See existing files for frontmatter reference. Set `draft: true` to keep an article unpublished.

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

## Sister site

[LakeCalavera.com](https://lakecalavera.com) — species field guide to Lake Calavera Preserve.
