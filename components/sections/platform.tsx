import { Code2, Mail, NotebookPen } from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { CalliAppPreview } from "@/components/site/calli-app-preview"

const apps = [
  {
    icon: NotebookPen,
    name: "Notes",
    src: "/previews/calli-notes.webp",
    width: 1520,
    height: 1280,
    description:
      "Calli Notes prototype with a searchable note list and an open Harbour notes document.",
    caption: "A note list and a quiet place to write.",
  },
  {
    icon: Mail,
    name: "Mail",
    src: "/previews/calli-mail.webp",
    width: 1960,
    height: 1240,
    description:
      "Calli Mail prototype showing mailboxes, an inbox and an open example message in a three-pane layout.",
    caption: "Mailboxes, messages, and a reading pane.",
  },
  {
    icon: Code2,
    name: "Code editor",
    src: "/previews/calli-code.webp",
    width: 1952,
    height: 1240,
    description:
      "Calli code editor prototype showing a project tree, file tabs and a Rust source file.",
    caption: "A project tree, file tabs, and room for code.",
  },
]

function Platform() {
  return (
    <section
      id="experience"
      className="relative border-t border-border/60 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Meet Calli"
            title="A computer that feels like a computer."
            description="Calli is the desktop being built for EuryOS. These captures show its app design prototypes, with familiar windows and a shared visual language."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>App prototypes · example content</p>
          <p>Select a preview to take a closer look</p>
        </div>
        <Stagger className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <StaggerItem key={app.name}>
              <figure>
                <CalliAppPreview
                  name={app.name}
                  src={app.src}
                  width={app.width}
                  height={app.height}
                  description={app.description}
                />
                <figcaption className="mt-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <app.icon
                      aria-hidden="true"
                      className="size-4 text-muted-foreground"
                    />
                    {app.name}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {app.caption}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These prototypes explore the interface. They do not establish app or
          hardware compatibility; supported devices and release details are
          still being defined.
        </p>
      </Container>
    </section>
  )
}

export { Platform }
