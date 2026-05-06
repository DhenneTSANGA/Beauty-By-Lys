import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Beauté Femme",
    description:
      "Coiffures, tresses, perruques et styling pour sublimer votre allure au féminin.",
    image: "/images/beauty/femmes/36.png",
    price: "À partir de 10 000 FCFA",
  },
  {
    title: "Espace Homme",
    description:
      "Coupes précises, dégradés modernes et entretien de la barbe pour une élégance parfaite.",
    image: "/images/beauty/hommes/103.png",
    price: "À partir de 5 000 FCFA",
  },
  {
    title: "Onglerie & Nail Art",
    description:
      "L'art de la pose, du design créatif et de l'entretien pour des mains sublimes.",
    image: "/images/beauty/ongleries/7.png",
    price: "À partir de 15 000 FCFA",
  },
]

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground animate-reveal-left">
            — Nos signatures
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl animate-reveal-left delay-100">
            Une expérience beauté
            <span className="italic text-accent"> entièrement</span> sur mesure.
          </h2>
        </div>
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em]"
        >
          Toutes les prestations
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 animate-reveal-up ${
              i === 0 ? "delay-200 ring-2 ring-accent/20" : i === 1 ? "delay-300" : "delay-500"
            }`}
          >
            {i === 0 && (
              <div className="absolute top-4 left-4 z-10 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-lg">
                Signature
              </div>
            )}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] backdrop-blur">
                0{i + 1}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <span className="text-xs italic text-accent">{s.price}</span>
              </div>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <Link
                href="/reservation"
                className="mt-3 inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
              >
                Réserver
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
