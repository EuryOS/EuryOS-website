import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"
import { MarkGlyph } from "@/components/site/logo"
import { TallySignupButton } from "@/components/site/tally-signup"

function CTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-border/60 bg-neutral-950 py-24 text-white sm:py-28"
    >
      <Container>
        <div className="relative overflow-hidden border-x border-white/10 px-6 py-16 text-center sm:px-16 sm:py-20">
          <MarkGlyph className="pointer-events-none absolute -right-6 -bottom-10 size-48 text-white/[0.035]" />

          <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Help shape what comes next.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-neutral-400 sm:text-lg">
              Join the early-access list for updates as EuryOS develops. The
              interface and compatibility plans are still taking shape.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <TallySignupButton
                size="lg"
                className="h-11 bg-white px-5 text-[0.95rem] text-neutral-950 hover:bg-white/90"
              >
                Join the preview list
              </TallySignupButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-white/20 bg-transparent px-5 text-[0.95rem] text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:hover:bg-white/10"
              >
                <a href="/privacy/">Privacy notice</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export { CTA }
