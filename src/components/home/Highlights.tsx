import { Gem, Leaf, PackageCheck, Users } from 'lucide-react';
import { Container } from '../ui/Container';

const highlights = [
  { icon: Gem, title: 'Qualità', text: 'Soluzioni curate nei materiali, nelle finiture e in ogni dettaglio.' },
  { icon: Users, title: 'Ascolto', text: 'Ascoltiamo le esigenze di ogni struttura per costruire soluzioni concrete e mirate.' },
  { icon: PackageCheck, title: 'Su misura', text: 'Prodotti e servizi personalizzati per valorizzare identità, comfort e accoglienza.' },
  { icon: Leaf, title: 'Sostenibilità', text: 'Selezioniamo, dove possibile, soluzioni e materiali attenti all’ambiente.' },
];

export function Highlights() {
  return (
    <section className="border-b border-black/5 bg-white">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, text }) => (
          <article key={title} className="border-black/5 px-5 py-9 sm:border-r last:border-r-0">
            <Icon className="mb-5" size={30} strokeWidth={1.5} />
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
