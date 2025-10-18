"use client"

import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiAstro, SiMysql, SiTailwindcss } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/lib/language-provider"

const skillCategories = {
  frontend: [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: 95 },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 85 },
    { name: "React", icon: FaReact, color: "text-cyan-400", level: 88 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", level: 82 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", level: 90 },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", level: 85 },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500", level: 80 },
    { name: "Astro", icon: SiAstro, color: "text-orange-500", level: 75 },
  ],
  backend: [
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: 70 },
    { name: "Python", icon: FaPython, color: "text-blue-400", level: 65 },
  ],
}

export function SkillsSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="habilidades" className="py-20 px-6 bg-secondary/30 relative">
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.skills.title} <span className="text-primary">{t.skills.titleHighlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.skills.subtitle}</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card border border-border">
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.skills.frontend}
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.skills.tools}
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.skills.backend}
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 group glow-cyan"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className={`w-8 h-8 ${skill.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-foreground">{skill.name}</span>
                            <span className="text-sm text-primary font-mono">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
