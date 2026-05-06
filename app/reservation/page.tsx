import Image from "next/image"
import { ReservationForm } from "@/components/reservation-form"
import { Clock, AlertCircle, Sparkles, MessageCircle } from "lucide-react"

const rules = [
  {
    icon: Clock,
    title: "Ponctualité",
    text: "Tout retard supérieur à 15 minutes pourra entraîner l'annulation du rendez-vous.",
  },
  {
    icon: AlertCircle,
    title: "Annulation",
    text: "Merci de prévenir au moins 24h à l'avance pour toute modification ou annulation.",
  },
  {
    icon: Sparkles,
    title: "Préparation",
    text: "Venez avec les ongles propres, sans crème ni huile, pour une meilleure adhérence.",
  },
]

export default function ReservationPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Réservation
          </span>
          <h1 className="animate-reveal-left delay-100 mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-8xl">
            Réservez votre
            <br />
            <span className="italic text-accent">moment Lys.</span>
          </h1>
          <p className="animate-reveal-left delay-200 mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Choisissez votre prestation de coiffure ou d&apos;onglerie, 
            sélectionnez votre créneau, et nous vous confirmons votre rendez-vous rapidement.
          </p>
        </div>
      </section>

      {/* WhatsApp / Form */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* WhatsApp shortcut */}
          <aside className="animate-reveal-left delay-300 md:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-detail.jpg"
                  alt=""
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="p-7">
                <h2 className="font-serif text-3xl leading-tight">
                  Un échange direct,
                  <span className="italic text-accent"> instantané</span>.
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Pour une réservation rapide ou une demande spécifique,
                  contactez-nous directement par WhatsApp.
                </p>
                <a
                  href="https://wa.me/24101234567?text=Bonjour%20Beauty%20by%20Lys%2C%20je%20souhaite%20réserver%20un%20rendez-vous."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent"
                >
                  <MessageCircle className="h-4 w-4" />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="animate-reveal-up delay-500 md:col-span-7">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — Bon à savoir
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
              Quelques règles pour un
              <span className="italic text-accent"> moment parfait</span>.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rules.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7"
              >
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
