import { LockKeyhole, PanelsTopLeft, RotateCw } from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { SelfHealing } from "@/components/sections/self-healing"

const steps = [
  {
    number: "01",
    icon: LockKeyhole,
    title: "You decide what an app can reach",
    body: "When an app requests a file, camera, or network access, EuryOS is designed to make that request clear and let you choose.",
    detail: "A request you can understand",
  },
  {
    number: "02",
    icon: PanelsTopLeft,
    title: "Apps stay in separate spaces",
    body: "Each app is intended to run with a defined boundary, keeping its access to the rest of your system limited.",
    detail: "A boundary around each app",
  },
  {
    number: "03",
    icon: RotateCw,
    title: "Failures stay contained",
    body: "The system is being designed so a problem in one isolated component can be recovered without taking every other part with it.",
    detail: "A contained recovery path",
  },
]

function Features() {
  return (
    <section
      id="why"
      className="relative border-t border-border/60 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How EuryOS is designed"
            title="A clear path from permission to recovery."
            description="The design starts with a simple idea: make app access visible, keep boundaries between parts, and plan for recovery when something goes wrong."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <article className="flex h-full min-h-64 flex-col rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-brand">
                    {step.number}
                  </span>
                  <step.icon
                    aria-hidden="true"
                    className="size-4 text-muted-foreground"
                  />
                </div>
                <h3 className="mt-7 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
                <div className="mt-auto pt-8">
                  {index === 2 ? (
                    <div className="rounded-lg border border-border/70 bg-background p-3 text-xs">
                      <p className="mb-3 font-medium text-muted-foreground">
                        Recovery concept
                      </p>
                      <SelfHealing />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background px-3 py-3 text-xs text-muted-foreground">
                      <span className="size-2 rounded-full bg-brand" />
                      {step.detail}
                    </div>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Features }
