import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import type { Partner } from '../../types/partner';
import { useEffect } from 'react';

function MapFocus({ partner }: { partner?: Partner }) {
  const map = useMap();

  useEffect(() => {
    if (partner?.location) {
      map.flyTo([partner.location.latitude, partner.location.longitude], 11, { duration: 0.8 });
    }
  }, [map, partner]);

  return null;
}

export function PartnersMap({ partners, selectedPartner }: { partners: Partner[]; selectedPartner?: Partner }) {
  const mappedPartners = partners.filter((partner) => partner.location);

  return (
    <div className="relative h-[520px] overflow-hidden border border-black/5 bg-brand-stone">
      <MapContainer center={[42.5, 12.5]} zoom={5.4} scrollWheelZoom className="h-full w-full" aria-label="Mappa partner">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mappedPartners.map((partner) => {
          if (!partner.location) return null;
          return (
            <CircleMarker
              key={partner.id}
              center={[partner.location.latitude, partner.location.longitude]}
              radius={9}
              pathOptions={{ color: '#ff5a00', fillColor: '#ff5a00', fillOpacity: 0.9 }}
            >
              <Popup>
                <strong>{partner.name}</strong>
                {partner.address ? <><br />{partner.address}</> : null}
              </Popup>
            </CircleMarker>
          );
        })}
        <MapFocus partner={selectedPartner} />
      </MapContainer>

      {mappedPartners.length === 0 ? (
        <div className="pointer-events-none absolute inset-x-5 bottom-5 z-[500] bg-white/95 p-4 text-sm leading-6 text-brand-muted shadow-lg backdrop-blur">
          La mappa è pronta. Inserisci indirizzi e coordinate ufficiali in <code>src/data/partners.ts</code> per visualizzare i marker.
        </div>
      ) : null}
    </div>
  );
}
