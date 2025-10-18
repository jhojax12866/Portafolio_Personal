"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language } from "@/lib/i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("language", language)
  }, [language, mounted])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  const t = translations[language]

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
