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
  const [isClient, setIsClient] = useState(false)

  // 🧠 Se asegura de que solo se ejecute en cliente (no durante prerender)
  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem("language") as Language | null
    if (saved) setLanguage(saved)
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language)
    }
  }, [language, isClient])

  const t = translations[language]

  // 🔒 Previene errores en prerender
  if (!isClient) {
    return (
      <LanguageContext.Provider
        value={{
          language,
          setLanguage: () => {},
          t: translations.es,
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // 🚨 En lugar de lanzar error, retorna un fallback seguro
    return {
      language: "es" as Language,
      setLanguage: () => {},
      t: translations.es,
    }
  }
  return context
}
