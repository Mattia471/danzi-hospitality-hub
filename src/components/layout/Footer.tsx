import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_1fr_1fr] md:items-start">
        <div className="[&_span]:!text-white">
          <img
            src="/logo_full_w.png"
            alt="D'Anzi Hospitality Hub"
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Contatti
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <a
              className="flex items-center gap-3 text-white/80 hover:text-white"
              href={`mailto:${siteConfig.contacts.primaryEmail}`}
            >
              <Mail size={16} /> {siteConfig.contacts.primaryEmail}
            </a>
            <a
              className="flex items-center gap-3 text-white/80 hover:text-white"
              href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s/g, "")}`}
            >
              <Phone size={16} /> {siteConfig.contacts.primaryPhone}
            </a>
            <Link
              className="inline-flex border-b border-brand-orange pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:text-brand-orange"
              to="/#consulenza"
            >
              Richiedi una consulenza
            </Link>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            D’Anzi Hospitality Hub
          </p>
          <p className="mt-5 text-sm text-white/70">{siteConfig.tagline}</p>
          <p className="mt-7 text-xs text-white/40">
            © {new Date().getFullYear()} D’Anzi Hospitality Hub
          </p>
        </div>
      </Container>
    </footer>
  );
}
