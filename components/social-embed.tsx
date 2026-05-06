import Image from "next/image"
import { Instagram, Play, Facebook } from "lucide-react"

const reels = [
  { src: "/images/beauty/femmes/hero4.png", views: "16.3k" },
  { src: "/images/beauty/femmes/hero2.png", views: "37K" },
  { src: "/images/beauty/femmes/hero3.png", views: "11K" },
  { src: "/images/beauty/femmes/hero.png", views: "8K" },
]

export function SocialEmbed() {
  return (
    <section className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-background/60">
              — Sur les réseaux
            </span>
            <h2 className="animate-reveal-left delay-100 mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              Suivez Beauty by Lys
              <br />
              <span className="italic text-accent">en direct.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/BEAUTYBYLYS/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:bg-background hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/beauty_by_lys1/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:bg-background hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@beauty.by.lys"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:bg-background hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.42a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84-.42z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {reels.map((r, i) => (
            <a
              key={i}
              href="https://tiktok.com/@beauty.by.lys"
              target="_blank"
              rel="noreferrer"
              className={`animate-reveal-up group relative aspect-[9/14] overflow-hidden rounded-xl ${
                i === 0 ? "delay-200" : i === 1 ? "delay-300" : i === 2 ? "delay-500" : "delay-100"
              }`}
            >
              <Image
                src={r.src}
                alt={`Reel ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Play className="h-12 w-12 fill-background text-background" />
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-background">
                <Play className="h-3 w-3 fill-current" />
                {r.views}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
