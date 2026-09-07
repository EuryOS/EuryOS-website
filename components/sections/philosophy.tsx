import { Container } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"

function Philosophy() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-28 sm:py-32">
      <Reveal>
        <Container className="flex max-w-3xl flex-col items-center text-center">
          <blockquote className="text-3xl leading-tight font-medium tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            <span className="text-foreground">
              EuryOS starts with a smaller trusted core.{" "}
            </span>
            <span className="text-muted-foreground">
              Security shapes each layer, from the core to the apps you use.
              That gives you a system that stays familiar while its boundaries
              stay clear.
            </span>
          </blockquote>
          <p className="mt-8 text-base font-medium text-muted-foreground">
            A familiar desktop.{" "}
            <span className="text-foreground">
              Clear boundaries underneath.
            </span>
          </p>
        </Container>
      </Reveal>
    </section>
  )
}

export { Philosophy }
