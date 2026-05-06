"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Tout", "Coiffure", "Homme", "Onglerie", "Soin"] as const

const items = [
  { src: "/images/portrait.jpg", alt: "Tresses Signature", cat: "Coiffure" },
  { src: "/images/service-detail.jpg", alt: "Coupe Homme", cat: "Homme" },
  { src: "/images/nails-1.jpg", alt: "French gold accent", cat: "Onglerie" },
  { src: "/images/nails-2.jpg", alt: "Chrome rose stiletto", cat: "Onglerie" },
  { src: "/images/nails-3.jpg", alt: "French milky", cat: "Onglerie" },
  { src: "/images/nails-4.jpg", alt: "Floral nail art", cat: "Onglerie" },
  { src: "/images/nails-5.jpg", alt: "Rouge classique", cat: "Onglerie" },
  { src: "/images/nails-6.jpg", alt: "Glass holographique", cat: "Onglerie" },
]

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tout")
  const [active, setActive] = useState<string | null>(null)

  const filtered =
    filter === "Tout" ? items : items.filter((it) => it.cat === filter)

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all",
              filter === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-xs italic text-muted-foreground">
          {filtered.length} réalisations
        </span>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {filtered.map((it, i) => (
          <button
            key={it.src + i}
            type="button"
            onClick={() => setActive(it.src)}
            className="animate-reveal-up group relative aspect-[9/14] w-full overflow-hidden rounded-xl"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="rounded-full bg-background/20 p-4 backdrop-blur-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-background">
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-left">
              <p className="font-serif text-lg italic text-background">
                {it.alt}
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-background/80">
                {it.cat}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={active}
              alt=""
              fill
              className="rounded-xl object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
