import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Mail, Phone, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="Logo Beauty by Lys"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-3xl italic">
                Beauty <span className="text-accent">by Lys</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Une parenthèse beauté pensée pour révéler votre élégance.
              Coiffure haute couture, espace homme et onglerie d&apos;exception sur mesure.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.facebook.com/BEAUTYBYLYS/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/beauty_by_lys1/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@beauty.by.lys"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.42a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84-.42z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/" className="hover:text-accent">Accueil</Link></li>
              <li><Link href="/experience" className="hover:text-accent">Prestations</Link></li>
              <li><Link href="/realisations" className="hover:text-accent">Réalisations</Link></li>
              <li><Link href="/univers" className="hover:text-accent">À propos</Link></li>
              <li><Link href="/reservation" className="hover:text-accent">Réservation</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Nous trouver
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Quartier Louis, Libreville</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+241066581458" className="hover:text-accent">+241 066 58 14 58</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Beauty by Lys. Tous droits réservés.</p>
          <p className="font-serif italic">L&apos;élégance au bout des doigts.</p>
        </div>
      </div>
    </footer>
  )
}
