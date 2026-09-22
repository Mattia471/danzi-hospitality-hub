import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandComma } from '../ui/BrandComma';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,90,0,0.12),transparent_26%),linear-gradient(110deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <Container className="relative grid min-h-[72vh] items-center gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.26em] text-white/60">D’Anzi Hospitality Hub</p>
          <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Soluzioni che fanno la <span className="text-brand-orange">differenza.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            Prodotti, servizi e consulenza per un’ospitalità di qualità, con soluzioni pensate su misura per ogni struttura.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/prodotti-e-servizi" className="inline-flex items-center gap-3 bg-brand-orange px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] hover:bg-brand-orange-dark">
              Scopri di più <ArrowRight size={16} />
            </Link>
            <Link to="/chi-siamo" className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] hover:bg-white hover:text-brand-ink">
              Chi siamo
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[430px] lg:block">
          <BrandComma className="absolute right-8 top-12 text-[28rem] leading-[0.55]" />
          <div className="absolute bottom-10 right-0 max-w-[220px] border-l border-white/25 pl-6 text-xs uppercase leading-7 tracking-[0.18em] text-white/70">
            Spazi<br />Persone<br />Esperienze<br />di valore
          </div>
        </div>
      </Container>
    </section>
  );
}
