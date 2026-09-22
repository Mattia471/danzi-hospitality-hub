import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { PageSeo } from '../components/ui/PageSeo';

export function NotFoundPage() {
  return (
    <>
      <PageSeo title="Pagina non trovata | D'Anzi Hospitality Hub" description="La pagina richiesta non è disponibile." />
    <section className="grid min-h-[65vh] place-items-center py-20">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">404</p>
        <h1 className="mt-4 text-5xl font-medium">Pagina non trovata.</h1>
        <Link className="mt-8 inline-flex bg-brand-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white" to="/">Torna alla home</Link>
      </Container>
    </section>
    </>
  );
}
