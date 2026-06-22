import Image from "next/image"
import { CheckCircle2, FlaskConical, HeartHandshake, Lock, Microscope, UserCog } from "lucide-react"
import { Reveal, RevealStagger, StaggerItem } from "./reveal"

const highlights = [
  { icon: UserCog, text: "Personalized treatment plans" },
  { icon: Microscope, text: "Advanced dermatological procedures" },
  { icon: HeartHandshake, text: "Patient-first approach" },
  { icon: Lock, text: "Confidential consultations" },
  { icon: FlaskConical, text: "Modern technology" },
  { icon: CheckCircle2, text: "Evidence-based care" },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="glow-shadow relative overflow-hidden rounded-[2rem] border border-border/60">
            <Image
              src="/patient-experience.png"
              alt="Dermatologist consulting a patient at Skin Solutions clinic in Kanpur"
              width={640}
              height={560}
              className="h-[440px] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-6 rounded-2xl border border-border/60 p-5 shadow-lg">
            <p className="font-heading text-3xl font-extrabold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years of trusted care</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About Skin Solutions
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Expert Skin &amp; Hair Care Backed By Science
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Skin Solutions provides evidence-based dermatology and trichology treatments
              designed to address skin diseases, hair loss, alopecia, pigmentation, acne,
              scars, and aesthetic concerns. Every plan is tailored to your skin and goals.
            </p>
          </Reveal>

          <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <StaggerItem
                key={h.text}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{h.text}</span>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
