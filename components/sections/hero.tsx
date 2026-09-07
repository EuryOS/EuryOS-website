"use client"

import {
  ArrowRight,
  Check,
  LockKeyhole,
  RotateCw,
  ShieldCheck,
} from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
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
        2027 preview · see what we&apos;re building
      </span>
      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function DesktopPreview() {
  return (
    <WindowFrame
      title="EuryOS · Overview"
      className="bg-card/90 shadow-2xl shadow-black/10"
      bodyClassName="bg-muted/20 p-0"
    >
      <div className="grid min-h-[280px] grid-cols-[112px_1fr] sm:min-h-[360px] sm:grid-cols-[148px_1fr]">
        <aside className="border-r border-border/70 bg-card/70 p-3 sm:p-4">
          <div className="mb-7 flex items-center gap-2 text-xs font-semibold">
            <span className="size-2 rounded-full bg-success" />
            System healthy
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
            No hidden access.
            <br />
            Every request is visible.
          </div>
        </aside>
        <div className="p-4 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
                Good morning
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-2xl">
                Everything is in its place.
              </h3>
            </div>
            <div className="hidden rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success sm:block">
              Protected
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["3", "apps running"],
              ["0", "threats found"],
              ["100%", "core verified"],
            ].map(([value, label]) => (
              <div
                key={label}
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
              <span>Recent activity</span>
              <span className="text-muted-foreground">View all</span>
            </div>
            <div className="mt-3 space-y-2.5 text-[10px] text-muted-foreground sm:text-xs">
              {[
                ["Photo Editor", "File access approved"],
                ["System", "Driver restarted safely"],
                ["Browser", "Network access blocked"],
              ].map(([app, action], index) => (
                <div key={action} className="flex items-center gap-2.5">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-muted text-foreground">
                    {index === 1 ? (
                      <RotateCw className="size-3" />
                    ) : index === 2 ? (
                      <LockKeyhole className="size-3" />
                    ) : (
                      <Check className="size-3" />
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
              Security you can feel. <br className="hidden sm:block" />{" "}
              Familiarity you don&apos;t have to learn.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              EuryOS gives every app its own protected space, contains failures
              before they spread, and keeps your work moving. Built from the
              foundation up for 2027 and beyond.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-5 text-[0.95rem]">
              <a href={siteConfig.contact}>
                Request early access
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
          <StaggerItem className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {[
              ["Permission-first", LockKeyhole],
              ["Crash-contained", RotateCw],
              ["Verified core", ShieldCheck],
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
          <DesktopPreview />
        </Container>
      </Reveal>
    </section>
  )
}

export { Hero }
