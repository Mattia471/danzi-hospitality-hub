import { useEffect } from 'react';

/** Synchronizes metadata for SPA navigation. Social scrapers use the static HTML metadata. */
function setMeta(selector: string, attr: 'content' | 'href', value: string, create?: { tag: 'meta' | 'link'; attrs: Record<string, string> }) {
  let element = document.querySelector<HTMLElement>(selector);
  if (!element && create) {
    element = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([key, text]) => element!.setAttribute(key, text));
    document.head.appendChild(element);
  }
  if (element) element.setAttribute(attr, value);
}

export function PageSeo({ title, description, noIndex = false }: { title: string; description: string; noIndex?: boolean }) {
  useEffect(() => {
    document.title = title;
    const origin = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '') || window.location.origin;
    const pageUrl = `${origin}${window.location.pathname.replace(/\/+$/, '') || '/'}`;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', pageUrl, { tag: 'meta', attrs: { property: 'og:url' } });
    setMeta('link[rel="canonical"]', 'href', pageUrl, { tag: 'link', attrs: { rel: 'canonical' } });
  }, [title, description, noIndex]);
  return null;
}
