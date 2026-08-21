# Images

Flat folder, no subfolders. Current layout:

| File | Purpose |
|---|---|
| `5_MGB_Lab_Fevicon.svg` | Browser tab favicon. |
| `6_MGB_Lab_Logo.svg` | Navbar logo and footer logo. |
| `logo.png` | Apple-touch-icon (home screen icon on iOS — needs a raster image, so it keeps using this instead of the SVG logo). |
| `3_People.*` | Group photo (People page) — see below. |
| Anything listed in `manifest.json` | Home page slideshow — see below. |

## Group photo (People page)

Save it in this folder as `3_People.jpg` (or `.jpeg`/`.png`/`.webp` — any of those
extensions work). It appears automatically at the top of the People page, replacing
the "coming soon" placeholder. Any normal photo size/orientation works — it's
cropped to fill the frame.

## Home page slideshow

Add photos, GIFs, or short videos (`.jpg`/`.jpeg`/`.png`/`.webp`/`.gif`/`.mp4`) to
this folder, under whatever filenames you like, then list them in `manifest.json`,
e.g.:

```json
["fieldwork.jpg", "lab-bench.jpg", "clip-a.mp4+clip-b.mp4"]
```

Each array entry is one slide, shown full-width. Join two filenames with `+` (as in
the third entry above) to show them side by side as one combined slide instead —
any mix of photos, GIFs, and videos works. A GIF just needs the one file — it
animates on its own and (like a photo) is used directly as its own thumbnail dot.
For a video specifically, also add a still frame next to it named
`<video-filename>-poster.jpg` (e.g. `clip-a.mp4` needs `clip-a-poster.jpg`) — it's
shown while the video loads and used for that slide's thumbnail dot instead; you
don't list it in `manifest.json`, it's found automatically from the video's
filename. GIFs are uncompressed compared to video, so keep them short, small, and
low-frame-rate (e.g. via `ffmpeg` with a limited colour palette) to avoid bloating
the home page's load size.

The home page cycles through the slides automatically (fades every few seconds,
swipeable on touch). Leave `manifest.json` as `[]` to show the "coming soon"
placeholder instead. Order in the array is the order they play.
