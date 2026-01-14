"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { fadeUp, hoverScale } from "@/lib/motion"

interface BentoTileProps {
  children: ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  delay?: number
}

export function BentoTile({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}: BentoTileProps) {
  const colSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  }

  const rowSpanClasses = {
    1: "md:row-span-1",
    2: "md:row-span-2",
  }

  return (
    <motion.div
      className={cn(
        "rounded-xl border bg-card p-6 md:p-8 transition-all duration-200 hover:border-primary/20",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      transition={{ delay }}
      whileHover={hoverScale}
    >
      {children}
    </motion.div>
  )
}
