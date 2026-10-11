import { siteConfig } from "@/lib/site"
import { Container } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"
import { EuryWordmark } from "@/components/site/logo"

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Why EuryOS", href: "#why" },
      { label: "Architecture", href: "#architecture" },
      { label: "Experience", href: "#experience" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact & privacy",
    links: [
      { label: siteConfig.email, href: siteConfig.contact },
      { label: "Privacy notice", href: "/privacy/" },
    ],
  },
]

function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <Container className="py-14">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
            <div className="flex max-w-xs flex-col gap-4">
              <EuryWordmark />
              <p className="text-sm leading-relaxed text-muted-foreground">
                An operating system in development, designed around clear app
                permissions, separate spaces, and a familiar desktop.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Secure by design. Familiar by default.
            </p>
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}

export { Footer }
