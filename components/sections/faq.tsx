import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"

const questions = [
  {
    question: "What is EuryOS?",
    answer:
      "EuryOS is an operating system in development, designed to make app permissions clearer and keep apps and system components in separate spaces.",
  },
  {
    question: "Will it work on my computer and with my apps?",
    answer:
      "Supported hardware and app compatibility are still being defined. Join the list and tell us what you would like to use it on.",
  },
  {
    question: "Has the security model been verified?",
    answer:
      "The verification approach and results have not been defined yet. We will share details as the project develops.",
  },
  {
    question: "What happens when I join the preview list?",
    answer:
      "Your email is required. The role and hardware questions are optional. You can separately opt in to early-access and product-news emails. See the privacy notice for details.",
  },
]

function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-border/60 bg-muted/20 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="What we know so far."
            description="EuryOS is in development. We will be clear where plans are still taking shape."
          />
        </Reveal>
        <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
          {questions.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-muted-foreground transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { FAQ }
