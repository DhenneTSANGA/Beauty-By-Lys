"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, ArrowLeft, Plus } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const images = [
  { src: "/images/beauty/hommes/50.png", alt: "Dégradé à blanc" },
  { src: "/images/beauty/hommes/58.png", alt: "Taille de barbe" },
  { src: "/images/beauty/hommes/107.png", alt: "Coupe classique" },
  { src: "/images/beauty/hommes/74.png", alt: "Contour parfait" },
  { src: "/images/beauty/hommes/24.png", alt: "Soin visage homme" },
  { src: "/images/beauty/hommes/47.png", alt: "Motif artistique" },
  { src: "/images/beauty/hommes/104.png", alt: "Coupe au carré" },
  { src: "/images/beauty/hommes/66.png", alt: "Mèches et balayage" },
  { src: "/images/beauty/hommes/68.png", alt: "Soin visage homme" },
  { src: "/images/beauty/hommes/51.png", alt: "Motif artistique" },
  { src: "/images/beauty/hommes/55.png", alt: "Soin visage homme" },
  { src: "/images/beauty/hommes/114.png", alt: "Motif artistique" },
  { src: "/images/beauty/hommes/56.png", alt: "Soin visage homme" },
  { src: "/images/beauty/hommes/101.png", alt: "Motif artistique" },
  { src: "/images/beauty/hommes/57.png", alt: "Soin visage homme" },
  { src: "/images/beauty/hommes/53.png", alt: "Motif artistique" },
]

export default function HommesPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <RevealOnScroll animation="animate-reveal-left" once={false}>
            <Link 
              href="/realisations#hommes"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour aux réalisations
            </Link>
          </RevealOnScroll>
          <RevealOnScroll animation="animate-reveal-left" delay="delay-100" once={false}>
            <h1 className="font-serif text-5xl md:text-7xl">Coiffures <span className="italic text-accent">Hommes</span></h1>
          </RevealOnScroll>
          <RevealOnScroll animation="animate-reveal-left" delay="delay-200" once={false}>
            <p className="mt-6 max-w-xl text-muted-foreground">L&apos;excellence du service barbier. Découvrez nos coupes précises, dégradés impeccables et soins de la barbe.</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {images.map((item, i) => (
            <RevealOnScroll 
              key={i} 
              animation={i % 2 === 0 ? "animate-reveal-left" : "animate-reveal-right"} 
              delay={`delay-${(i % 4) * 100}`}
              once={false}
            >
              <button 
                onClick={() => setActiveImage(item.src)}
                className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary shadow-md transition-all hover:shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                     <Plus className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-serif text-lg italic text-white">{item.alt}</p>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={() => setActiveImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative h-full w-full max-w-5xl overflow-hidden rounded-xl animate-in zoom-in-95 duration-300">
            <Image
              src={activeImage}
              alt="Réalisation Beauty by Lys"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
