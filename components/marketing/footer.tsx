"use client"

import Link from "next/link"
import { Twitter, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-20 md:py-24 px-6 overflow-hidden">
      {/* Subtle gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-lilac/5 to-transparent opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">Moro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The social stock market for confidence. Trade what matters.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div key={title} variants={fadeUp}>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Connect */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moro. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

