"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Rocket } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online demo shopping platform with real-time inventory management, payment and responsive.",
    image: "/ecom.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    // github: "#",
    demo: "https://varunnayu.github.io/clothing.in/index.html",
  },
  {
    title: "Games Hub",
    description:
      "A site for playing various games online with computer for free built using a JavaScript and HTML.",
    image: "/games.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    // github: "#",
    demo: "https://varunnayu.github.io/games/",
  },
  {
    title: "Real-Time Budget Tracker",
    description:
      "Live data visualization platform with customizable widgets, real-time updates, and comprehensive reporting features.",
    image: "/budget.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    // github: "#",
    demo: "https://varunnayu.github.io/budget/",
  },
  {
    title: "Digital Slam Book",
    description:
      "A Digital Slam Book application that allows users to create and share personalized slam books online and collect responses from friends.",
    image: "/slam-book.jpg",
    tags: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    // github: "#",
    demo: "https://varunnayu.github.io/sa/",
  },
  {
    title: "Personal Valut/Password Manager",
    description:
      "A secure password manager application that allows users to store and manage their passwords and sensitive information with encryption and user authentication.",
    image: "/valut.jpg",
    tags: ["JavaScript", "React", "Tailwind CSS", "Firebase"],
    // github: "#",
    demo: "https://classy-phi.vercel.app/login.html",
  },
  {
    title: "Academic certificate issued and verification using Blockchain",
    description:
      "A blockchain-based system for issuing and verifying academic certificates, ensuring authenticity and preventing fraud.",
    image: "/certificate.jpg",
    tags: ["Solidity", "Ethereum", "Blockchain", "React"],
    // github: "#",
    demo: "https://certify-chain-jet.vercel.app/",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Rocket className="h-4 w-4" />
              Projects
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              A showcase of projects that blend innovation, design, and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                className="cursor-pointer"
              >
                <Card
                  className="group hover:border-primary/50 transition-all overflow-hidden h-full flex flex-col data-[active=true]:border-primary/50"
                  data-active={activeCard === index}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 group-data-[active=true]:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300 flex items-end p-4 gap-2 ${
                        activeCard === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
                      }`}
                    >
                      {/* <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button> */}
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-primary group-data-[active=true]:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
