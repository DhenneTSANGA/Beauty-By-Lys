import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "La vitrine du glam — Coiffure, Onglerie & Beauté",
  description:
    "La vitrine du glam, salon premium spécialisé en coiffure, onglerie et prestations esthétiques à Libreville. Réalisations sur mesure, élégance moderne et expérience beauté immersive.",
  keywords: [
    "onglerie",
    "nail art",
    "beauté",
    "manucure",
    "salon esthétique",
    "La vitrine du glam",
  ],
  generator: "v0.app",
  openGraph: {
    title: "La vitrine du glam — Coiffure, Onglerie & Beauté",
    description:
      "Salon premium spécialisé en coiffure, onglerie et prestations esthétiques à Libreville.",
    type: "website",
    locale: "fr_FR",
  },
}

export const viewport: Viewport = {
  themeColor: "#fdf6ef",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground">
        <Navbar />
        {/* Spacer to account for fixed navbar height */}
        <div className="h-16 md:h-20" />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
