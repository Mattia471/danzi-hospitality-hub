import { Link } from 'react-router-dom';

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" aria-label="D'Anzi Hospitality Hub, torna alla Home" className="inline-flex shrink-0 items-center">
      <img
        src={inverted ? '/brand/logo-footer.png' : '/brand/logo-header.png'}
        alt="D'Anzi Hospitality Hub"
        className="h-[55px] w-[130px] object-contain sm:h-[65px] sm:w-[165px]"
        width="165"
        height="65"
      />
    </Link>
  );
}
