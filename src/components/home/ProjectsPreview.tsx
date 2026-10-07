import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const cardSpan = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
];

export function ProjectsPreview() {
  return (
    <section className="border-y border-black/5 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Realizzazioni"
              title="Spazi che raccontano un’identità."
              description="Hotel, residenze, suite, aree wellness e food & beverage: una selezione di ambienti reali in cui materiali, arredi, luce e dettagli lavorano insieme."
            />
            <Link
              to="/realizzazioni"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange"
            >
              Esplora tutte le realizzazioni
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="flex items-end justify-between gap-5 border-l border-black/10 pl-6 lg:pl-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
                Portfolio
              </p>
              <p className="mt-2 text-4xl font-medium tracking-[-0.04em] text-brand-ink">
                {String(projects.length).padStart(2, '0')}
              </p>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-brand-muted md:block">
              Una gallery costruita su progetti e fotografie reali, per raccontare subito
              il mondo interior e hospitality.
            </p>
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[260px] gap-4 md:grid-cols-12 lg:auto-rows-[300px]">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/realizzazioni#${project.id}`}
              className={`group relative overflow-hidden bg-brand-stone ${
                cardSpan[index] ?? 'md:col-span-4'
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} · ${project.category}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    {String(index + 1).padStart(2, '0')} · {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
