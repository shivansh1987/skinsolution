"use client"

import { useEffect, useState } from "react"
import { Menu, Phone, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 py-2" : "py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-extrabold leading-none tracking-tight">
            Skin Solutions
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Kanpur
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:8853436234"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            88534 36234
          </a>
          <Button
            className="rounded-full font-semibold"
            render={<a href="#contact">Book Appointment</a>}
          />
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl border border-border/60 p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full rounded-full font-semibold"
              render={
                <a href="#contact" onClick={() => setOpen(false)}>
                  Book Appointment
                </a>
              }
            />
          </div>
        </div>
      )}
    </header>
  )
}
