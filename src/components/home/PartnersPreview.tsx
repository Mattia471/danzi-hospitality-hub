import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { divIcon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";

import { partners } from "../../data/partners";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

import "leaflet/dist/leaflet.css";

const partnerMarkerIcon = divIcon({
  className: "",
  html: `
    <div style="
      width: 28px;
      height: 28px;
      background: #ff5a00;
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
      "></div>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -30],
});

function FitPartnerBounds() {
  const map = useMap();

  const validPartners = partners.filter(
    (partner) =>
      partner.location?.latitude != null && partner.location?.longitude != null,
  );

  useEffect(() => {
    if (validPartners.length === 0) return;

    const bounds = validPartners.map((partner) => [
      partner.location!.latitude,
      partner.location!.longitude,
    ]) as [number, number][];

    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 7,
    });
  }, [map, validPartners]);

  return null;
}

export function PartnersPreview() {
  const partnersWithLocation = partners.filter(
    (partner) =>
      partner.location?.latitude != null && partner.location?.longitude != null,
  );

  return (
    <section className="bg-brand-stone/30 py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* TESTO */}
        <div>
          <SectionHeading
            eyebrow="Partner"
            title="Un network di eccellenze."
            description="Collaboriamo con brand specializzati distribuiti sul territorio per costruire soluzioni complete per il mondo dell’hospitality."
          />

          <div className="mt-8 flex items-center gap-3 text-sm text-brand-muted">
            <MapPin size={18} className="text-brand-orange" />

            <span>
              {partnersWithLocation.length} partner presenti sulla mappa
            </span>
          </div>

          <Link
            to="/partner"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-brand-orange
              transition-all
              hover:gap-4
            "
          >
            Tutti i partner
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* MAPPA */}
        <div
          className="
            overflow-hidden
            rounded-sm
            border
            border-black/5
            bg-white
            p-2
            shadow-[0_30px_70px_rgba(0,0,0,0.08)]
          "
        >
          <div className="relative h-[420px] overflow-hidden">
            <MapContainer
              center={[42.5, 12.5]}
              zoom={5}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <FitPartnerBounds />

              {partnersWithLocation.map((partner) => (
                <Marker
                  key={partner.id}
                  position={[
                    partner.location!.latitude,
                    partner.location!.longitude,
                  ]}
                  icon={partnerMarkerIcon}
                >
                  <Popup minWidth={240}>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-[#ff5a00]">
                          {partner.category}
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                          {partner.name}
                        </h3>
                      </div>

                      {partner.address && (
                        <p className="text-sm leading-5 text-black/60">
                          {partner.address}
                        </p>
                      )}

                      <div className="flex flex-col gap-2">
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-[#ff5a00]"
                          >
                            <ExternalLink size={15} />
                            Sito web
                          </a>
                        )}

                        {partner.email && (
                          <a
                            href={`mailto:${partner.email}`}
                            className="flex items-center gap-2 text-sm text-[#ff5a00]"
                          >
                            <Mail size={15} />
                            Scrivi una mail
                          </a>
                        )}

                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${partner.location!.latitude},${partner.location!.longitude}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-[#ff5a00]"
                        >
                          <MapPin size={15} />
                          Indicazioni
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
