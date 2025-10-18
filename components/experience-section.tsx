"use client"

import { FiBriefcase, FiCalendar } from "react-icons/fi"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-provider"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experience.job1.title,
      company: t.experience.job1.company,
      location: t.experience.job1.location,
      period: t.experience.job1.period,
      description: [
        t.experience.job1.desc1,
        t.experience.job1.desc2,
        t.experience.job1.desc3,
        t.experience.job1.desc4,
        t.experience.job1.desc5,
      ],
    },
    {
      title: t.experience.job2.title,
      company: t.experience.job2.company,
      location: t.experience.job2.location,
      period: t.experience.job2.period,
      description: [t.experience.job2.desc1, t.experience.job2.desc2, t.experience.job2.desc3],
    },
  ]

  return (
    <section id="experiencia" className="py-20 px-6 relative">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-chart-3/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.experience.title} <span className="text-primary">{t.experience.titleHighlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.experience.subtitle}</p>

        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden glow-cyan"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <FiBriefcase className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <FiCalendar className="w-4 h-4" />
                    <span className="text-sm font-mono">{exp.period}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <ul className="space-y-3 mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1.5 font-bold">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
