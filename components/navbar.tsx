"use client"
import { FiMenu, FiGlobe, FiDownload } from "react-icons/fi"
import { useLanguage } from "@/lib/language-provider"
import { translations } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const languages = [
    { code: "es" as const, name: "Español", flag: "🇪🇸" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "pt" as const, name: "Português", flag: "🇧🇷" },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV_Dev_Johan_Burbano.pdf"
    link.download = "CV_Dev_Johan_Burbano.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu button and logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-300 hover:scale-105 glow-cyan"
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">
                <span className="text-foreground">Johan</span>
                <span className="text-primary ml-2">Burbano</span>
              </h1>
            </div>
          </div>

          {/* Right: Download CV and language selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-primary/20"
              aria-label="Download CV"
            >
              <FiDownload className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">CV</span>
            </button>

            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  aria-label="Select language"
                >
                  <FiGlobe className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? "bg-primary/10 text-primary" : ""}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
