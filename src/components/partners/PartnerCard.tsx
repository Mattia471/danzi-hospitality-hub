import { ExternalLink, Mail, MapPinned, Navigation, Phone } from 'lucide-react';
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

  const hasContacts = Boolean(
    partner.address || partner.website || partner.email || partner.phone || directionsUrl,
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

          {partner.email ? (
            <a
              className="flex items-center gap-3 text-brand-ink transition hover:text-brand-orange"
              href={`mailto:${partner.email}`}
            >
              <Mail size={16} /> {partner.email}
            </a>
          ) : null}

          {partner.phone ? (
            <a
              className="flex items-center gap-3 text-brand-ink transition hover:text-brand-orange"
              href={`tel:${partner.phone.replace(/\s/g, '')}`}
            >
              <Phone size={16} /> {partner.phone}
            </a>
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
    </article>
  );
}
