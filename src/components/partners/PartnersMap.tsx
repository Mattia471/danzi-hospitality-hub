import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import type { Partner } from '../../types/partner';

function MapFocus({ partner, partners, preview }: { partner?: Partner; partners: Partner[]; preview: boolean }) {
  const map = useMap();
  useEffect(() => {
    if (partner?.location && !preview) {
      map.flyTo([partner.location.latitude, partner.location.longitude], 11, { duration: 0.8 });
    } else {
      const points = partners.flatMap((item) => item.location ? [[item.location.latitude, item.location.longitude] as [number, number]] : []);
      if (points.length) map.fitBounds(points, { padding: [36, 36], maxZoom: 7, animate: false });
    }
  }, [map, partner, partners, preview]);
  return null;
}

export function PartnersMap({ partners, selectedPartner, preview = false }: { partners: Partner[]; selectedPartner?: Partner; preview?: boolean }) {
  const mappedPartners = partners.filter((partner) => partner.location);
  return (
    <div className={`relative overflow-hidden bg-brand-stone ${preview ? 'h-[430px] sm:h-[490px]' : 'h-[520px] border border-black/5'}`}>
      <MapContainer
        center={[42.5, 12.5]}
        zoom={5.4}
        scrollWheelZoom={!preview}
        dragging={!preview}
        doubleClickZoom={!preview}
        touchZoom={!preview}
        zoomControl={!preview}
        className="h-full w-full"
        aria-label="Mappa geografica dei partner"
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mappedPartners.map((partner) => partner.location ? (
          <CircleMarker key={partner.id} center={[partner.location.latitude, partner.location.longitude]} radius={preview ? 8 : 9} pathOptions={{ color: '#ff5a00', fillColor: '#ff5a00', fillOpacity: 0.9 }}>
            <Popup>
              <strong>{partner.name}</strong>
              {partner.address ? <><br />{partner.address}</> : null}
            </Popup>
          </CircleMarker>
        ) : null)}
        <MapFocus partner={selectedPartner} partners={partners} preview={preview} />
      </MapContainer>
    </div>
  );
}
