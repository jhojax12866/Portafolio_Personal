"use client"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-provider"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      longDescription: t.projects.project1.longDescription,
      technologies: ["React", "JavaScript", "Git", "API Integration"],
      image: "/inventory-management-dashboard.jpg",
      github: "https://github.com/jhojax12866",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      longDescription: t.projects.project2.longDescription,
      technologies: ["AppSheet", "Mobile Design", "UX/UI"],
      image: "/mobile-inventory-app.jpg",
      github: "https://github.com/jhojax12866",
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      longDescription: t.projects.project3.longDescription,
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      image: "/modern-portfolio-website.jpg",
      github: "https://github.com/jhojax12866",
    },
  ]

  return (
    <section id="proyectos" className="py-20 px-6 bg-secondary/30 relative">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.projects.title} <span className="text-primary">{t.projects.titleHighlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.projects.subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 group cursor-pointer glow-cyan">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-sm">
                      <span className="text-white font-bold text-lg">{t.projects.viewDetails}</span>
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

        <div className="mt-12 text-center">
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
