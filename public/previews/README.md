# Calli previews

The app images are renderer captures of Calli's Notes, Mail and code editor
design prototypes, cropped to their complete windows. Content is fictional.
The hero combines these captures with a website rendering of Calli's floating
status controls and compact dock. It is a desktop composition, not evidence
that these apps run together on EuryOS.

`calli-wallpaper.webp` comes from the project owner's original `arcs-dawn.png`.
See `calli-shell/assets/wallpapers/calli/README.md` for its provenance.
`source.json` records the Calli source revision, viewport and crop coordinates.
App captures use lossless WebP; the wallpaper uses quality 88.

To refresh the images, build Storybook in the sibling Calli checkout first:

```sh
cd ../calli-shell
cargo build -p storybook
cd ../EuryOS-website
node scripts/capture-calli-previews.mjs
```

An optional first argument selects another Calli checkout. The script captures
headlessly and changes only this website's preview assets. If Calli's window or
Storybook geometry changes, update the crop rectangles and inspect every image.
