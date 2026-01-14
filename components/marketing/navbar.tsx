"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300 ${
        isScrolled
          ? "bg-background/40 backdrop-blur-xl border border-border rounded-full shadow-lg"
          : "bg-background/20 backdrop-blur-md border border-border/50 rounded-full"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold text-foreground font-serif"
          >
            Moro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 relative">
            <Link
              href="#features"
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              How it works
            </Link>
            <Link
              href="#faq"
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              FAQ
            </Link>
            <Button
              onClick={scrollToWaitlist}
              size="sm"
              className="ml-2 rounded-full"
            >
              Join waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-2 mb-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-2">
              <Link
                href="#features"
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="#faq"
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button
                onClick={scrollToWaitlist}
                className="w-full mt-2 rounded-lg"
              >
                Join waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

