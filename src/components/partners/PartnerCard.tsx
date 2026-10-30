import { ArrowUpRight, BookOpen, ExternalLink, MapPinned, Navigation, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCatalogsForPartner } from '../../data/partnerCatalogs';
import type { Partner } from '../../types/partner';
import { cn } from '../../utils/cn';

export function PartnerCard({
  partner,
  selected = false,
  onSelect,
}: {
  partner: Partner;
  selected?: boolean;
  onSelect?: () => void;
}) {
  const directionsUrl = partner.location
    ? `https://www.google.com/maps/dir/?api=1&destination=${partner.location.latitude},${partner.location.longitude}`
    : partner.address
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(partner.address)}`
      : undefined;

  const catalogs = getCatalogsForPartner(partner.id);

  const hasContacts = Boolean(
    partner.address || partner.website || directionsUrl || partner.support,
  );

  return (
    <article
      className={cn(
        'group relative overflow-hidden border bg-white p-6 transition duration-300',
        selected
          ? 'border-brand-orange shadow-[0_18px_50px_rgba(255,90,0,0.12)]'
          : 'border-black/5 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]',
      )}
    >
      <span className="absolute right-5 top-3 font-serif text-7xl leading-none text-brand-orange/[0.08]">
        ,
      </span>

      <button
        type="button"
        className="relative w-full text-left"
        onClick={onSelect}
        disabled={!onSelect}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {partner.category ?? 'Partner'}
        </p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-brand-ink">
          {partner.name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-brand-muted">{partner.description}</p>
      </button>

      {hasContacts ? (
        <div className="relative mt-6 space-y-3 border-t border-black/5 pt-5 text-sm">
          {partner.address ? (
            <p className="flex gap-3 text-brand-muted">
              <MapPinned className="mt-0.5 shrink-0 text-brand-orange" size={16} />
              {partner.address}
            </p>
          ) : null}

          {partner.website ? (
            <a
              className="flex items-center gap-3 text-brand-ink transition hover:text-brand-orange"
              href={partner.website}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} /> Sito web
            </a>
          ) : null}

          {partner.support && (partner.support.instructions || partner.support.phone || partner.support.url) ? (
            <div className="space-y-3 border-t border-black/5 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
                Assistenza tecnica
              </p>
              {partner.support.instructions ? (
                <p className="text-sm leading-6 text-brand-muted">{partner.support.instructions}</p>
              ) : null}
              {partner.support.phone ? (
                <a
                  className="flex items-center gap-3 text-brand-ink transition hover:text-brand-orange"
                  href={`tel:${partner.support.phone.replace(/\s/g, '')}`}
                >
                  <Phone size={16} /> {partner.support.phone}
                </a>
              ) : null}
              {partner.support.url ? (
                <a
                  className="inline-flex items-center gap-2 border border-brand-orange/30 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange transition hover:bg-brand-orange hover:text-white"
                  href={partner.support.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} /> {partner.support.actionLabel ?? 'Centro assistenza'}
                </a>
              ) : null}
            </div>
          ) : null}

          {directionsUrl ? (
            <a
              className="flex items-center gap-3 text-brand-ink transition hover:text-brand-orange"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={16} /> Indicazioni
            </a>
          ) : null}
        </div>
      ) : null}

      {catalogs.length > 0 ? (
        <div className="relative mt-6 border-t border-black/10 pt-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              Cataloghi da sfogliare
            </p>
            <span className="text-xs text-brand-muted">{catalogs.length} PDF</span>
          </div>
          <div className="space-y-2">
            {catalogs.map((catalog) => (
              <Link
                key={catalog.id}
                to={`/partner/${encodeURIComponent(partner.id)}/cataloghi/${encodeURIComponent(catalog.id)}`}
                className="group/catalog flex items-center gap-3 border border-black/10 bg-brand-canvas p-3 transition hover:border-brand-orange/50 hover:bg-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-white text-brand-orange">
                  <BookOpen size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-brand-ink">{catalog.title}</span>
                  {catalog.description ? (
                    <span className="mt-1 block text-xs leading-5 text-brand-muted">{catalog.description}</span>
                  ) : (
                    <span className="mt-1 block text-xs text-brand-muted">Sfoglia il catalogo online</span>
                  )}
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-brand-orange transition group-hover/catalog:translate-x-0.5 group-hover/catalog:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
