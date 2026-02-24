"use client"

import React, { useState, useEffect, useCallback } from "react"
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-provider"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      longDescription: t.projects.project1.longDescription,
      technologies: ["React", "JavaScript", "Git", "UI/UX"],
      image: "/projects/distriluna.png",
      github: "https://github.com/JFerxx12/Menu-Distriluna",
      demo: "https://menu-distriluna.vercel.app/",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      longDescription: t.projects.project2.longDescription,
      technologies: ["Next.js", "React", "TailwindCSS", "WhatsApp API"],
      image: "/projects/finca.png",
      github: "https://github.com/jhojax12866/MenuFincaRefugio",
      demo: "https://v0-el-refugio-website.vercel.app/",
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      longDescription: t.projects.project3.longDescription,
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      image: "/projects/teccel2.png",
      github: "https://github.com/jhojax12866",
      demo: "https://www.teccelmocoa.com/",
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      longDescription: t.projects.project4.longDescription,
      technologies: ["HTML 5", "CSS", "JavaScript", "Responsive"],
      image: "/projects/hotel.png",
      github: "https://github.com/jhojax12866/Fron-Hotel-Darlin",
      demo: null,
    },
    {
      title: t.projects.project5.title,
      description: t.projects.project5.description,
      longDescription: t.projects.project5.longDescription,
      technologies: ["React", "Networking", "VLSM", "Subnetting"],
      image: "/projects/vlsm.png",
      github: "https://github.com/jhojax12866/VLSM_Calculator_V2",
      demo: "https://v0-electron-vls-m-api.vercel.app/",
    },
    {
      title: t.projects.project6.title,
      description: t.projects.project6.description,
      longDescription: t.projects.project6.longDescription,
      technologies: ["Next.js", "TailwindCSS", "React", "SEO"],
      image: "/projects/code.png",
      github: "https://github.com/jhojax12866/CodeStart",
      demo: "https://code-start-gilt.vercel.app/",
    },
  ]

  const totalSlides = Math.ceil(projects.length / 3)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleProjects = () => {
    const start = current * 3
    return projects.slice(start, start + 3)
  }

  return (
    <section id="proyectos" className="py-20 px-6 bg-secondary/30 relative">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.projects.title} <span className="text-primary">{t.projects.titleHighlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.projects.subtitle}</p>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false) }}
            className="p-3 rounded-full bg-card border-2 border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 glow-cyan"
            aria-label="Previous projects"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-3">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-primary glow-cyan" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false) }}
            className="p-3 rounded-full bg-card border-2 border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 glow-cyan"
            aria-label="Next projects"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Projects Grid with transition */}
        <div className="relative overflow-hidden">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleProjects().map((project, index) => (
              <Dialog key={`${current}-${index}`}>
                <DialogTrigger asChild>
                  <div
                    className="bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 group cursor-pointer glow-cyan opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-sm">
                        <span className="text-foreground font-bold text-lg bg-card/80 px-4 py-2 rounded-lg border border-primary/50">
                          {t.projects.viewDetails}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30 glow-cyan">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="relative overflow-hidden rounded-xl aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">{t.projects.fullDescription}</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-3">{t.projects.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all glow-cyan"
                      >
                        <FiGithub className="w-5 h-5" />
                        <span>{t.projects.viewCode}</span>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Project counter */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {t.projects.showing} {current * 3 + 1}-{Math.min((current + 1) * 3, projects.length)} {t.projects.of} {projects.length} {t.projects.projectsLabel}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/jhojax12866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300 border-2 border-primary/30 hover:border-primary glow-purple"
          >
            <FiGithub className="w-5 h-5" />
            <span>{t.projects.viewMore}</span>
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
