import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Insert absolute canonical and preview image URLs only when the real deployment origin is known. */
function publicationSeo(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/+$/, '');
  return {
    name: 'danzi-publication-seo',
    transformIndexHtml(html) {
      if (!origin) return html;
      const canonical = `<link rel="canonical" href="${origin}/" /><meta property="og:url" content="${origin}/" />`;
      return html
        .replace('</head>', `${canonical}\n  </head>`)
        .replaceAll('content="/og-cover.jpg"', `content="${origin}/og-cover.jpg"`)
        .replace('"logo": "/brand/logo-header.png"', `"url": "${origin}/", "logo": "${origin}/brand/logo-header.png"`)
        .replace('"image": "/og-cover.jpg"', `"image": "${origin}/og-cover.jpg"`);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = env.VITE_SITE_URL ?? '';
  // Avoid injecting an untrusted/incorrect canonical into production metadata.
  if (siteUrl && !/^https:\/\/[^/?#]+\/?$/.test(siteUrl)) {
    throw new Error('VITE_SITE_URL deve essere un URL HTTPS pubblico, senza percorso (es. https://www.esempio.it)');
  }
  return { plugins: [react(), tailwindcss(), publicationSeo(siteUrl)] };
});
