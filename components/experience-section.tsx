"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
{
  title: "Data Science Trainee",
  company: "Innomatics Research Labs",
  period: "Present",
  description:
    "Pursuing advanced training in Data Science with a focus on data preprocessing, statistical analysis, machine learning fundamentals, and real-world problem solving using Python.",
  achievements: [
    "Implemented end-to-end data preprocessing pipelines",
    "Applied statistical methods and ML basics on real datasets",
    "Developed data-driven insights through EDA and visualization",
  ],
}

  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Inc",
  //   period: "2020 - 2022",
  //   description:
  //     "Built scalable web applications using React, Node.js, and PostgreSQL. Collaborated with design team to create responsive user interfaces.",
  //   achievements: ["Shipped 15+ production features", "Improved test coverage to 90%", "Optimized database queries"],
  // },
  // {
  //   title: "Frontend Developer",
  //   company: "Creative Studio",
  //   period: "2019 - 2020",
  //   description:
  //     "Developed interactive web experiences using modern JavaScript frameworks. Worked closely with UX designers to implement pixel-perfect designs.",
  //   achievements: [
  //     "Created reusable component library",
  //     "Achieved 95+ Lighthouse scores",
  //     "Reduced bundle size by 40%",
  //   ],
  // },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Briefcase className="h-4 w-4" />
              Experience
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              A timeline of growth, innovation, and continuous learning in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block animate-pulse-glow" />

                  <div className="md:ml-20 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono px-3 py-1 rounded-full bg-secondary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
