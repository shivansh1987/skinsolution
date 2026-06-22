import { Camera, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
]

const services = [
  "Hair Loss Treatment",
  "Acne & Scar Treatment",
  "Laser Treatments",
  "Chemical Peels",
  "Hydra Facial",
  "General Dermatology",
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent text-accent-foreground">
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-extrabold">Skin Solutions</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-accent-foreground/70">
            Trusted dermatology and trichology clinic in Kanpur, delivering premium,
            evidence-based skin and hair care.
          </p>
          <div className="mt-5 flex gap-3">
            {[Camera, MessageCircle, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-card/10 text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-accent-foreground/70 transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-accent-foreground/70 transition-colors hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm text-accent-foreground/70">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>
                113/206, Near Pind Balluchi, Khalasi Line, Swaroop Nagar, Kanpur, UP 208002
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <a href="tel:8853436234" className="hover:text-primary">
                88534 36234
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card/10 py-6">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-accent-foreground/60 sm:px-6">
          © {new Date().getFullYear()} Skin Solutions, Kanpur. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
