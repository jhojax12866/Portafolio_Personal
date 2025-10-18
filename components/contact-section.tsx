"use client"
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi"
import { useLanguage } from "@/lib/language-provider"
import { translations } from "@/lib/i18n"

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contacto" className="py-20 px-6 pb-32 lg:pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.contact.title.split("").map((char, i) => (
            <span key={i} className={char === "o" ? "text-primary" : ""}>
              {char}
            </span>
          ))}
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:Jhojanfer12@gmail.com"
            className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:scale-105"
          >
            <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors glow-cyan">
              <FiMail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium">Jhojanfer12@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:3224230731"
            className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:scale-105"
          >
            <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors glow-cyan">
              <FiPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {language === "es" ? "Teléfono" : language === "en" ? "Phone" : "Telefone"}
              </p>
              <p className="font-medium">322 423 0731</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jhojax12866"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:scale-105"
          >
            <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors glow-cyan">
              <FiGithub className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">GitHub</p>
              <p className="font-medium">@jhojax12866</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jhojan-fernando-burbano-6968ab324/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:scale-105"
          >
            <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors glow-cyan">
              <FiLinkedin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="font-medium">Johan Fernando Burbano</p>
            </div>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            © 2025 Johan Fernando Burbano.{" "}
            {language === "es"
              ? "Todos los derechos reservados"
              : language === "en"
                ? "All rights reserved"
                : "Todos os direitos reservados"}
            .
          </p>
        </div>
      </div>
    </section>
  )
}
