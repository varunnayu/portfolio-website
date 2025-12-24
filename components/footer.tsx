"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            {/* <p className="font-mono text-xl font-bold text-primary mb-2">{"<DEV/>"}</p> */}
            <p className="text-sm text-muted-foreground">© {currentYear} All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
              // { icon: Twitter, href: "#", label: "Twitter" },
              // { icon: Mail, href: "#contact", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground text-center md:text-right"
          >
            {/* <p>Built with Next.js, TailwindCSS & Framer Motion</p> */}
            <p className="mt-1">Designed & Developed with 💙</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
