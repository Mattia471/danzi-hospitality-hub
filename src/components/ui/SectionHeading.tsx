import { cn } from '../../utils/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-brand-muted">
          <span className="h-px w-8 bg-brand-orange" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-medium tracking-[-0.03em] text-brand-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-brand-muted">{description}</p> : null}
    </div>
  );
}
