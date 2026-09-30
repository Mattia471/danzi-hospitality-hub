import { Link } from 'react-router-dom';

export function BrandLogo() {
  return (
    <Link to="/" aria-label="D'Anzi Hospitality Hub - Home" className="inline-flex flex-col leading-none">
      <span className="text-[2rem] font-medium tracking-[-0.08em] text-brand-ink">
        d<span className="text-brand-orange">’</span>anzi
      </span>
      <span className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-brand-muted">hospitality hub</span>
    </Link>
  );
}
