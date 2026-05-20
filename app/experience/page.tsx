import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const categories = [
  {
    title: "Coiffure & Beauté Femme",
    icon: "👩🏾‍🦱",
    image: "/images/beauty/femmes/30.png",
    intro:
      "Révélez votre beauté avec nos prestations de coiffure sur mesure. Des tresses aux soins capillaires, nous créons le style qui vous ressemble avec expertise.",
    items: [
      { name: "Coiffure femme", price: "À partir de 30 000 FCFA" },
      { name: "Coiffure événementielle", price: "À partir de 50 000 FCFA" },
      { name: "Tresses / Braids", price: "À partir de 25 000 FCFA" },
      { name: "Pose perruques", price: "À partir de 15 000 FCFA" },
      { name: "Extensions", price: "À partir de 40 000 FCFA" },
      { name: "Soins capillaires", price: "À partir de 20 000 FCFA" },
      { name: "Lissage", price: "À partir de 60 000 FCFA" },
      { name: "Mise en beauté", price: "À partir de 15 000 FCFA" },
    ],
  },
  {
    title: "Onglerie & Nail Art",
    icon: "💅🏾",
    image: "/images/beauty/ongleries/7.png",
    intro:
      "L'excellence du détail pour vos mains. De la pose structurelle au nail art le plus créatif, confiez-nous vos envies.",
    items: [
      { name: "Pose (Gel, Semi-permanent, Capsules)", price: "À partir de 15 000 FCFA" },
      { name: "Design (Nail Art)", price: "À partir de 5 000 FCFA" },
      { name: "Entretien & Dépose", price: "À partir de 5 000 FCFA" },
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <RevealOnScroll animation="animate-reveal-left" once={false}>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — Expérience Beauté
            </span>
          </RevealOnScroll>
          <RevealOnScroll animation="animate-reveal-left" delay="delay-100" once={false}>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[0.95] tracking-tight text-balance md:text-8xl">
              L&apos;art de la beauté,
              <br />
              <span className="italic text-accent">pensé pour vous.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animation="animate-reveal-left" delay="delay-200" once={false}>
            <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Chaque prestation La vitrine du glam est une parenthèse précise et
              soignée. Découvrez nos signatures et choisissez celle qui vous
              ressemble.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          className={i % 2 === 0 ? "" : "bg-secondary/30"}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28 overflow-hidden">
            <RevealOnScroll 
              animation={i % 2 === 0 ? "animate-reveal-left" : "animate-reveal-right"}
              once={false}
              className={`relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-5 ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur">
                0{i + 1} · {cat.title}
              </span>
            </RevealOnScroll>

            <div className="md:col-span-7">
              <RevealOnScroll 
                animation={i % 2 === 0 ? "animate-reveal-right" : "animate-reveal-left"}
                once={false}
              >
                <h2 className="flex items-center gap-4 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                  <span className="text-3xl md:text-5xl">{cat.icon}</span>
                  <span>
                    {cat.title}
                    <span className="italic text-accent">.</span>
                  </span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll 
                animation={i % 2 === 0 ? "animate-reveal-right" : "animate-reveal-left"}
                delay="delay-100"
                once={false}
              >
                <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
                  {cat.intro}
                </p>
              </RevealOnScroll>

              <ul className="mt-10 divide-y divide-border border-y border-border">
                {cat.items.map((it, idx) => (
                  <RevealOnScroll 
                    key={it.name} 
                    animation={i % 2 === 0 ? "animate-reveal-right" : "animate-reveal-left"}
                    delay={`delay-${(idx + 2) * 100}`}
                    once={false}
                    className="w-full"
                  >
                    <li className="flex items-center justify-between gap-4 py-4">
                      <div className="flex items-center gap-3">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm md:text-base">{it.name}</span>
                      </div>
                      <span className="font-serif text-lg italic text-accent">
                        {it.price}
                      </span>
                    </li>
                  </RevealOnScroll>
                ))}
              </ul>

              <RevealOnScroll 
                animation="animate-reveal-up" 
                delay="delay-500"
                once={false}
              >
                <Link
                  href="/reservation"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent shimmer-btn"
                >
                  Réserver {cat.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
