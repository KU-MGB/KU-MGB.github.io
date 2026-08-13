# Images

Flat folder, no subfolders. Current layout:

| File | Purpose |
|---|---|
| `logo.png` | Navbar logo, footer logo, favicon, and apple-touch-icon. |
| `3_People.*` | Group photo (People page) — see below. |
| Anything listed in `manifest.json` | Home page slideshow — see below. |

## Group photo (People page)

Save it in this folder as `3_People.jpg` (or `.jpeg`/`.png`/`.webp` — any of those
extensions work). It appears automatically at the top of the People page, replacing
the "coming soon" placeholder. Any normal photo size/orientation works — it's
cropped to fill the frame.

## Home page slideshow

Add photos or short videos (`.jpg`/`.jpeg`/`.png`/`.webp`/`.mp4`) to this folder,
under whatever filenames you like, then list them in `manifest.json`, e.g.:

```json
["fieldwork.jpg", "lab-bench.jpg", "clip-a.mp4+clip-b.mp4"]
```

Each array entry is one slide, shown full-width. Join two filenames with `+` (as in
the third entry above) to show them side by side as one combined slide instead —
any mix of photos and videos works. For a video, also add a still frame next to it
named `<video-filename>-poster.jpg` (e.g. `clip-a.mp4` needs `clip-a-poster.jpg`) —
it's shown while the video loads and used for that slide's thumbnail dot; you don't
list it in `manifest.json`, it's found automatically from the video's filename.

The home page cycles through the slides automatically (fades every few seconds,
swipeable on touch). Leave `manifest.json` as `[]` to show the "coming soon"
placeholder instead. Order in the array is the order they play.
