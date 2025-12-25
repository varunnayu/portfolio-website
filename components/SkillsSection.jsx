"use client"

import { motion } from "framer-motion"

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 5 },
      { name: "CSS / Tailwind", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "React", level: 4 },
      { name: "Next.js", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Express", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 4 },
      { name: "Figma", level: 3 },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

const LevelDots = ({ level }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: i * 0.05 }}
        viewport={{ once: true }}
        className={`h-2.5 w-2.5 rounded-full ${
          i < level ? "bg-primary" : "bg-muted"
        }`}
      />
    ))}
  </div>
)

export default function SkillsSectionAlt() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Skills & Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Technologies I use to build clean, scalable, and modern applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card/70 backdrop-blur p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-center">
                {group.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between rounded-xl border bg-background px-4 py-3"
                  >
                    <span className="text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                    <LevelDots level={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
