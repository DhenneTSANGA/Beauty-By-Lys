import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { ServicesPreview } from "@/components/services-preview"
import { Testimonials } from "@/components/testimonials"
import { GalleryPreview } from "@/components/gallery-preview"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-6">
            <RevealOnScroll animation="animate-reveal-left" once={false}>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-accent" />
                Salon premium · Libreville
              </span>
            </RevealOnScroll>

            <RevealOnScroll animation="animate-reveal-left" delay="delay-100" once={false}>
              <h1 className="mt-6 font-serif text-4xl leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
                L&apos;art de
                <br />
                <span className="italic text-accent">vous sublimer</span>
                <br />
                en beauté.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll animation="animate-reveal-left" delay="delay-200" once={false}>
              <p className="mt-7 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Beauty by LYS, votre destination prestige à Libreville pour la coiffure haute couture, 
                l&apos;espace homme et l&apos;onglerie d&apos;exception.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="animate-reveal-up" delay="delay-300" once={false}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/reservation"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent shimmer-btn"
                >
                  Réserver votre séance
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/realisations"
                  className="text-sm font-medium underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
                >
                  Voir plus
                </Link>
              </div>
            </RevealOnScroll>

            <div className="mt-12 flex items-center gap-6 border-t border-border pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-18 w-18 overflow-hidden rounded-full border-2 border-background bg-secondary"
                  >
                    <Image
                      src={`/images/dhenne-${i}.png`}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  +500 clientes conquises
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6 flex justify-center">
            <RevealOnScroll animation="animate-zoom-in" once={false} className="w-full max-w-[500px] lg:max-w-none">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-secondary md:rounded-[2.5rem]">
                {/* Remplacer src="/videos/hero.mp4" par le chemin de votre vidéo une fois ajoutée */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  poster="/images/beauty/femmes/hero.png"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                  <Image
                    src="/images/portrait.jpg"
                    alt="Coiffure élégante Beauty by Lys"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </video>
              </div>
            </RevealOnScroll>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-4 hidden max-w-[220px] rounded-2xl bg-background p-5 shadow-xl shadow-foreground/10 md:block">
              <p className="font-serif text-2xl italic leading-tight">
                « Une allure royale. »
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                — Expertise Coiffure
              </p>
            </div>
            <div className="absolute -top-4 right-4 hidden rotate-3 rounded-full bg-accent px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground shadow-lg md:block">
              Spécialiste Tresses & Perruques
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / valeur */}
      <section className="border-y border-border bg-foreground py-6 text-background">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-center font-serif text-lg italic md:text-xl">
          <span>Coiffure</span>
          <span className="text-accent">✦</span>
          <span>Tresses</span>
          <span className="text-accent">✦</span>
          <span>Espace Homme</span>
          <span className="text-accent">✦</span>
          <span>Onglerie</span>
          <span className="text-accent">✦</span>
          <span>Nail art</span>
          <span className="text-accent">✦</span>
          <span>Soin signature</span>
        </div>
      </section>

      <ServicesPreview />
      
      <RevealOnScroll animation="animate-zoom-in" once={false}>
        <GalleryPreview />
      </RevealOnScroll>
      
      <RevealOnScroll animation="animate-reveal-up" once={false}>
        <Testimonials />
      </RevealOnScroll>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
        <RevealOnScroll className="mx-auto max-w-4xl px-5 text-center md:px-8" once={false}>
          <h2 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
            Prête à briller&nbsp;?
            <br />
            <span className="italic text-accent">Offrez-vous un instant Lys.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Réservez dès maintenant votre prochaine séance et découvrez une
            expérience pensée dans le moindre détail.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/reservation"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent shimmer-btn"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/241066581458"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-all hover:bg-foreground hover:text-background"
            >
              WhatsApp direct
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
