import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { partners } from '../../data/partners';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function PartnersPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Partner" title="Un network di eccellenze." description="Collaboriamo con brand specializzati per costruire soluzioni complete per il mondo dell’hospitality." />
          <Link to="/partner" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
            Tutti i partner <ArrowRight size={16} />
          </Link>
        </div>
        <div className="rounded-sm border border-black/5 bg-white p-4 shadow-[0_30px_70px_rgba(0,0,0,0.05)]">
          <div className="grid min-h-[360px] place-items-center bg-[radial-gradient(circle_at_25%_30%,rgba(255,90,0,0.12),transparent_18%),linear-gradient(135deg,#f4f1ed,#ffffff)] px-6 text-center">
            <div>
              <MapPin className="mx-auto text-brand-orange" size={34} />
              <p className="mt-4 text-xl font-medium">Mappa interattiva partner</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-muted">
                La pagina è già predisposta per mostrare marker, schede partner, sito web, email e indicazioni. Mancano solo indirizzi e coordinate ufficiali.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {partners.slice(0, 6).map((partner) => (
                  <span key={partner.id} className="border border-black/10 bg-white px-3 py-2 text-xs text-brand-muted">
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
