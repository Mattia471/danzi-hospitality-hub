import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/services';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Prodotti e servizi" title="Tutto per la tua ospitalità." description="Dalle linee cortesia all’arredo, dal wellness alla sicurezza: un sistema di soluzioni per strutture ricettive e ristorazione." />
            <Link to="/prodotti-e-servizi" className="mt-8 inline-flex items-center gap-3 border border-brand-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-brand-ink hover:text-white">
              Scopri prodotti e servizi <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category} className="min-h-36 border border-black/5 bg-brand-canvas p-6">
                <div className="mb-8 h-0.5 w-8 bg-brand-orange" />
                <p className="text-lg font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
