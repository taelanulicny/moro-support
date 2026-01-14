"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <motion.div
      className={cn("mb-12 md:mb-16 max-w-3xl", alignClasses[align], className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      {eyebrow && (
        <motion.p
          className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium"
          variants={fadeUp}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          align === "center" && "font-serif"
        )}
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
