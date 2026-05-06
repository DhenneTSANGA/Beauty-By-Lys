"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"

const services = [
  "Beauté Femme — Coiffure",
  "Beauté Femme — Tresses",
  "Beauté Femme — Perruque",
  "Beauté Femme — Styling",
  "Espace Homme — Coupe",
  "Espace Homme — Dégradé",
  "Espace Homme — Barbe",
  "Onglerie — Pose",
  "Onglerie — Nail Art",
  "Onglerie — Entretien",
  "Autre / sur demande",
]

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          Demande envoyée<span className="italic text-accent">.</span>
        </h2>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Merci pour votre demande de réservation. Nous revenons vers vous
          très vite pour confirmer votre rendez-vous.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <h2 className="font-serif text-3xl leading-tight md:text-4xl">
        Formulaire de
        <span className="italic text-accent"> réservation</span>.
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tous les champs sont requis.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Prénom & nom" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Camille Dupont"
            className="input"
          />
        </Field>

        <Field label="Téléphone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="06 00 00 00 00"
            className="input"
          />
        </Field>

        <Field label="Email" htmlFor="email" className="md:col-span-2">
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="vous@exemple.com"
            className="input"
          />
        </Field>

        <Field label="Prestation souhaitée" htmlFor="service" className="md:col-span-2">
          <select id="service" name="service" required className="input">
            <option value="">Choisir une prestation…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Date souhaitée" htmlFor="date">
          <input id="date" name="date" required type="date" className="input" />
        </Field>

        <Field label="Heure préférée" htmlFor="time">
          <input id="time" name="time" required type="time" className="input" />
        </Field>

        <Field label="Message (optionnel)" htmlFor="message" className="md:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Inspirations, références, demandes spécifiques…"
            className="input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent disabled:opacity-60 md:w-auto"
      >
        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.85rem 1.1rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
          font-family: inherit;
        }
        textarea.input { border-radius: 1rem; }
        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent);
        }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
