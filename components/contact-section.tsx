"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-secondary/30"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <MessageSquare className="h-4 w-4" />
              Contact
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Reach out directly — I’d love to connect.
            </p>
          </div>

          {/* Centered Email Card */}
          <motion.a
            href="mailto:varunsantu2002@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer max-w-md mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    varunsantu2002@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
