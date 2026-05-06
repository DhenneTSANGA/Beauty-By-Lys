"use client"

import { useEffect, useState } from "react"

export function RevealOnScroll({ 
  children, 
  animation = "animate-reveal-up",
  delay = "",
  className = "",
  threshold = 0.1,
  once = false // Si false, l'animation se répète à chaque passage
}: { 
  children: React.ReactNode, 
  animation?: string,
  delay?: string,
  className?: string,
  threshold?: number,
  once?: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, once, threshold])

  return (
    <div
      ref={setRef}
      className={`${className} transition-opacity duration-500 ${isVisible ? `${animation} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  )
}
