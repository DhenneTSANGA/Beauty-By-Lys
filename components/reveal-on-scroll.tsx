"use client"

import { useEffect, useState } from "react"

export function RevealOnScroll({ 
  children, 
  animation = "animate-reveal-up",
  delay = "",
  className = "" 
}: { 
  children: React.ReactNode, 
  animation?: string,
  delay?: string,
  className?: string 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return (
    <div
      ref={setRef}
      className={`${className} ${isVisible ? `${animation} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  )
}
