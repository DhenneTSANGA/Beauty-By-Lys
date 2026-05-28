import { Star } from "lucide-react"

const reviews = [
  {
    name: "Camille R.",
    handle: "@camille.rs",
    text: "Une expérience incroyable. Le résultat est impeccable et tient parfaitement. Lys a un vrai talent et un sens du détail rare.",
  },
  {
    name: "Sarah M.",
    handle: "@sarahm",
    text: "Le salon est sublime, l'ambiance ultra cosy. Mes ongles n'ont jamais été aussi beaux. Je ne vais plus ailleurs.",
  },
  {
    name: "Inès D.",
    handle: "@inesd_",
    text: "J'ai découvert La vitrine du glam sur TikTok et je comprends pourquoi tout le monde en parle. Pose nette, finition parfaite.",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="animate-reveal-up text-xs uppercase tracking-[0.22em] text-muted-foreground">
          — Témoignages
        </span>
        <h2 className="animate-reveal-up delay-100 mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          La voix de nos
          <span className="italic text-accent"> clientes.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className={`animate-reveal-up flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 ${
              i === 0 ? "delay-200" : i === 1 ? "delay-300" : "delay-500"
            }`}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-snug text-pretty">
              « {r.text} »
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.handle}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
