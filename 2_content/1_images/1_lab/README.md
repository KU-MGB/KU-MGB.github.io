# Lab photos

## Group photo (People page)

Save it in this folder as `group.jpg` (or `.jpeg`/`.png`/`.webp` — any of those
extensions work, and `group-photo.*` works too). It appears automatically at the top
of the People page, replacing the "coming soon" placeholder. Any normal photo
size/orientation works — it's cropped to fill the frame.

## Home page slideshow

Add 3–5 photos to this folder, then list their filenames in `_manifest.json`,
e.g.:

```json
["team-fieldwork.jpg", "lab-bench.jpg", "sampling-trip.jpg"]
```

The home page cycles through them automatically (fades every few seconds).
Leave `_manifest.json` as `[]` to show the "coming soon" placeholder instead.
Order in the array is the order they play.
