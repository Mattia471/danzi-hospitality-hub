import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Container } from '../ui/Container';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type ConsultationForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  privacy: boolean;
  website: string;
};

const initialForm: ConsultationForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  privacy: false,
  website: '',
};

const inputClassName =
  'w-full border border-brand-ink/15 bg-white px-4 py-3.5 text-sm text-brand-ink outline-none transition placeholder:text-brand-muted/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange';

export function ConsultationSection() {
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');

  function updateField<K extends keyof ConsultationForm>(key: K, value: ConsultationForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Campo honeypot anti-spam: un utente reale non lo compila mai.
    if (form.website) {
      return;
    }

    if (!form.privacy) {
      setStatus('error');
      setFeedback('Per inviare la richiesta è necessario accettare l’informativa privacy.');
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    if (!endpoint) {
      setStatus('error');
      setFeedback('Il modulo è pronto, ma manca ancora la configurazione del servizio di invio email.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          topic: form.topic,
          message: form.message,
          _subject: `Nuova richiesta di consulenza - ${form.name}`,
          _replyto: form.email,
          source: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error('Invio non riuscito');
      }

      setStatus('success');
      setFeedback('Grazie. La tua richiesta è stata inviata correttamente. Ti ricontatteremo al più presto.');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setFeedback('Non siamo riusciti a inviare la richiesta. Riprova tra poco oppure contattaci tramite email o telefono.');
    }
  }

  return (
    <section id="consulenza" className="scroll-mt-24 bg-brand-ink py-20 text-white lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="mb-5 h-0.5 w-10 bg-brand-orange" />
          <p className="text-xs uppercase tracking-[0.24em] text-white/55">Richiedi una consulenza</p>
          <h2 className="mt-5 max-w-xl text-4xl font-normal leading-tight sm:text-5xl">
            Parliamo del tuo prossimo progetto.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
            Raccontaci la tua struttura, le tue esigenze o il progetto che hai in mente. D’Anzi Hospitality Hub ti ricontatterà per valutare insieme la soluzione più adatta.
          </p>

          <div className="mt-10 space-y-5 border-t border-white/10 pt-8 text-sm text-white/70">
            <a className="flex items-center gap-3 transition hover:text-white" href={`mailto:${siteConfig.contacts.primaryEmail}`}>
              <Mail size={17} className="text-brand-orange" />
              {siteConfig.contacts.primaryEmail}
            </a>
            <a className="flex items-center gap-3 transition hover:text-white" href={`tel:${siteConfig.contacts.directPhone.replace(/\s/g, '')}`}>
              <Phone size={17} className="text-brand-orange" />
              {siteConfig.contacts.directPhone}
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>Roma, Italia</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-canvas p-6 text-brand-ink sm:p-8 lg:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Nome e cognome *</span>
              <input
                className={inputClassName}
                type="text"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Mario Rossi"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Struttura / Azienda</span>
              <input
                className={inputClassName}
                type="text"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={(event) => updateField('company', event.target.value)}
                placeholder="Hotel, ristorante, società..."
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Email *</span>
              <input
                className={inputClassName}
                type="email"
                name="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="nome@azienda.it"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Telefono</span>
              <input
                className={inputClassName}
                type="tel"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="+39 ..."
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Di cosa hai bisogno? *</span>
            <select
              className={inputClassName}
              name="topic"
              required
              value={form.topic}
              onChange={(event) => updateField('topic', event.target.value)}
            >
              <option value="" disabled>
                Seleziona una voce
              </option>
              <option value="Prodotti e forniture">Prodotti e forniture</option>
              <option value="Arredo e progettazione">Arredo e progettazione</option>
              <option value="Wellness e SPA">Wellness e SPA</option>
              <option value="Sicurezza e tecnologia">Sicurezza e tecnologia</option>
              <option value="Consulenza generale">Consulenza generale</option>
              <option value="Altro">Altro</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em]">Raccontaci il progetto *</span>
            <textarea
              className={`${inputClassName} min-h-40 resize-y`}
              name="message"
              required
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Descrivi brevemente la struttura, le esigenze e gli obiettivi del progetto..."
            />
          </label>

          <div className="hidden" aria-hidden="true">
            <label>
              Sito web
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) => updateField('website', event.target.value)}
              />
            </label>
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-brand-muted">
            <input
              type="checkbox"
              name="privacy"
              required
              checked={form.privacy}
              onChange={(event) => updateField('privacy', event.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-brand-orange"
            />
            <span>
              Ho letto e accetto l’informativa privacy e autorizzo il trattamento dei dati esclusivamente per essere ricontattato in merito alla mia richiesta. *
            </span>
          </label>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand-orange px-6 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Invio in corso...' : 'Invia richiesta'}
              {status !== 'sending' ? <ArrowRight size={17} /> : null}
            </button>

            <p className="text-xs text-brand-muted">* Campi obbligatori</p>
          </div>

          {feedback ? (
            <div
              className={`mt-6 flex items-start gap-3 border px-4 py-3 text-sm leading-6 ${
                status === 'success'
                  ? 'border-green-700/20 bg-green-700/5 text-green-800'
                  : 'border-red-700/20 bg-red-700/5 text-red-800'
              }`}
              role="status"
              aria-live="polite"
            >
              {status === 'success' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : null}
              <span>{feedback}</span>
            </div>
          ) : null}
        </form>
      </Container>
    </section>
  );
}
