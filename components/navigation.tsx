"use client"

import { useState, useEffect } from "react"
import { FiHome, FiUser, FiCode, FiBriefcase, FiBook, FiAward, FiFolderMinus, FiMail, FiX } from "react-icons/fi"
import { useLanguage } from "@/lib/language-provider"
import { translations } from "@/lib/i18n"

interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("inicio")
  const { language } = useLanguage()
  const t = translations[language]

  const navItems = [
    { id: "inicio", label: t.nav.home, icon: FiHome },
    { id: "sobre-mi", label: t.nav.about, icon: FiUser },
    { id: "habilidades", label: t.nav.skills, icon: FiCode },
    { id: "experiencia", label: t.nav.experience, icon: FiBriefcase },
    { id: "educacion", label: t.nav.education, icon: FiBook },
    { id: "certificados", label: t.nav.certificates, icon: FiAward },
    { id: "proyectos", label: t.nav.projects, icon: FiFolderMinus },
    { id: "contacto", label: t.nav.contact, icon: FiMail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      onClose()
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-card border-r border-border flex flex-col justify-between p-8 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-300 lg:hidden"
          aria-label="Close menu"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div>
          <div className="mb-12 mt-8 lg:mt-0">
            <h1 className="text-2xl font-bold text-foreground mb-1">Johan Fernando</h1>
            <h2 className="text-2xl font-bold text-primary mb-2">Burbano</h2>
            <p className="text-sm text-muted-foreground">{t.hero.role}</p>
          </div>

          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/jhojax12866"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jhojan-fernando-burbano-6968ab324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  )
}
