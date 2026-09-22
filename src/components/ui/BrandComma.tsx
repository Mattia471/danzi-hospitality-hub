import { cn } from '../../utils/cn';

type BrandCommaProps = { className?: string };

export function BrandComma({ className }: BrandCommaProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('select-none font-serif text-[12rem] leading-[0.55] tracking-[-0.2em] text-brand-orange', className)}
    >
      ,
    </span>
  );
}
