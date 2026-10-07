import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PartnerCard } from '../components/partners/PartnerCard';
import { partners } from '../data/partners';
import { PageSeo } from '../components/ui/PageSeo';

const categories = Array.from(
  new Set(partners.map((partner) => partner.category).filter(Boolean)),
);

export function PartnersPage() {
  return (
    <>
      <PageSeo
        title="Partner | D'Anzi Hospitality Hub"
        description="Scopri il network di partner D'Anzi Hospitality Hub per arredo, wellness, bedding, sicurezza, tavola e linee cortesia."
      />

      <section className="border-b border-black/5 bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Partner"
              title="Un network al servizio dell’ospitalità."
              description="Collaboriamo con aziende specializzate per offrire una selezione trasversale di soluzioni dedicate a hotel, resort, spa, ristorazione e strutture ricettive."
            />

            <div className="grid min-w-[260px] grid-cols-2 gap-px overflow-hidden border border-black/5 bg-black/5">
              <div className="bg-brand-canvas p-5">
                <p className="text-3xl font-medium tracking-[-0.04em] text-brand-ink">
                  {partners.length}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-brand-muted">
                  Partner
                </p>
              </div>
              <div className="bg-brand-canvas p-5">
                <p className="text-3xl font-medium tracking-[-0.04em] text-brand-ink">
                  {categories.length}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-brand-muted">
                  Specializzazioni
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="border border-black/10 bg-brand-canvas px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
