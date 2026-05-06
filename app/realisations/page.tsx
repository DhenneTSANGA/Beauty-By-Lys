"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, Plus, ArrowLeft } from "lucide-react"
import { SocialEmbed } from "@/components/social-embed"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { cn } from "@/lib/utils"

const realisationsFemmes = [
  { src: "/images/portrait.jpg", alt: "Tresses Signature" },
  { src: "/images/hero-nails.jpg", alt: "Coiffure de mariée" },
  { src: "/images/service-detail.jpg", alt: "Chignon sophistiqué" },
  { src: "/images/nails-1.jpg", alt: "Tresses bohèmes" },
  { src: "/images/nails-2.jpg", alt: "Coupe au carré" },
  { src: "/images/nails-3.jpg", alt: "Mèches et balayage" },
]

const realisationsHommes = [
  { src: "/images/salon-interior.jpg", alt: "Dégradé à blanc" },
  { src: "/images/portrait.jpg", alt: "Taille de barbe" },
  { src: "/images/service-detail.jpg", alt: "Coupe classique" },
  { src: "/images/nails-4.jpg", alt: "Contour parfait" },
  { src: "/images/nails-5.jpg", alt: "Soin visage homme" },
  { src: "/images/nails-6.jpg", alt: "Motif artistique" },
]

const realisationsOngleries = [
  { src: "/images/nails-1.jpg", alt: "French gold accent" },
  { src: "/images/nails-2.jpg", alt: "Chrome rose stiletto" },
  { src: "/images/nails-3.jpg", alt: "French milky" },
  { src: "/images/nails-4.jpg", alt: "Floral nail art" },
  { src: "/images/nails-5.jpg", alt: "Rouge classique" },
  { src: "/images/nails-6.jpg", alt: "Glass holographique" },
]

function GallerySection({ 
  title, 
  subtitle, 
  items, 
  link,
  onImageClick 
}: { 
  title: string, 
  subtitle: string, 
  items: any[],
  link: string,
  onImageClick: (src: string) => void
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <RevealOnScroll key={i} animation="animate-reveal-up" delay={i * 100}>
            <button 
              onClick={() => onImageClick(item.src)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary shadow-md transition-all hover:shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
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

      <div className="mt-12 flex justify-center">
        <Link 
          href={link}
          className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-all hover:bg-foreground hover:text-background"
        >
          Voir plus d&apos;images
          <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
        </Link>
      </div>
    </section>
  )
}

export default function RealisationsPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Galerie d&apos;Excellence
          </span>
          <h1 className="animate-reveal-left delay-100 mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-8xl">
            L&apos;Art du Détail,
            <br />
            <span className="italic text-accent">Signé Lys.</span>
          </h1>
          <p className="animate-reveal-left delay-200 mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Découvrez nos plus belles réalisations à Libreville. Trois univers dédiés à la beauté, 
            à l&apos;élégance et au soin de soi.
          </p>
        </div>
      </section>

      <GallerySection 
        title="Coiffures pour Femmes" 
        subtitle="De la coiffure haute couture aux tresses protectrices, sublimez votre féminité."
        items={realisationsFemmes}
        link="/realisations/femmes"
        onImageClick={setActiveImage}
      />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <hr className="border-border" />
      </div>

      <GallerySection 
        title="Coiffures pour Hommes" 
        subtitle="L'expertise Barbier au service de votre style. Coupes précises et soins sur mesure."
        items={realisationsHommes}
        link="/realisations/hommes"
        onImageClick={setActiveImage}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <hr className="border-border" />
      </div>

      <GallerySection 
        title="Ongleries" 
        subtitle="Nail art d'exception, manucure et pédicure pour des mains et des pieds parfaits."
        items={realisationsOngleries}
        link="/realisations/ongleries"
        onImageClick={setActiveImage}
      />

      <div className="mb-20">
        <SocialEmbed />
      </div>

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
    </>
  )
}
