"use client"

import Image from "next/image"
import { Expand } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type CalliAppPreviewProps = {
  name: string
  src: string
  width: number
  height: number
  description: string
}

function CalliAppPreview({
  name,
  src,
  width,
  height,
  description,
}: CalliAppPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Enlarge ${name} prototype`}
          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-[#f5f5f7] p-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:p-5"
        >
          <Image
            src={src}
            alt={description}
            width={width}
            height={height}
            sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="max-h-full w-auto max-w-full rounded-md object-contain shadow-lg shadow-black/10"
          />
          <span
            aria-hidden="true"
            className="absolute right-2 bottom-2 rounded-md border border-border bg-white p-1.5 text-[#6e6e73] transition-colors group-hover:text-[#1d1d1f]"
          >
            <Expand className="size-3.5" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-6xl gap-3 overflow-auto p-4 motion-reduce:animate-none sm:max-w-6xl sm:p-6">
        <div className="pr-10">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="mt-2">
            Captured from the Calli app prototype. Example content; app
            functionality is still in development.
          </DialogDescription>
        </div>
        <Image
          src={src}
          alt={description}
          width={width}
          height={height}
          sizes="100vw"
          className="mx-auto max-h-[72svh] w-auto max-w-full rounded-lg object-contain"
        />
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="w-fit rounded-sm text-sm underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          View full-size image
        </a>
      </DialogContent>
    </Dialog>
  )
}

export { CalliAppPreview }
