"use client"

import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { ScreenshotPlaceholder } from "@/components/site/screenshot-placeholder"

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 42% at 50% 38%, var(--background) 0%, color-mix(in oklch, var(--background) 88%, transparent) 44%, transparent 76%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}

function Pill() {
  return (
    <a
      href="#why"
      className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm shadow-sm transition-colors hover:bg-muted"
    >
      <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs font-medium text-foreground">
        v{siteConfig.version}
      </span>
      <span className="text-muted-foreground">Meet EuryOS - see what makes it different</span>
      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <HeroBackground />
      <Container className="relative">
        <Stagger
          trigger="mount"
          className="flex flex-col items-center text-center"
        >
          <StaggerItem>
            <Pill />
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Secure by design.
              <br className="hidden sm:block" /> Familiar by default.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              EuryOS is a new kind of operating system that protects everything
              you do: keeping apps in their lane, threats locked out, and your
              work running smoothly.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-5 text-[0.95rem]">
              <a href={siteConfig.contact}>
                Get in touch
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-5 text-[0.95rem]"
            >
              <a href="#why">See how it works</a>
            </Button>
          </StaggerItem>
        </Stagger>
      </Container>

      <Reveal delay={0.3} className="relative">
        <Container className="relative mt-14 max-w-5xl sm:mt-16">
          <ScreenshotPlaceholder label="EuryOS desktop" className="shadow-lg" />
        </Container>
      </Reveal>
    </section>
  )
}

export { Hero }
