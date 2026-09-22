import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Realizzazioni" title="Spazi che ispirano." description="Una selezione di progetti da sostituire con fotografie e schede reali delle realizzazioni D’Anzi." />
          <Link to="/realizzazioni" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
            Vai alle realizzazioni <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article key={project.id} className="group relative min-h-[340px] overflow-hidden bg-brand-stone p-6">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent,rgba(0,0,0,0.08))] transition-transform duration-500 group-hover:scale-105" />
              <span className="relative text-xs uppercase tracking-[0.18em] text-brand-muted">0{index + 1}</span>
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-xs uppercase tracking-[0.16em] text-brand-orange">{project.category}</p>
                <h3 className="mt-2 text-2xl font-medium">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
