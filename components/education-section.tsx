"use client"

import { FiBook } from "react-icons/fi"
import { useLanguage } from "@/lib/language-provider"

export function EducationSection() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t.education.degree1,
      institution: t.education.institution1,
      location: t.education.location1,
      period: t.education.period1,
      status: t.education.inProgress,
    },
    {
      degree: t.education.degree2,
      institution: t.education.institution2,
      location: t.education.location2,
      period: t.education.period2,
      status: t.education.completed,
    },
    {
      degree: t.education.degree3,
      institution: t.education.institution3,
      location: t.education.location3,
      period: t.education.period3,
      status: t.education.completed,
    },
  ]

  return (
    <section id="educacion" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{t.education.title}</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <FiBook className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === t.education.inProgress
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
