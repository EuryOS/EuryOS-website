import { Image as ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

/**
 * Empty, clearly-labeled slot for a real product screenshot that doesn't
 * exist yet. Swap the child out for an actual image once one is captured.
 */
function ScreenshotPlaceholder({
  label,
  ratio = 16 / 9,
  className,
}: {
  label: string
  ratio?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-dashed border-border bg-muted/30",
        className
      )}
    >
      <AspectRatio ratio={ratio}>
        <div className="bg-dot flex size-full items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <ImageIcon className="size-3.5" />
            {label}
          </span>
        </div>
      </AspectRatio>
    </div>
  )
}

export { ScreenshotPlaceholder }
