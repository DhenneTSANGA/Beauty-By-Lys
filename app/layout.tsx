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
  title: "Beauty by Lys — Onglerie & Mise en beauté",
  description:
    "Beauty by Lys, salon premium spécialisé en onglerie et prestations esthétiques. Réalisations sur mesure, élégance moderne et expérience beauté immersive.",
  keywords: [
    "onglerie",
    "nail art",
    "beauté",
    "manucure",
    "salon esthétique",
    "Beauty by Lys",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Beauty by Lys — Onglerie & Mise en beauté",
    description:
      "Salon premium spécialisé en onglerie et prestations esthétiques.",
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
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
