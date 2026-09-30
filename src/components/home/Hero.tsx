import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandComma } from '../ui/BrandComma';
import { Container } from '../ui/Container';

const heroSlides = [
  {
    src: '/images/hero/hotel-steps-reception.jpg',
    alt: 'Reception di hotel con bancone su misura, dettagli in ottone e illuminazione decorativa',
    label: 'Reception & contract',
    position: 'center',
  },
  {
    src: '/images/hero/hotel-steps-bedroom.jpg',
    alt: 'Camera d’hotel contemporanea con boiserie, illuminazione integrata e arredi su misura',
    label: 'Rooms & interior',
    position: 'center',
  },
  {
    src: '/images/hero/hotel-steps-bathroom.jpg',
    alt: 'Bagno d’hotel con superfici in pietra, lavabo da appoggio e dettagli di interior design',
    label: 'Bathrooms & materials',
    position: 'center',
  },
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section
      className="relative isolate min-h-[76vh] overflow-hidden bg-brand-ink text-white lg:min-h-[82vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Progetti hospitality e interior design"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ''}
              className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                index === activeSlide ? 'scale-[1.045]' : 'scale-100'
              }`}
              style={{ objectPosition: slide.position }}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,29,33,0.90)_0%,rgba(23,29,33,0.74)_38%,rgba(23,29,33,0.28)_70%,rgba(23,29,33,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,transparent_45%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(255,90,0,0.13),transparent_25%)]" />

      <Container className="relative z-10 grid min-h-[76vh] items-center gap-10 py-20 lg:min-h-[82vh] lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs uppercase tracking-[0.26em] text-white/70">D’Anzi Hospitality Hub</p>
            <span className="hidden h-px w-10 bg-brand-orange sm:block" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
              Interior · Contract · Hospitality
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-8xl">
            Soluzioni che fanno la <span className="text-brand-orange">differenza.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Prodotti, servizi e consulenza per trasformare gli spazi dell’ospitalità in esperienze riconoscibili, funzionali e su misura.
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
            Spazi<br />Persone<br />Esperienze<br />di valore
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-black/15 backdrop-blur-[2px]">
        <Container className="flex min-h-20 items-center justify-between gap-5 py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">In evidenza</p>
            <p className="mt-1 truncate text-xs font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-sm">
              {heroSlides[activeSlide].label}
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden items-center gap-2 sm:flex" aria-label="Seleziona immagine">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-[3px] transition-all duration-300 ${
                    index === activeSlide ? 'w-10 bg-brand-orange' : 'w-5 bg-white/35 hover:bg-white/70'
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 border-l border-white/20 pl-4 sm:pl-6">
              <span className="mr-1 text-[10px] font-semibold tracking-[0.18em] text-white/55">
                {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={previousSlide}
                className="grid h-10 w-10 place-items-center border border-white/25 bg-black/10 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                aria-label="Immagine precedente"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="grid h-10 w-10 place-items-center border border-white/25 bg-black/10 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                aria-label="Immagine successiva"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
