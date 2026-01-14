import { Variants } from "framer-motion"

/**
 * Motion presets for consistent animations across the site
 * All animations respect prefers-reduced-motion
 */

// Primary easing curve: [0.22, 1, 0.36, 1] (ease-out-cubic)
export const easeOutCubic = [0.22, 1, 0.36, 1] as const

// Spring configuration for interactive elements
export const springConfig = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
}

// Fade up animation (most common)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
}

// Fade in (simpler)
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOutCubic,
    },
  },
}

// Stagger children container
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger children item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutCubic,
    },
  },
}

// Hover scale (subtle)
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: easeOutCubic,
  },
}

// Hover scale down (for buttons)
export const hoverScaleDown = {
  scale: 0.98,
  transition: {
    duration: 0.15,
    ease: easeOutCubic,
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
}

// Scale in (for hero elements)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOutCubic,
    },
  },
}

// Text reveal (for hero headlines)
export const textReveal: Variants = {
  hidden: {
    y: "100%",
  },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic,
      delay: i * 0.1,
    },
  }),
}

// Marquee animation (for logo carousels)
export const marqueeLinear = {
  x: [0, "-50%"],
  transition: {
    duration: 30,
    repeat: Number.POSITIVE_INFINITY,
    ease: "linear",
  },
}

// Helper to respect reduced motion
export const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Conditional animation wrapper
export const conditionalAnimation = <T extends Variants>(
  variants: T,
  enabled: boolean = true
): T => {
  if (!enabled || shouldReduceMotion()) {
    return {
      hidden: {},
      visible: {},
    } as T
  }
  return variants
}
