import { execFileSync } from "node:child_process"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { tmpdir } from "node:os"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

// Use the same Sharp installation as Next's image pipeline, without adding a
// second image-processing dependency to the website.
const require = createRequire(import.meta.url)
const nextRequire = createRequire(require.resolve("next/package.json"))
const sharp = nextRequire("sharp")
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const calli = resolve(process.argv[2] ?? resolve(root, "../calli-shell"))
const output = resolve(root, "public/previews")
const temporary = await mkdtemp(resolve(tmpdir(), "euryos-calli-"))

// Coordinates remove Storybook's navigation and story controls, preserving
// each complete app window. They match Calli's 100% type / 2x backing capture.
const captures = [
  {
    name: "notes",
    story: "apps_text_editor",
    viewport: [1280, 820],
    crop: { left: 744, top: 228, width: 1520, height: 1280 },
  },
  {
    name: "mail",
    story: "apps_email",
    viewport: [1440, 900],
    crop: { left: 684, top: 328, width: 1960, height: 1240 },
  },
  {
    name: "code",
    story: "apps_code_editor",
    viewport: [1280, 820],
    crop: { left: 528, top: 248, width: 1952, height: 1240 },
  },
]

try {
  await mkdir(output, { recursive: true })
  for (const capture of captures) {
    const raw = resolve(temporary, `${capture.name}.png`)
    execFileSync(resolve(calli, "target/debug/storybook"), [], {
      cwd: calli,
      env: {
        ...process.env,
        CALLI_STORYBOOK_STORY: capture.story,
        CALLI_STORYBOOK_UI_SCALE: "1",
        CALLI_SCREENSHOT: raw,
        CALLI_SCREENSHOT_WIDTH: String(capture.viewport[0]),
        CALLI_SCREENSHOT_HEIGHT: String(capture.viewport[1]),
        CALLI_SCREENSHOT_SCALE: "2",
        CALLI_SCREENSHOT_FRAMES: "60",
      },
      stdio: "inherit",
    })
    await sharp(raw)
      .extract(capture.crop)
      .webp({ lossless: true })
      .toFile(resolve(output, `calli-${capture.name}.webp`))
    console.log(`Captured ${capture.name}`)
  }
  await sharp(resolve(calli, "assets/wallpapers/calli/arcs-dawn.png"))
    .webp({ quality: 88 })
    .toFile(resolve(output, "calli-wallpaper.webp"))

  const revision = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: calli,
    encoding: "utf8",
  }).trim()
  await writeFile(
    resolve(output, "source.json"),
    JSON.stringify(
      {
        repository: "calli-shell",
        revision,
        materialTier: "standard",
        backingScale: 2,
        appStatus:
          "Design prototypes with fictional content; not shipped EuryOS applications.",
        wallpaper:
          "assets/wallpapers/calli/arcs-dawn.png (original project-owner artwork)",
        captures,
      },
      null,
      2
    ) + "\n"
  )
} finally {
  await rm(temporary, { recursive: true, force: true })
}
