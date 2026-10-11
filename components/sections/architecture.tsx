import { Boxes, RotateCw, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border/70 bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {children}
    </span>
  )
}

function Band({
  label,
  sublabel,
  chips,
  className,
  highlight,
}: {
  label: string
  sublabel?: string
  chips: string[]
  className?: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-lg border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between",
        highlight
          ? "border-foreground/25 bg-muted"
          : "border-border/70 bg-background",
        className
      )}
    >
      <div className="flex flex-col">
        <span
          className={cn(
            "flex items-center gap-2 text-sm font-semibold",
            highlight && "text-foreground"
          )}
        >
          {highlight ? (
            <span
              className="size-2 rounded-full bg-foreground"
              aria-hidden="true"
            />
          ) : null}
          {label}
        </span>
        {sublabel ? (
          <span className="text-xs text-muted-foreground">{sublabel}</span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </div>
  )
}

function StackDiagram() {
  return (
    <div className="rounded-lg border border-border/70 bg-card p-3 shadow-sm sm:p-4">
      <Stagger className="space-y-2">
        <StaggerItem>
          <Band
            label="Your apps"
            sublabel="Each in its own protected space"
            chips={["Browser", "Mail", "Photos"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="System features"
            sublabel="Files, network, display, accounts"
            chips={["Files", "Network", "Display"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="Device drivers"
            sublabel="Hardware services, design details in progress"
            chips={["Graphics", "Wi-Fi", "Storage"]}
          />
        </StaggerItem>

        <StaggerItem>
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-x-2 border-t border-dashed border-border" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-2 top-1/2 h-0"
            >
              <span className="animate-checkpoint absolute top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
            </div>
            <span className="relative rounded-md border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
              requests checked at clear boundaries
            </span>
          </div>
        </StaggerItem>

        <StaggerItem>
          <Band
            highlight
            label="EuryOS core"
            sublabel="Verification approach still being defined"
            chips={["trusted core"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="Your device"
            sublabel="Target hardware is still being defined"
            chips={["hardware plans in progress"]}
          />
        </StaggerItem>
      </Stagger>
    </div>
  )
}

const supports = [
  {
    icon: ShieldCheck,
    title: "Keep the trusted core small",
    body: "EuryOS is designed around a small trusted core. The verification approach and results are still being defined.",
  },
  {
    icon: RotateCw,
    title: "Plan for recovery",
    body: "Keeping components separate is intended to make it possible to recover one part without restarting the whole system. The recovery details are still being defined.",
  },
  {
    icon: Boxes,
    title: "Separate system components",
    body: "The architecture aims to give apps and system services clear boundaries, limiting how far a fault can spread.",
  },
]

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative border-t border-border/60 bg-muted/20 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Trusted core"
            title="A small foundation. Clear boundaries above it."
            description="EuryOS is planned around a compact trusted core, with apps and system components separated by explicit boundaries. Implementation and verification details are still being defined."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <StackDiagram />
          </Reveal>
          <Stagger className="flex flex-col justify-center gap-8 lg:col-span-2">
            {supports.map((s) => (
              <StaggerItem key={s.title} className="flex gap-4">
                <div className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-foreground">
                  <s.icon className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}

export { Architecture }
