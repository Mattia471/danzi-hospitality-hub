import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { partners } from "../../data/partners";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function PartnersPreview() {
  const previewPartners = partners.slice(0, 6);

  const markerPositions = [
    { top: "20%", left: "26%" },
    { top: "34%", left: "65%" },
    { top: "58%", left: "40%" },
    { top: "70%", left: "72%" },
    { top: "42%", left: "18%" },
    { top: "76%", left: "28%" },
  ];

  return (
    <section className="overflow-hidden border-y border-black/5 bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* LEFT */}
        <div>
          <SectionHeading
            eyebrow="Partner"
            title="Un network di eccellenze."
            description="Collaboriamo con brand specializzati e realtà selezionate per costruire soluzioni complete dedicate al mondo dell’hospitality."
          />

          <div className="mt-8 flex items-center gap-8 border-y border-black/5 py-5">
            <div>
              <p className="text-3xl font-medium tracking-[-0.04em] text-brand-ink">
                {partners.length}
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Partner
              </p>
            </div>

            <div className="h-10 w-px bg-black/10" />

            <div>
              <p className="max-w-[190px] text-xs leading-5 text-brand-muted">
                Competenze e specializzazioni che lavorano insieme.
              </p>
            </div>
          </div>

          <Link
            to="/partner"
            className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange"
          >
            Scopri tutti i partner
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MAP PREVIEW */}
        <Link
          to="/partner"
          className="group relative block min-h-[440px] overflow-hidden border border-black/5 bg-[#f3f1ed] shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,90,0,0.12),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(23,29,33,0.08),transparent_30%)]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8d8d8d 1px, transparent 1px),
                linear-gradient(to bottom, #8d8d8d 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          />

          {/* Decorative routes */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 700 440"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M120 310 C210 250 210 130 330 155 S460 310 600 120"
              fill="none"
              stroke="rgba(23,29,33,.12)"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d="M170 100 C280 180 380 80 560 290"
              fill="none"
              stroke="rgba(255,90,0,.25)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
          </svg>

          {/* Header */}
          <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              D&apos;Anzi Partner Network
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-brand-muted">
              Una rete di competenze al servizio dell&apos;ospitalità.
            </p>
          </div>

          {/* Markers */}
          {previewPartners.map((partner, index) => {
            const position = markerPositions[index];

            return (
              <div
                key={partner.id}
                className="absolute z-10"
                style={{
                  top: position.top,
                  left: position.left,
                }}
              >
                <div className="group/marker relative">
                  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 transition-all duration-300 group-hover/marker:h-14 group-hover/marker:w-14" />

                  <div className="relative grid h-8 w-8 place-items-center rounded-full bg-brand-orange text-white shadow-[0_8px_20px_rgba(255,90,0,0.35)]">
                    <MapPin size={15} />
                  </div>

                  <div className="absolute left-1/2 top-10 z-30 min-w-max -translate-x-1/2 border border-black/5 bg-white px-3 py-2 shadow-lg">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-ink">
                      {partner.name}
                    </p>

                    {partner.category && (
                      <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-brand-muted">
                        {partner.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom info */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-black/5 bg-white/90 px-6 py-4 backdrop-blur-md sm:px-8">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-orange" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-muted">
                Esplora il network
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
              Mappa partner
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
