import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandComma } from "../ui/BrandComma";
import { Container } from "../ui/Container";

const heroSlides = [
  {
    src: "/images/projects/axy/axy-lobby.webp",
    alt: "Axy Hotels InnStyle, lounge e spazi comuni di interior design",

    position: "center",
  },
  {
    src: "/images/projects/residenza-piranesi/piranesi-lounge.webp",
    alt: "Residenza Piranesi, camera e area lounge dal design contemporaneo",

    position: "center",
  },
  {
    src: "/images/projects/adesso/adesso-bar.webp",
    alt: "ADESSO, area bar e ristorazione con illuminazione scenografica",

    position: "center",
  },
  {
    src: "/images/projects/hotel-independent/independent-room.webp",
    alt: "Hotel Independent, camera con palette blu e bordeaux",

    position: "center",
  },
  {
    src: "/images/projects/eitch/eitch-wellness.webp",
    alt: "EITCH, bagno wellness in pietra con vasca e illuminazione integrata",

    position: "center",
  },
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4">
      <div
        className="relative isolate min-h-[76svh] overflow-hidden rounded-[1.55rem] bg-brand-ink text-white sm:min-h-[78vh] sm:rounded-[2.6rem] lg:min-h-[82vh]"
        aria-roledescription="carousel"
        aria-label="Realizzazioni hospitality e interior design"
      >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                index === activeSlide
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={index !== activeSlide}
            >
              <img
                src={slide.src}
                alt={index === activeSlide ? slide.alt : ""}
                className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                  index === activeSlide ? "scale-[1.045]" : "scale-100"
                }`}
                style={{ objectPosition: slide.position }}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,29,33,0.92)_0%,rgba(23,29,33,0.75)_38%,rgba(23,29,33,0.28)_70%,rgba(23,29,33,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,transparent_45%,rgba(0,0,0,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(255,90,0,0.13),transparent_25%)]" />

        <Container className="relative z-10 grid min-h-[76svh] items-center gap-10 py-20 sm:min-h-[78vh] lg:min-h-[82vh] lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                D’Anzi Hospitality Hub
              </p>
              <span className="hidden h-px w-10 bg-brand-orange sm:block" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
                Interior · Contract · Hospitality
              </p>
            </div>

            <h1 className="max-w-4xl text-[2.025rem] font-medium uppercase leading-[1.03] tracking-[-0.045em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] sm:text-[2.7rem] lg:text-[3.96rem] xl:text-[4.725rem]">
              Soluzioni per un’ospitalità che fa la{" "}
              <span className="text-brand-orange">differenza.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              Prodotti, servizi e consulenza per un’ospitalità di qualità, con soluzioni pensate su misura per ogni struttura.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/prodotti-e-servizi"
                className="inline-flex items-center gap-3 bg-brand-orange px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] transition hover:bg-brand-orange-dark"
              >
                Scopri di più <ArrowRight size={16} />
              </Link>
              <Link
                to="/realizzazioni"
                className="inline-flex items-center gap-3 border border-white/35 bg-black/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] backdrop-blur-sm transition hover:bg-white hover:text-brand-ink"
              >
                Guarda le realizzazioni
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[430px] lg:block">
            <BrandComma className="absolute right-6 top-10 text-[24rem] leading-[0.55] opacity-80" />
            <div className="absolute bottom-16 right-0 max-w-[230px] border-l border-white/35 pl-6 text-xs uppercase leading-7 tracking-[0.18em] text-white/80">
              Spazi
              <br />
              Persone
              <br />
              Esperienze
              <br />
              di valore
            </div>
          </div>
        </Container>


      </div>
    </section>
  );
}
