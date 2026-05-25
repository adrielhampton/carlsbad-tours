import { getCollection } from 'astro:content';

const collections = ['places', 'wildlife', 'seasons', 'guides'] as const;

export async function GET({ site }: { site: URL }) {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://carlsbadtours.com';

  const staticPages = ['', '/places', '/wildlife', '/seasons', '/guides', '/about']
    .map(p => `<url><loc>${base}${p}</loc><changefreq>monthly</changefreq></url>`);

  const dynamicPages: string[] = [];
  for (const col of collections) {
    const entries = await getCollection(col, e => !e.data.draft);
    for (const e of entries) {
      const date = e.data.pubDate ? `<lastmod>${e.data.pubDate.toISOString().split('T')[0]}</lastmod>` : '';
      dynamicPages.push(`<url><loc>${base}/${col}/${e.slug}</loc>${date}<changefreq>monthly</changefreq></url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...dynamicPages].join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
