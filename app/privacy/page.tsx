import type { Metadata } from "next"

import { Container } from "@/components/site/primitives"
import { EuryWordmark } from "@/components/site/logo"

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How EuryOS uses information submitted through the early-access form.",
  alternates: { canonical: "/privacy/" },
}

function PrivacyPage() {
  return (
    <main className="min-h-svh py-10 sm:py-14">
      <Container className="max-w-3xl">
        <a
          href="/"
          aria-label="EuryOS home"
          className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <EuryWordmark />
        </a>
        <article className="mt-16 pb-16">
          <p className="font-mono text-xs tracking-widest text-brand uppercase">
            Privacy
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Privacy notice
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            This notice explains how EuryOS uses information you provide in the
            early-access signup form.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-semibold text-foreground">
                Information we collect
              </h2>
              <p className="mt-2">
                The form asks for your email address. It also asks about your
                role and the hardware you are interested in; those answers are
                optional.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-foreground">
                How we use it
              </h2>
              <p className="mt-2">
                EuryOS uses your signup information to manage the early-access
                list and understand interest in EuryOS. You can separately
                choose whether to receive early-access and product-news emails.
                Leaving that box unchecked does not prevent you from joining the
                list.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-foreground">
                Where it is stored
              </h2>
              <p className="mt-2">
                The form is provided by Tally, which stores the answers
                submitted through it. EuryOS uses the email address to send
                updates manually from{" "}
                <a
                  className="text-foreground underline underline-offset-4"
                  href="mailto:hello@euryos.com"
                >
                  hello@euryos.com
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-foreground">
                How long we keep it
              </h2>
              <p className="mt-2">
                We keep your signup information until you unsubscribe or ask us
                to delete it.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-foreground">
                Your choices
              </h2>
              <p className="mt-2">
                You can unsubscribe from emails or request access to or deletion
                of your signup information by emailing{" "}
                <a
                  className="text-foreground underline underline-offset-4"
                  href="mailto:hello@euryos.com"
                >
                  hello@euryos.com
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-2">
                For questions about this notice or your information, contact
                EuryOS at{" "}
                <a
                  className="text-foreground underline underline-offset-4"
                  href="mailto:hello@euryos.com"
                >
                  hello@euryos.com
                </a>
                .
              </p>
            </section>
          </div>

          <a
            href="/"
            className="mt-12 inline-flex text-sm font-medium text-foreground underline underline-offset-4"
          >
            Back to EuryOS
          </a>
        </article>
      </Container>
    </main>
  )
}

export default PrivacyPage
