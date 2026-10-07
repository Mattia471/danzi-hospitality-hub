import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Chi siamo"
            title="Tradizione, esperienza, innovazione."
            description="Una storia familiare iniziata nel 1975 e cresciuta nel mondo dell’hospitality attraverso ricerca, passione e cura del dettaglio."
          />
          <Link
            to="/chi-siamo"
            className="mt-8 inline-flex items-center gap-3 border border-brand-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-brand-ink hover:text-white"
          >
            Scopri la nostra storia <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative min-h-[500px] overflow-hidden bg-brand-ink">
          <img
            src="/images/projects/axy/axy-lobby.webp"
            alt="Interior hospitality Axy Hotels InnStyle"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/15 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-2 bg-brand-orange" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
            <p className="max-w-lg text-2xl font-light italic leading-[1.3] sm:text-3xl">
              “L’ospitalità è fatta di persone, dettagli e scelte consapevoli.”
            </p>
            <div className="mt-8 flex items-end justify-between gap-5 border-t border-white/20 pt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  D’Anzi Hospitality Hub
                </p>
                <p className="mt-2 text-sm text-white/55">Roma, dal 1975</p>
              </div>
              <p className="hidden text-[9px] uppercase tracking-[0.16em] text-white/45 sm:block">
                Axy Hotels InnStyle
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
