"use client"

import { useEffect, useState } from "react"
import { FiArrowDown, FiCode } from "react-icons/fi"
import { useLanguage } from "@/lib/language-provider"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const fullText = t.hero.role

  useEffect(() => {
    setMounted(true)

    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullText])

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 glow-cyan animate-pulse">
            <FiCode className="w-12 h-12 text-primary" />
          </div>
        </div>

        <div className="mb-6">
          <span className="text-primary text-lg font-mono px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            {`<${t.hero.greeting} />`}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Johan Fernando{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent animate-pulse">
            Burbano
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 text-balance font-mono h-12">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          {t.hero.description} <span className="text-primary font-semibold">React</span>,{" "}
          <span className="text-primary font-semibold">Next.js</span> {t.hero.and}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#proyectos"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-cyan relative overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contacto"
            className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300 hover:scale-105 border-2 border-primary/30 hover:border-primary relative overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta2}</span>
          </a>
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce pulse-glow"
      >
        <FiArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
