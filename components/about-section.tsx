"use client"

import { useLanguage } from "@/lib/language-provider"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              {t.about.p1} <span className="text-primary font-semibold">React</span> {t.about.p1End}
            </p>

            <p className="text-lg">{t.about.p2}</p>

            <p className="text-lg">
              {t.about.p3} <span className="text-primary font-semibold">{t.about.p3Mid}</span> {t.about.p3End}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
