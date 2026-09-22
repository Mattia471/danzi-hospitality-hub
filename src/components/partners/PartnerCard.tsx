import { ExternalLink, Mail, MapPinned, Navigation, Phone } from 'lucide-react';
import type { Partner } from '../../types/partner';
import { cn } from '../../utils/cn';

export function PartnerCard({ partner, selected = false, onSelect }: { partner: Partner; selected?: boolean; onSelect?: () => void }) {
  const directionsUrl = partner.location
    ? `https://www.google.com/maps/dir/?api=1&destination=${partner.location.latitude},${partner.location.longitude}`
    : partner.address
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(partner.address)}`
      : undefined;

  return (
    <article className={cn('border bg-white p-6 transition-shadow', selected ? 'border-brand-orange shadow-lg' : 'border-black/5')}>
      <button type="button" className="w-full text-left" onClick={onSelect}>
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-orange">{partner.category ?? 'Partner'}</p>
        <h3 className="mt-2 text-2xl font-medium">{partner.name}</h3>
        <p className="mt-3 text-sm leading-6 text-brand-muted">{partner.description}</p>
      </button>

      <div className="mt-6 space-y-3 text-sm">
        {partner.address ? <p className="flex gap-3 text-brand-muted"><MapPinned className="mt-0.5 shrink-0" size={16} /> {partner.address}</p> : null}
        {partner.website ? <a className="flex items-center gap-3 text-brand-ink hover:text-brand-orange" href={partner.website} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Sito web</a> : null}
        {partner.email ? <a className="flex items-center gap-3 text-brand-ink hover:text-brand-orange" href={`mailto:${partner.email}`}><Mail size={16} /> {partner.email}</a> : null}
        {partner.phone ? <a className="flex items-center gap-3 text-brand-ink hover:text-brand-orange" href={`tel:${partner.phone.replace(/\s/g, '')}`}><Phone size={16} /> {partner.phone}</a> : null}
        {directionsUrl ? <a className="flex items-center gap-3 text-brand-ink hover:text-brand-orange" href={directionsUrl} target="_blank" rel="noreferrer"><Navigation size={16} /> Indicazioni</a> : null}
      </div>

      {!partner.address && !partner.website && !partner.email && !partner.phone ? (
        <p className="mt-6 border-t border-black/5 pt-4 text-xs leading-5 text-brand-muted">Contatti e posizione da confermare prima della pubblicazione.</p>
      ) : null}
    </article>
  );
}
