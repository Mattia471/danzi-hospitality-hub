import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../ui/Container";
import { cn } from "../../utils/cn";

const items = [
  { to: "/", label: "Home", end: true },
  { to: "/partner", label: "Partner" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/realizzazioni", label: "Realizzazioni" },
  { to: "/prodotti-e-servizi", label: "Prodotti e servizi" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2 border-none">
          <img
            src="/logo_full.png"
            alt="D'Anzi Hospitality Hub"
            className="h-16 w-auto"
          />
        </Link>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navigazione principale"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "relative py-7 text-sm text-brand-muted transition-colors hover:text-brand-ink",
                  isActive &&
                    "font-medium text-brand-ink after:absolute after:inset-x-0 after:bottom-5 after:h-0.5 after:bg-brand-orange",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/#consulenza"
          className="hidden rounded-sm bg-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange-dark xl:inline-flex"
        >
          Richiedi una consulenza
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "border-b border-black/5 py-4 text-sm",
                    isActive ? "text-brand-orange" : "text-brand-ink",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/#consulenza"
              onClick={() => setOpen(false)}
              className="mt-5 bg-brand-orange px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Richiedi una consulenza
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
