import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { PageSeo } from '../components/ui/PageSeo';
import { getCatalogsForPartner, getDrivePreviewUrl, getDriveViewUrl } from '../data/partnerCatalogs';
import { partners } from '../data/partners';

/** Viewer dedicato: il PDF resta su Drive e viene sfogliato nel sito. */
export function PartnerCatalogPage() {
  const { partnerId, catalogId } = useParams();
  const partner = partners.find((item) => item.id === partnerId);
  const catalog = partner && catalogId
    ? getCatalogsForPartner(partner.id).find((item) => item.id === catalogId)
    : undefined;
  const previewUrl = catalog ? getDrivePreviewUrl(catalog.driveUrl) : null;
  const viewUrl = catalog ? getDriveViewUrl(catalog.driveUrl) : null;

  if (!partner || !catalog || !previewUrl || !viewUrl) {
    return (
      <section className="bg-white py-24">
        <PageSeo title="Catalogo non disponibile | D'Anzi Hospitality Hub" description="Catalogo partner non disponibile." noIndex />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Cataloghi partner</p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em]">Catalogo non disponibile.</h1>
          <p className="mt-5 text-brand-muted">Il documento richiesto non è disponibile. Consulta la pagina dei partner per gli altri cataloghi.</p>
          <Link to="/partner" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
            <ArrowLeft size={16} /> Torna ai partner
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <PageSeo
        title={`${catalog.title} | ${partner.name} | D'Anzi Hospitality Hub`}
        description={`Sfoglia online il catalogo ${catalog.title} di ${partner.name}.`}
        noIndex
      />
      <section className="border-b border-black/5 bg-white py-9 sm:py-12">
        <Container>
          <Link
            to="/partner"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange hover:underline"
          >
            <ArrowLeft size={16} /> Torna ai partner
          </Link>
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {partner.name} · Catalogo PDF
              </p>
              <h1 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-brand-ink sm:text-5xl">
                {catalog.title}
              </h1>
              {catalog.description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-muted">{catalog.description}</p> : null}
            </div>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-brand-orange px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange-dark"
            >
              <ExternalLink size={16} /> Apri su Google Drive
            </a>
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-10">
        <Container>
          <div className="overflow-hidden border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 px-4 py-3 sm:px-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-ink">
                <FileText size={16} className="text-brand-orange" /> Visualizzatore catalogo
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.12em] text-brand-muted sm:block">Sfoglia, ingrandisci e naviga le pagine</span>
            </div>
            <iframe
              src={previewUrl}
              title={`Catalogo ${catalog.title} di ${partner.name}`}
              className="h-[70vh] min-h-[480px] w-full border-0 bg-brand-stone sm:h-[78vh] sm:min-h-[650px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            Se il documento non si visualizza sul tuo dispositivo, utilizza «Apri su Google Drive».
          </p>
        </Container>
      </section>
    </>
  );
}
