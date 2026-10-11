"use client"

import { ArrowRight, Check, LockKeyhole, RotateCw } from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { TallySignupButton } from "@/components/site/tally-signup"
import { Container } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { WindowFrame } from "@/components/site/window-frame"

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-40" />
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
      <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs font-medium tracking-wide text-foreground uppercase">
        {siteConfig.version}
      </span>
      <span className="text-muted-foreground">
        Design preview · see what we&apos;re building
      </span>
      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function DesktopPreview() {
  return (
    <WindowFrame
      title="EuryOS · App permissions"
      className="bg-card/90 shadow-2xl shadow-black/10"
      bodyClassName="bg-muted/20 p-0"
    >
      <div className="grid min-h-[280px] grid-cols-[112px_1fr] sm:min-h-[360px] sm:grid-cols-[148px_1fr]">
        <aside className="border-r border-border/70 bg-card/70 p-3 sm:p-4">
          <div className="mb-7 flex items-center gap-2 text-xs font-semibold">
            <span className="size-2 rounded-full bg-success" />
            Apps stay contained
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            {["Overview", "Apps", "Files", "Permissions"].map((item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? "rounded-md bg-foreground px-2.5 py-2 font-medium text-background"
                    : "rounded-md px-2.5 py-2"
                }
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 hidden rounded-md border border-border/70 p-2.5 text-[10px] leading-relaxed text-muted-foreground sm:block">
            A design concept.
            <br />
            Permission boundaries.
          </div>
        </aside>
        <div className="p-4 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
                Permission request
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-2xl">
                Photo Editor wants a file.
              </h3>
            </div>
            <div className="hidden rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success sm:block">
              Your choice
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Chosen file", "After approval"],
              ["Other files", "Blocked"],
              ["Camera", "Blocked"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-lg border border-border/70 bg-card p-3 sm:p-4"
              >
                <div className="font-display text-xl font-semibold sm:text-2xl">
                  {value}
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-border/70 bg-card p-3 sm:p-4">
            <div className="flex items-center justify-between text-xs font-medium">
              <span>Access stays limited</span>
              <span className="text-muted-foreground">Until you allow it</span>
            </div>
            <div className="mt-3 space-y-2.5 text-[10px] text-muted-foreground sm:text-xs">
              {[
                ["Chosen file", "Only after approval"],
                ["Other files", "Blocked"],
                ["Camera & network", "Blocked"],
              ].map(([app, action], index) => (
                <div key={app} className="flex items-center gap-2.5">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-muted text-foreground">
                    {index === 0 ? (
                      <Check className="size-3" />
                    ) : (
                      <LockKeyhole className="size-3" />
                    )}
                  </span>
                  <span>
                    <strong className="font-medium text-foreground">
                      {app}
                    </strong>{" "}
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
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
            <h1 className="mt-7 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
              A familiar computer. <br className="hidden sm:block" />
              Every app in its own space.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              EuryOS is being designed to give each app its own protected space,
              ask before it reaches your files, camera, or network, and contain
              failures so they are less likely to interrupt your work.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <TallySignupButton size="lg" className="h-11 px-5 text-[0.95rem]" />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-5 text-[0.95rem]"
            >
              <a href="#why">See how it works</a>
            </Button>
          </StaggerItem>
          <StaggerItem className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {[
              ["Permission requests", LockKeyhole],
              ["Isolated apps", RotateCw],
            ].map(([label, Icon]) => (
              <span
                key={label as string}
                className="inline-flex items-center gap-1.5"
              >
                <Icon className="size-3.5 text-brand" />
                {label as string}
              </span>
            ))}
          </StaggerItem>
        </Stagger>
      </Container>

      <Reveal delay={0.3} className="relative">
        <Container className="relative mt-14 max-w-5xl sm:mt-16">
          <p className="mb-2 text-center text-xs text-muted-foreground">
            Interface concept · details are still being defined
          </p>
          <DesktopPreview />
        </Container>
      </Reveal>
    </section>
  )
}

export { Hero }
