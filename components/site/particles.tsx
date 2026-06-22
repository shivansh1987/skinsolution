"use client"

import { motion } from "motion/react"
import { useEffect, useMemo, useState } from "react"

export function Particles({ count = 18 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 8,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
      })),
    [count],
  )

  if (!mounted) return null

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-primary/30 blur-[1px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function EnergyStream() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-stream absolute left-1/2 top-0 h-[140%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent blur-[2px]" />
      <div
        className="animate-stream absolute left-[18%] top-0 h-[140%] w-[1px] bg-gradient-to-b from-transparent via-secondary/40 to-transparent blur-[1px]"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="animate-stream absolute right-[20%] top-0 h-[140%] w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent blur-[1px]"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}
