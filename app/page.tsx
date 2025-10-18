"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Navbar } from "@/components/navbar"
import TechBackground from "@/components/tech-background"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative">
      <TechBackground />
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative z-10 pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
