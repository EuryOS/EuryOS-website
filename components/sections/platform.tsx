import { Download, FolderTree, Monitor, UserRound } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { ScreenshotPlaceholder } from "@/components/site/screenshot-placeholder"

const shots = [
  {
    icon: Monitor,
    label: "The desktop",
    ratio: 16 / 9,
    className: "col-span-6 lg:col-span-4",
  },
  {
    icon: Download,
    label: "App Store",
    ratio: 4 / 3,
    className: "col-span-6 sm:col-span-3 lg:col-span-2",
  },
  {
    icon: FolderTree,
    label: "Files & folders",
    ratio: 4 / 3,
    className: "col-span-6 sm:col-span-3 lg:col-span-3",
  },
  {
    icon: UserRound,
    label: "Settings & accounts",
    ratio: 4 / 3,
    className: "col-span-6 sm:col-span-3 lg:col-span-3",
  },
]

function Platform() {
  return (
    <section id="experience" className="relative border-t border-border/60 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Everything you expect from your computer."
            description="Familiar on the surface, reinvented underneath: a fast desktop, reliable files, and safe, secure accounts, ready from the first minute."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-6 gap-4">
          {shots.map((shot) => (
            <StaggerItem key={shot.label} className={cn("flex flex-col gap-3", shot.className)}>
              <ScreenshotPlaceholder label={shot.label} ratio={shot.ratio} />
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <shot.icon className="size-4 text-muted-foreground" />
                {shot.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Platform }
