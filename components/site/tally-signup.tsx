import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function TallySignupButton({
  children = "Request early access",
  className,
  variant,
  size = "default",
}: {
  children?: React.ReactNode
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
}) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      data-tally-open="b5Br16"
      data-tally-layout="modal"
      data-tally-width="560"
      data-tally-overlay="1"
      data-tally-emoji-text=""
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Button>
  )
}

export { TallySignupButton }
