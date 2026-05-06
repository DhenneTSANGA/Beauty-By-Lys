"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/experience", label: "Prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/univers", label: "À propos" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled || open
            ? "bg-background/95 backdrop-blur-md border-b border-border/60"
            : "bg-transparent max-lg:bg-background/95 max-lg:backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Beauty by Lys — Accueil"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg md:h-12 md:w-12">
              <Image
                src="/images/logo.png"
                alt="Logo Beauty by Lys"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl italic tracking-tight md:text-2xl">
              Beauty <span className="text-accent">by Lys</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {links.slice(0, -1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-serif text-xl font-medium italic tracking-tight text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/reservation"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-background transition-all hover:bg-accent hover:text-accent-foreground md:inline-flex"
            >
              Réserver
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer - moved outside header to prevent stacking context/blur issues on Android */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-in-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="Logo Beauty by Lys"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl italic">
                Beauty <span className="text-accent">by Lys</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Navigation mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-serif text-3xl font-medium italic tracking-tight transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-background"
            >
              Réserver maintenant
            </Link>
          </nav>
        </aside>
      </div>
    </>
  )
}
