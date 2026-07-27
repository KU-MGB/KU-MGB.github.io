# MGB Lab Website

Source for the Microbial Genomics & Biodegradation (MGB) Lab website — Department of
Plant and Environmental Sciences, University of Copenhagen (PLEN • KU).

## Architecture

Plain HTML, CSS, and JavaScript. No framework, no build step, no `node_modules`.
Content is fetched at runtime from JSON files, so adding a person or a blog post is
just adding a file — nothing to compile.

- `index.html` — the entire site, including individual blog posts. Sections (Home,
  Projects, People, Publications, Blogs/News, a blog post, Join) are
  `<div class="page-view">`s; `scripts.js` shows one at a time based on the URL hash
  (`#projects`, `#people`, `#blog-post`, …).
- `scripts.js` — everything: the static content arrays (publications, news, research
  pillars, projects, reaction pipeline, facts), the data loader (fetches people, blog
  posts, and lab photos from their per-file folders and exposes
  `window.MGB_DATA_READY`), theme toggle, nav, the render functions for each section,
  the command-palette search (Ctrl/Cmd+K), and the language switcher.
- `styles.css` — one stylesheet, CSS custom properties for the light/dark palette.

## Folders

| Folder | Contents |
|---|---|
| `1_People/` | One subfolder per category (`1_faculty/`, `2_postdocs/`, …), each holding that group's `<id>.json` + photo side by side. See its `README.md`. |
| `2_content/1_images/` | `1_lab/` (group photo + home page slideshow — see its `README.md`), `2_logo/` (site logo). |
| `2_content/2_blogs/` | One subfolder per blog post (`post.json` + optional cover image). See its `README.md`. |

## Adding content

- **A person** → `1_People/README.md`
- **A blog post** → `2_content/2_blogs/README.md`
- **Lab / group photos** → `2_content/1_images/1_lab/README.md`
- **Publications, news, projects, research pillars, facts** → edit the arrays directly
  at the top of `scripts.js`.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying

`deploy.sh` stages everything, commits with a message you type, and pushes to
`origin` — that's it, GitHub Pages serves straight from the repo (no build step to
run first). The site goes live a few minutes after the push.
