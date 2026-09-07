import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"

const priorities = [
  {
    rank: "01",
    name: "Security",
    gloss:
      "Your safety comes first, even when speed or convenience would be easier.",
  },
  {
    rank: "02",
    name: "Reliability",
    gloss:
      "Contain problems and keep your work intact while the system recovers.",
  },
  {
    rank: "03",
    name: "Performance",
    gloss: "Fast and responsive, everywhere it counts.",
  },
  {
    rank: "04",
    name: "Scalability",
    gloss: "One operating system, from tiny devices to powerful machines.",
  },
  {
    rank: "05",
    name: "Simplicity",
    gloss: "Fewer moving parts means less that can ever go wrong.",
  },
  {
    rank: "06",
    name: "Compatibility",
    gloss: "Keep the interface familiar while the foundation moves forward.",
  },
]

function Principles() {
  return (
    <section
      id="values"
      className="relative border-t border-border/60 bg-muted/20 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our priorities"
            title="How we make trade-offs."
            description="When priorities compete, we use this order: protect your data first, keep the system running, then improve speed, reach, simplicity, and compatibility."
            className="mx-auto items-center"
          />
        </Reveal>

        {/* The priority chain */}
        <Stagger className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {priorities.map((p, i) => (
            <StaggerItem key={p.name} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xl font-semibold tracking-tight sm:text-2xl",
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {p.name}
              </span>
              {i < priorities.length - 1 ? (
                <ChevronRight className="size-4 text-muted-foreground" />
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>

        {/* Per-priority glosses */}
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/60 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <StaggerItem key={p.rank} className="bg-card p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand">{p.rank}</span>
                <h3 className="text-base font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.gloss}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Principles }
