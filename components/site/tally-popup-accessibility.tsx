"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Tally?: {
      closePopup: (formId: string) => void
    }
  }
}

function TallyPopupAccessibility() {
  useEffect(() => {
    let popupOpen = false
    let trigger: HTMLButtonElement | null = null

    const restoreFocus = () => {
      popupOpen = false
      requestAnimationFrame(() => trigger?.focus({ preventScroll: true }))
    }

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const button = event.target.closest<HTMLButtonElement>(
        '[data-tally-open="b5Br16"]'
      )
      if (!button) return
      trigger = button
      popupOpen = true
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (!popupOpen || event.key !== "Escape") return
      event.preventDefault()
      event.stopPropagation()
      window.Tally?.closePopup("b5Br16")
    }

    const onMessage = (event: MessageEvent) => {
      if (
        typeof event.data !== "string" ||
        !event.data.includes("Tally.PopupClosed")
      ) {
        return
      }
      try {
        const { payload } = JSON.parse(event.data)
        if (payload?.formId === "b5Br16") restoreFocus()
      } catch {
        // Ignore unrelated or malformed postMessage payloads.
      }
    }

    document.addEventListener("click", onClick, true)
    document.addEventListener("keydown", onKeyDown, true)
    window.addEventListener("message", onMessage)
    return () => {
      document.removeEventListener("click", onClick, true)
      document.removeEventListener("keydown", onKeyDown, true)
      window.removeEventListener("message", onMessage)
    }
  }, [])

  return null
}

export { TallyPopupAccessibility }
