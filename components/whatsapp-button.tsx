"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import Image from "next/image"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "24166581458"
  const message = "Bonjour Beauty by Lys, je souhaiterais obtenir des informations sur vos prestations."

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-2 w-[calc(100vw-3rem)] max-w-[320px] overflow-hidden rounded-2xl bg-card shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 bg-white">
                  <Image
                    src="/vitrine.png"
                    alt="Vitrine du Glam Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">Beauty by Lys</p>
                  <p className="text-[10px] opacity-90">Répond généralement rapidement</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-black/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#e5ddd5] dark:bg-zinc-900/50">
              <div className="relative rounded-lg rounded-tl-none bg-white p-3 text-sm text-zinc-800 shadow-sm dark:bg-zinc-800 dark:text-zinc-200">
                <p>
                  Bonjour ! 👋 <br />
                  Comment pouvons-nous vous aider aujourd&apos;hui ?
                </p>
                <span className="mt-1 block text-[10px] text-zinc-400">10:00</span>
                {/* Petit triangle pour la bulle */}
                <div className="absolute -left-2 top-0 h-0 w-0 border-t-[10px] border-t-white dark:border-t-zinc-800 border-l-[10px] border-l-transparent" />
              </div>
            </div>

            {/* Footer / Action */}
            <div className="bg-card p-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Discuter sur WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-shadow hover:shadow-2xl touch-manipulation"
        aria-label="Nous contacter sur WhatsApp"
      >
        {/* Animation de vague/pulsation */}
        <motion.div
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        />
        <svg 
          viewBox="0 0 24 24" 
          className="h-8 w-8 fill-current" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.625 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.button>
    </div>
  )
}
