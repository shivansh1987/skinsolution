"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { Reveal } from "./reveal"

const images = [
  { src: "/clinic-interior.png", label: "Clinic Interior", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/consultation-room.png", label: "Consultation Room", span: "" },
  { src: "/treatment-area.png", label: "Treatment Area", span: "" },
  { src: "/equipment.png", label: "Equipment", span: "" },
  { src: "/hair-analysis.png", label: "Patient Experience", span: "" },
]

export function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Clinic Gallery
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Step Inside Skin Solutions
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${img.span}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-accent-foreground">
                {img.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-accent/80 p-4 backdrop-blur-md"
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active || "/placeholder.svg"}
                alt="Skin Solutions clinic"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
