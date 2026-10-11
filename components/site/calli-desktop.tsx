import Image from "next/image"
import {
  BatteryFull,
  Calculator,
  Globe2,
  Search,
  Volume2,
  Wifi,
} from "lucide-react"

import { cn } from "@/lib/utils"
import styles from "./calli-desktop.module.css"

function CalliDesktop({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Desktop composition based on Calli prototypes: Notes and a code editor over the original Calli wallpaper, with floating status controls and a compact dock."
      className={cn(styles.desktop, className)}
    >
      <Image
        src="/previews/calli-wallpaper.webp"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className={styles.wallpaper}
      />
      <div aria-hidden="true" className={styles.workspace}>
        <span />
      </div>
      <div aria-hidden="true" className={styles.status}>
        <span>09:42</span>
        <span className={styles.separator} />
        <Wifi />
        <Volume2 />
        <BatteryFull />
      </div>
      <Image
        src="/previews/calli-code.webp"
        alt=""
        width={1952}
        height={1240}
        sizes="(max-width: 640px) 1px, (max-width: 1024px) 55vw, 564px"
        className={cn(styles.window, styles.code)}
      />
      <Image
        src="/previews/calli-notes.webp"
        alt=""
        width={1520}
        height={1280}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 492px"
        className={cn(styles.window, styles.notes)}
      />
      <div aria-hidden="true" className={styles.dock}>
        <span className={styles.search}>
          <Search />
        </span>
        <span>
          <Calculator />
        </span>
        <span>
          <Globe2 />
        </span>
      </div>
    </div>
  )
}

export { CalliDesktop }
