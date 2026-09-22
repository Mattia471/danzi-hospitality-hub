import { useMemo, useState } from 'react';
import { PartnersMap } from '../components/partners/PartnersMap';
import { PartnerCard } from '../components/partners/PartnerCard';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { partners } from '../data/partners';
import { PageSeo } from '../components/ui/PageSeo';

export function PartnersPage() {
  const [selectedId, setSelectedId] = useState<string>();
  const selectedPartner = useMemo(() => partners.find((partner) => partner.id === selectedId), [selectedId]);

  return (
    <>
      <PageSeo title="Partner | D'Anzi Hospitality Hub" description="Scopri i partner D'Anzi Hospitality Hub con mappa, contatti, sito web e indicazioni." />
      <section className="border-b border-black/5 bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Partner" title="Un network al servizio dell’ospitalità." description="Qui raccoglieremo tutti i partner con posizione sulla mappa, contatti, sito web e accesso diretto alle indicazioni." />
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <PartnersMap partners={partners} selectedPartner={selectedPartner} />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                selected={partner.id === selectedId}
                onSelect={() => setSelectedId(partner.id)}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
