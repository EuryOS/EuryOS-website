import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Architecture } from "@/components/sections/architecture"
import { Platform } from "@/components/sections/platform"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Architecture />
        <Platform />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
