import {
  Check,
  FileText,
  Folder,
  LockKeyhole,
  PackageOpen,
  SlidersHorizontal,
} from "lucide-react"

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
  const preview =
    label === "The desktop" ? (
      <div className="grid size-full grid-cols-[28%_1fr] bg-card text-left">
        <div className="border-r border-border/70 bg-muted/40 p-3">
          <div className="flex items-center gap-1.5 text-[9px] font-semibold">
            <span className="size-1.5 rounded-full bg-success" />
            Healthy
          </div>
          <div className="mt-4 space-y-1 text-[9px] text-muted-foreground">
            <div className="rounded bg-foreground px-2 py-1.5 text-background">
              Overview
            </div>
            <div className="px-2 py-1.5">Apps</div>
            <div className="px-2 py-1.5">Files</div>
          </div>
        </div>
        <div className="p-3 sm:p-5">
          <div className="font-mono text-[8px] tracking-widest text-brand uppercase">
            EuryOS overview
          </div>
          <div className="mt-1 text-sm font-semibold">
            Everything in its place.
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["3 apps", "0 threats", "Verified"].map((item) => (
              <div
                key={item}
                className="rounded border border-border/70 bg-background p-2 text-[9px] text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-2 rounded border border-border/70 bg-background p-2 text-[9px] text-muted-foreground">
            Recent activity{" "}
            <span className="float-right text-success">Protected</span>
          </div>
        </div>
      </div>
    ) : label === "App Store" ? (
      <div className="size-full bg-card p-4 text-left sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[8px] tracking-widest text-brand uppercase">
              App Store
            </div>
            <div className="mt-1 text-sm font-semibold">
              Apps with boundaries.
            </div>
          </div>
          <PackageOpen className="size-5 text-muted-foreground" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {["Notes", "Photos", "Browser", "Mail"].map((app) => (
            <div
              key={app}
              className="flex items-center gap-2 rounded border border-border/70 p-2"
            >
              <span className="inline-flex size-6 items-center justify-center rounded bg-muted">
                <FileText className="size-3.5" />
              </span>
              <div className="text-[9px] font-medium">
                {app}
                <div className="font-normal text-muted-foreground">
                  Protected
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : label === "Files & folders" ? (
      <div className="size-full bg-card p-4 text-left sm:p-5">
        <div className="flex items-center gap-2">
          <Folder className="size-5 text-brand" />
          <div>
            <div className="font-mono text-[8px] tracking-widest text-brand uppercase">
              Files
            </div>
            <div className="mt-1 text-sm font-semibold">
              Only what you choose.
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          {["Documents", "Projects", "Shared with Photo Editor"].map(
            (item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 border-b border-border/60 pb-2 text-[10px]"
              >
                <Folder className="size-3.5 text-muted-foreground" />
                {item}
                <span className="ml-auto text-muted-foreground">
                  {index === 2 ? (
                    <LockKeyhole className="size-3" />
                  ) : (
                    "12 items"
                  )}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    ) : (
      <div className="size-full bg-card p-4 text-left sm:p-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-5 text-brand" />
          <div>
            <div className="font-mono text-[8px] tracking-widest text-brand uppercase">
              Settings
            </div>
            <div className="mt-1 text-sm font-semibold">
              Your rules, enforced.
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          {["Ask before access", "Contain failures", "Verify at startup"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded border border-border/70 p-2 text-[10px]"
              >
                <span>{item}</span>
                <span className="inline-flex size-4 items-center justify-center rounded-full bg-success/10 text-success">
                  <Check className="size-2.5" />
                </span>
              </div>
            )
          )}
        </div>
      </div>
    )

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/70 bg-muted/30 shadow-sm",
        className
      )}
    >
      <AspectRatio ratio={ratio}>{preview}</AspectRatio>
    </div>
  )
}

export { ScreenshotPlaceholder }
