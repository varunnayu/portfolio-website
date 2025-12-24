"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Sparkles, FileDown } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* ===== Heading ===== */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Sparkles className="h-4 w-4" />
              About Me
            </motion.div>

            {/* <h2 className="text-4xl md:text-5xl font-bold">
              Building the Future of the Web
            </h2> */}
          </div>

          {/* ===== Main Layout ===== */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* ===== LEFT : PHOTO + BUTTON ===== */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Photo */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-3xl blur opacity-75"
                />

                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-card border-2 border-primary/30 shadow-xl">
                  <img
                    src="/p.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* ===== RIGHT : CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
              Hi, I’m 
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500
              bg-[length:200%_200%] animate-gradient
              bg-clip-text text-transparent font-bold">
                 Varun K T
              </span>
              , a motivated and detail-oriented aspiring Data Scientist with a strong foundation in computer science, programming, and modern web development. 
              I have completed my B.Tech in Computer Science, which has given me a solid understanding of core computing concepts, problem-solving, and software development practices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
              Alongside Data Science, I have practical experience in frontend and full-stack development, working with technologies such as Python, React.js, 
              JavaScript, HTML, CSS, and Tailwind CSS. I enjoy transforming complex problems into clean, efficient, and user-friendly digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am passionate about continuous learning, problem-solving, and applying data-driven insights to real-world applications. 
                My goal is to contribute to innovative projects where I can combine data science, analytics, and web technologies to create impactful and scalable solutions.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:scale-105 transition-transform"
              >
                <FileDown className="w-5 h-5" />
               Resume
              </a>
            </motion.div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
