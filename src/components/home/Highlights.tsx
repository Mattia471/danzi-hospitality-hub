import { Gem, Leaf, PackageCheck, Users } from 'lucide-react';
import { Container } from '../ui/Container';

const highlights = [
  { icon: Gem, title: 'Qualità', text: 'Ricerca di soluzioni curate nei materiali, nei processi e nei dettagli.' },
  { icon: Users, title: 'Ascolto', text: 'Affiancamento e attenzione alle esigenze specifiche di ogni struttura.' },
  { icon: PackageCheck, title: 'Su misura', text: 'Prodotti e servizi personalizzati per rafforzare identità e accoglienza.' },
  { icon: Leaf, title: 'Sostenibilità', text: 'Attenzione a linee ecologiche e packaging green dove possibile.' },
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
