import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { PageSeo } from '../components/ui/PageSeo';
import { catalogCategories, type CatalogProduct } from '../data/productCatalog';
import { partners } from '../data/partners';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = catalogCategories.find((item) => item.slug === slug);
  const [lightbox, setLightbox] = useState<{ product: CatalogProduct; index: number } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowRight') setLightbox((current) => current ? { ...current, index: (current.index + 1) % current.product.images.length } : null);
      if (event.key === 'ArrowLeft') setLightbox((current) => current ? { ...current, index: (current.index - 1 + current.product.images.length) % current.product.images.length } : null);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; };
  }, [lightbox]);

  if (!category) {
    return (
      <section className="py-28"><Container>
        <h1 className="text-4xl font-medium">Categoria non trovata.</h1>
        <Link to="/prodotti-e-servizi" className="mt-6 inline-flex items-center gap-2 text-brand-orange"><ArrowLeft size={16} /> Torna a prodotti e servizi</Link>
      </Container></section>
    );
  }

  const relatedPartners = partners.filter((partner) => category.partnerIds.includes(partner.id));
  const productsWithImages = category.products.filter((product) => product.images.length > 0);
  const activeImage = lightbox?.product.images[lightbox.index];

  return (
    <>
      <PageSeo title={`${category.name} | D'Anzi Hospitality Hub`} description={category.description} />
      <section className="bg-brand-ink py-16 text-white lg:py-24">
        <Container>
          <Link to="/prodotti-e-servizi" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-white/60 transition hover:text-brand-orange"><ArrowLeft size={16} /> Prodotti e servizi</Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">Soluzioni per l’ospitalità</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl">{category.name}.</h1>
          <p className="mt-6 max-w-2xl text-xl text-white/85">{category.subtitle}</p>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24"><Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Il nostro approccio</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Soluzioni pensate per ogni struttura.</h2>
        </div>
        <div><p className="max-w-2xl text-base leading-8 text-brand-muted">{category.description}</p>
          <Link to="/#consulenza" className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">Parliamo del tuo progetto <ArrowRight size={16} /></Link>
        </div>
      </Container></section>

      {productsWithImages.length > 0 && (
        <section className="bg-brand-canvas py-16 lg:py-24"><Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Selezione prodotti</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">Esplora le soluzioni.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productsWithImages.map((product) => (
              <article key={product.id} className="overflow-hidden border border-black/5 bg-white">
                <button type="button" onClick={() => setLightbox({ product, index: 0 })} className="group block w-full text-left" aria-label={`Ingrandisci ${product.name}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-brand-stone"><img src={product.images[0].src} alt={product.images[0].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" /></div>
                  <div className="p-6"><p className="text-[10px] uppercase tracking-[0.18em] text-brand-orange">{product.brand || category.name}</p><h3 className="mt-2 text-xl font-medium">{product.name}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{product.description}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-brand-orange">Esplora le immagini <ArrowRight size={14} /></span></div>
                </button>
              </article>
            ))}
          </div>
        </Container></section>
      )}

      {relatedPartners.length > 0 && (
        <section className="border-t border-black/5 bg-brand-canvas py-16 lg:py-24"><Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Il network</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">Competenze dedicate.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPartners.map((partner) => <div key={partner.id} className="border border-black/5 bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-brand-orange">{partner.category}</p><h3 className="mt-3 text-xl font-medium">{partner.name}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{partner.description}</p></div>)}
          </div>
          <Link to="/partner" className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">Scopri il network <ArrowRight size={16} /></Link>
        </Container></section>
      )}

      {lightbox && activeImage && (
        <div role="dialog" aria-modal="true" aria-label={`Immagini ${lightbox.product.name}`} className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4 sm:p-10" onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/30 text-white" aria-label="Chiudi immagine"><X size={22} /></button>
          {lightbox.product.images.length > 1 && <button type="button" onClick={(event) => { event.stopPropagation(); setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.product.images.length) % lightbox.product.images.length }); }} className="absolute left-3 z-10 grid h-11 w-11 place-items-center bg-white/15 text-white" aria-label="Immagine precedente"><ChevronLeft /></button>}
          <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[78vh] max-w-full object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">{lightbox.product.name} · {lightbox.index + 1}/{lightbox.product.images.length}</figcaption>
          </figure>
          {lightbox.product.images.length > 1 && <button type="button" onClick={(event) => { event.stopPropagation(); setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.product.images.length }); }} className="absolute right-3 z-10 grid h-11 w-11 place-items-center bg-white/15 text-white" aria-label="Immagine successiva"><ChevronRight /></button>}
        </div>
      )}
    </>
  );
}
