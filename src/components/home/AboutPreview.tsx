import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Chi siamo" title="Tradizione, esperienza, innovazione." description="Una storia familiare iniziata nel 1975 e cresciuta nel mondo dell’hospitality attraverso ricerca, passione e cura del dettaglio." />
          <Link to="/chi-siamo" className="mt-8 inline-flex items-center gap-3 border border-brand-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-brand-ink hover:text-white">
            Scopri la nostra storia <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-brand-stone p-8 lg:p-12">
          <div className="absolute inset-y-0 left-0 w-2 bg-brand-orange" />
          <div className="flex h-full flex-col justify-between">
            <p className="max-w-md text-3xl font-light italic leading-[1.25] text-brand-ink">“L’ospitalità è fatta di persone, dettagli e scelte consapevoli.”</p>
            <div className="mt-20">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">D’Anzi Hospitality Hub</p>
              <p className="mt-2 text-sm text-brand-muted">Roma, dal 1975</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
