"use client"

import { FiAward, FiExternalLink } from "react-icons/fi"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useLanguage } from "@/lib/language-provider"

export function CertificatesSection() {
  const { t } = useLanguage()

  const certificates = [
    {
      title: t.certificates.cert1.title,
      issuer: t.certificates.cert1.issuer,
      description: t.certificates.cert1.description,
      details: t.certificates.cert1.details,
    },
    {
      title: t.certificates.cert2.title,
      issuer: t.certificates.cert2.issuer,
      description: t.certificates.cert2.description,
      details: t.certificates.cert2.details,
    },
    {
      title: t.certificates.cert3.title,
      issuer: t.certificates.cert3.issuer,
      description: t.certificates.cert3.description,
      details: t.certificates.cert3.details,
    },
    {
      title: t.certificates.cert4.title,
      issuer: t.certificates.cert4.issuer,
      description: t.certificates.cert4.description,
      details: t.certificates.cert4.details,
    },
    {
      title: t.certificates.cert5.title,
      issuer: t.certificates.cert5.issuer,
      description: t.certificates.cert5.description,
      details: t.certificates.cert5.details,
    },
  ]

  return (
    <section id="certificados" className="py-20 px-6 relative">
      <div className="absolute top-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.certificates.title} <span className="text-primary">{t.certificates.titleHighlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.certificates.subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 group cursor-pointer glow-purple">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors pulse-glow">
                      <FiAward className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-card border-2 border-primary/30 glow-cyan">
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.details}</p>
                  <div className="pt-2">
                    <span className="text-xs text-primary font-semibold">
                      {t.certificates.issuer} {cert.issuer}
                    </span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/jhojan-fernando-burbano-6968ab324/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg"
          >
            <span>{t.certificates.viewAll}</span>
            <FiExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
