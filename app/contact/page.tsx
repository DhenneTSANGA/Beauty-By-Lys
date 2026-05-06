import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

const hours = [
  { day: "Lundi", value: "Fermé" },
  { day: "Mardi", value: "10h — 19h" },
  { day: "Mercredi", value: "10h — 19h" },
  { day: "Jeudi", value: "10h — 20h" },
  { day: "Vendredi", value: "10h — 20h" },
  { day: "Samedi", value: "9h — 18h" },
  { day: "Dimanche", value: "Fermé" },
]

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Contact & Infos
          </span>
          <h1 className="animate-reveal-left delay-100 mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-8xl">
            Nous trouver,
            <br />
            <span className="italic text-accent">nous écrire.</span>
          </h1>
          <p className="animate-reveal-left delay-200 mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Une question, une envie de changement ou simplement besoin d&apos;un conseil&nbsp;? 
            Notre équipe vous accueille au cœur de Libreville.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Infos & Horaires */}
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <InfoBlock
                icon={MapPin}
                title="Adresse"
                lines={["Quartier Louis", "Libreville, Gabon"]}
              />
              <InfoBlock
                icon={Phone}
                title="Téléphone"
                lines={["+241 066 58 14 58"]}
                href="tel:+241066581458"
              />
              <InfoBlock
                icon={Mail}
                title="Email"
                lines={["contact@beautybylys.com"]}
                href="mailto:contact@beautybylys.com"
              />
              <InfoBlock
                icon={Instagram}
                title="Réseaux"
                lines={["@beautybylys sur Instagram & TikTok"]}
                href="https://instagram.com"
              />
            </div>

            <div className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-accent" />
                <h2 className="font-serif text-2xl">Horaires d&apos;ouverture</h2>
              </div>
              <ul className="mt-6 divide-y divide-border/60">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-4 text-sm"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span
                      className={
                        h.value === "Fermé"
                          ? "italic text-muted-foreground"
                          : "font-serif text-base italic text-accent"
                      }
                    >
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-[2.5rem] border border-border shadow-inner">
              <iframe
                title="Localisation Beauty by Lys"
                src="https://www.google.com/maps?q=Libreville+Gabon&output=embed"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoBlock({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  lines: string[]
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-5">
      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </p>
        <div className="mt-2 space-y-1 font-serif text-xl leading-tight md:text-2xl">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="block transition-opacity hover:opacity-70"
      >
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}
