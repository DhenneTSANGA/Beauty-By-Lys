import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const items = [
  { src: "/images/beauty/femmes/36.png", alt: "Coiffure de mariée" },
  { src: "/images/beauty/hommes/57.png", alt: "Coupe Homme" },
  { src: "/images/beauty/femmes/85.png", alt: "Lace frontale" },
  { src: "/images/beauty/ongleries/97.png", alt: "Pose Nail Art" },
  { src: "/images/beauty/ongleries/104.png", alt: "Ombre Nail Art" },
  { src: "/images/beauty/ongleries/105.png", alt: "Nail Art Prestige" },
  
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — Galerie
            </span>
            <h2 className="animate-reveal-left delay-100 mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              Des réalisations qui
              <br />
              <span className="italic text-accent">racontent une histoire.</span>
            </h2>
          </div>
          <Link
            href="/realisations"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-[0.16em]"
          >
            Voir plus
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {items.slice(0, 4).map((it, i) => (
            <div
              key={it.src}
              className={`animate-reveal-up group relative aspect-[9/14] overflow-hidden rounded-xl ${
                i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : "delay-500"
              }`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-40 transition-opacity group-hover:opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-background/20 p-3 backdrop-blur-md">
                  <ArrowUpRight className="h-6 w-6 text-background" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.2em] text-background opacity-0 transition-all translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                {it.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
