import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { productCategories, services } from '../data/services';
import { PageSeo } from '../components/ui/PageSeo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategorySlug } from '../data/productCatalog';

export function ServicesPage() {
  return (
    <>
      <PageSeo title="Prodotti e servizi | D'Anzi Hospitality Hub" description="Prodotti, forniture, consulenza e soluzioni personalizzate per il mondo dell'hospitality." />
      <section className="bg-brand-ink py-20 text-white lg:py-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.24em] text-white/50">Prodotti e servizi</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">Soluzioni per l’ospitalità.</h1>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Servizi" title="Dalla scelta alla fornitura." description="L’obiettivo è aiutare le strutture ricettive a migliorare l’accoglienza, rafforzare l’identità del brand e semplificare approvvigionamenti e riassortimenti." />
          <div className="mt-10 grid gap-px overflow-hidden border border-black/5 bg-black/5 md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.id} className="bg-brand-canvas p-8 lg:p-10">
                <span className="text-xs tracking-[0.18em] text-brand-orange">0{index + 1}</span>
                <h2 className="mt-6 text-2xl font-medium">{service.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Categorie" title="Soluzioni per ogni ambiente dell’ospitalità." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Link to={`/prodotti-e-servizi/${getCategorySlug(category)}`} key={category} className="group min-h-52 border border-black/5 bg-white p-7 transition hover:border-brand-orange hover:shadow-lg">
                <span className="text-xs tracking-[0.18em] text-brand-orange">0{index + 1}</span>
                <h3 className="mt-12 flex items-center justify-between gap-3 text-2xl font-medium">{category}<ArrowRight size={19} className="shrink-0 text-brand-orange transition-transform group-hover:translate-x-1" /></h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
