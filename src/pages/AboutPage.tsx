import { CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageSeo } from '../components/ui/PageSeo';

const values = [
  'Qualità di materiali e processi',
  'Puntualità nelle consegne',
  'Attenzione e ascolto del cliente',
  'Personalizzazione di prodotti e servizi',
  'Sostenibilità, con linee ecologiche e packaging green dove possibile',
];

const audiences = [
  'Hotel 3★, 4★ e 5★',
  'Boutique hotel e resort di lusso',
  'Catene alberghiere nazionali',
  'Agriturismi, B&B, residence e relais',
  'Centri benessere, spa e terme',
  'Case di cura',
  'Ristoranti',
];

export function AboutPage() {
  return (
    <>
      <PageSeo title="Chi siamo | D'Anzi Hospitality Hub" description="La storia, i valori e l'approccio di D'Anzi Hospitality Hub, attiva nel settore dell'ospitalità dal 1975." />
      <section className="bg-brand-ink py-20 text-white lg:py-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.24em] text-white/50">Chi siamo</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">Dal 1975, al fianco del mondo dell’ospitalità.</h1>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <SectionHeading eyebrow="La storia" title="Tradizione familiare, visione contemporanea." />
          <div className="space-y-6 text-base leading-8 text-brand-muted">
            <p>Fondata a Roma nel 1975 da Luigi D’Anzi, D’Anzi Hospitality Hub è cresciuta come realtà dedicata al settore dell’hospitality, supportando le strutture ricettive nella realizzazione di progetti su misura.</p>
            <p>Dal 2004 Matteo D’Anzi porta avanti la tradizione familiare, consolidando collaborazioni con aziende specializzate e mantenendo al centro passione, ricerca e cura del dettaglio.</p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="I valori" title="Qualità che si vede. Servizio che si sente." description="Un approccio costruito su ascolto, affidabilità, personalizzazione e attenzione alla sostenibilità." />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex gap-4 border border-black/5 bg-white p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                <span className="text-sm leading-6">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-stone py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Clienti & referenze" title="Esperienza trasversale nel mondo hospitality." description="La presentazione aziendale indica una clientela che va dalle piccole strutture ricettive ai gruppi più grandi." />
          <div className="mt-10 grid gap-px overflow-hidden border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => <div key={audience} className="bg-white p-6 text-sm leading-6">{audience}</div>)}
          </div>
        </Container>
      </section>
    </>
  );
}
