import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PartnersMap } from '../partners/PartnersMap';
import { partners } from '../../data/partners';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function PartnersPreview() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Partner"
            title="Un network di eccellenze."
            description="Una rete di aziende specializzate e brand selezionati, con cui sviluppiamo soluzioni dedicate al mondo dell’hospitality."
          />
          <p className="mt-8 max-w-sm border-l-2 border-brand-orange py-2 pl-5 text-base leading-7 text-brand-muted">
            Competenze e specializzazioni che lavorano insieme.
          </p>
          <Link to="/partner" className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
            Scopri tutti i partner
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative overflow-hidden border border-black/5 bg-brand-stone shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-x-0 top-0 z-[500] pointer-events-none bg-gradient-to-b from-white via-white/90 to-transparent px-5 pb-9 pt-6 sm:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange">D&apos;Anzi Partner Network</p>
            <p className="mt-2 text-sm text-brand-ink/75">Una rete di competenze al servizio dell’ospitalità.</p>
          </div>
          <PartnersMap partners={partners} preview />
          <Link to="/partner" className="group absolute inset-x-0 bottom-0 z-[500] flex items-center justify-between gap-4 border-t border-black/5 bg-white/95 px-5 py-4 text-brand-ink backdrop-blur sm:px-8">
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted"><MapPin size={16} className="text-brand-orange" /> Esplora il network</span>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Mappa partner <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
