import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const out = resolve('dist');
let configured = process.env.VITE_SITE_URL || '';
if (!configured) {
  try {
    const envText = await readFile(resolve('.env.production'), 'utf8');
    configured = envText.match(/^VITE_SITE_URL\s*=\s*["']?([^"'\r\n]+)["']?$/m)?.[1]?.trim() || '';
  } catch { /* deployment environment can supply the URL directly */ }
}
const origin = configured.replace(/\/+$/, '');
const paths = ['/', '/partner', '/chi-siamo', '/realizzazioni', '/prodotti-e-servizi',
  '/prodotti-e-servizi/linee-cortesia', '/prodotti-e-servizi/arredo', '/prodotti-e-servizi/wellness',
  '/prodotti-e-servizi/sicurezza', '/prodotti-e-servizi/tavola-e-porcellane',
  '/prodotti-e-servizi/bedding', '/prodotti-e-servizi/frigobar-e-casseforti'];

if (origin && !/^https:\/\/[^/?#]+$/.test(origin)) throw new Error('VITE_SITE_URL non valido');
let robots = 'User-agent: *\nAllow: /\n';
if (origin) {
  const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
  await writeFile(resolve(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  robots += `\nSitemap: ${origin}/sitemap.xml\n`;
  console.log(`Sitemap generata per ${origin}`);
} else {
  await rm(resolve(out, 'sitemap.xml'), { force: true });
  console.warn('VITE_SITE_URL assente: sitemap e URL assoluti non generati. Imposta il dominio reale prima del rilascio.');
}
await writeFile(resolve(out, 'robots.txt'), robots);
