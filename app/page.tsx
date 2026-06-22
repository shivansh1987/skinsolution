import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { WhyChoose } from "@/components/site/why-choose"
import { Process } from "@/components/site/process"
import { Testimonials } from "@/components/site/testimonials"
import { Gallery } from "@/components/site/gallery"
import { FAQ } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
