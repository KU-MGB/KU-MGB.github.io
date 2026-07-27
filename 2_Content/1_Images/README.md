# Images

Flat folder, numbered files (`1_`, `2_`, `3_`, …) — no subfolders. Current layout:

| File | Purpose |
|---|---|
| `1_logo-lockup.svg` | Navbar + footer logo. |
| `2_logo.png` | Favicon / apple-touch-icon. |
| `3_group.*` | Group photo (People page) — see below. |
| `4_`, `5_`, `6_`… | Home page slideshow — see below. |

## Group photo (People page)

Save it in this folder as `3_group.jpg` (or `.jpeg`/`.png`/`.webp` — any of those
extensions work). It appears automatically at the top of the People page, replacing
the "coming soon" placeholder. Any normal photo size/orientation works — it's
cropped to fill the frame.

## Home page slideshow

Add 3–5 photos to this folder (numbered after the logo/group files, e.g.
`4_fieldwork.jpg`, `5_lab-bench.jpg`), then list their filenames in
`_manifest.json`, e.g.:

```json
["4_fieldwork.jpg", "5_lab-bench.jpg", "6_sampling-trip.jpg"]
```

The home page cycles through them automatically (fades every few seconds, swipeable
on touch). Leave `_manifest.json` as `[]` to show the "coming soon" placeholder
instead. Order in the array is the order they play.
