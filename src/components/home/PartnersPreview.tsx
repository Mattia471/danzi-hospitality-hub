import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { partners } from "../../data/partners";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const categories = Array.from(
  new Set(partners.map((partner) => partner.category).filter(Boolean)),
);

const featuredPartners = partners
  .filter(
    (partner, index, allPartners) =>
      allPartners.findIndex((item) => item.category === partner.category) ===
      index,
  )
  .slice(0, 6);

export function PartnersPreview() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Partner"
              title="Un network di eccellenze."
              description="Brand specializzati, competenze complementari e soluzioni selezionate per costruire progetti hospitality completi, dal comfort alla tavola, dall’arredo al wellness."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {categories.slice(0, 7).map((category) => (
                <span
                  key={category}
                  className="border border-black/10 bg-brand-canvas px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-black/5 bg-black/5">
              <div className="bg-white p-5">
                <p className="text-3xl font-medium tracking-[-0.04em] text-brand-ink">
                  {partners.length}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                  Partner selezionati
                </p>
              </div>
              <div className="bg-white p-5">
                <p className="text-3xl font-medium tracking-[-0.04em] text-brand-ink">
                  {categories.length}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                  Aree di competenza
                </p>
              </div>
            </div>

            <Link
              to="/partner"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange"
            >
              Scopri tutti i partner
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* <div className="relative overflow-hidden bg-brand-ink p-4 sm:p-6 lg:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                    D&apos;Anzi Partner Network
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
                    Una filiera di competenze per dare forma a spazi, servizi ed esperienze
                    coerenti in ogni dettaglio.
                  </p>
                </div>
                <span className="hidden text-6xl font-light tracking-[-0.08em] text-white/10 sm:block">
                  01
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {featuredPartners.map((partner, index) => (
                  <article
                    key={partner.id}
                    className={
                      index === 0
                        ? 'group relative overflow-hidden bg-brand-orange p-6 text-white sm:col-span-2'
                        : 'group relative min-h-[185px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-brand-orange/60 hover:bg-white/[0.075]'
                    }
                  >
                    <div className="flex items-start justify-between gap-5">
                      <p
                        className={
                          index === 0
                            ? 'text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75'
                            : 'text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange'
                        }
                      >
                        {partner.category ?? 'Hospitality'}
                      </p>
                      <span
                        className={
                          index === 0
                            ? 'text-xs text-white/60'
                            : 'text-xs text-white/25'
                        }
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className={
                        index === 0
                          ? 'mt-8 text-4xl font-medium tracking-[-0.04em] sm:text-5xl'
                          : 'mt-6 text-2xl font-medium tracking-[-0.03em] text-white'
                      }
                    >
                      {partner.name}
                    </h3>

                    <p
                      className={
                        index === 0
                          ? 'mt-4 max-w-xl text-sm leading-6 text-white/85'
                          : 'mt-3 text-sm leading-6 text-white/50'
                      }
                    >
                      {partner.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className={
                        index === 0
                          ? 'absolute bottom-0 right-4 translate-y-6 text-[9rem] font-serif leading-none text-white/10'
                          : 'absolute bottom-0 right-3 translate-y-5 text-7xl font-serif leading-none text-brand-orange/10 transition duration-300 group-hover:text-brand-orange/20'
                      }
                    >
                      ,
                    </span>
                  </article>
                ))}
              </div>

              <div className="mt-5 border-t border-white/15 pt-5">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  Il network
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {partners.map((partner) => (
                    <span
                      key={partner.id}
                      className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55"
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
