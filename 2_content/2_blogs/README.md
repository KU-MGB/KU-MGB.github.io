# Adding a blog post

1. Copy the `0_template/` folder, rename it to a numbered, URL-safe slug (e.g.
   `3_new-erc-grant` — the number just keeps posts sorted in the folder; the slug
   after it is what shows up in the URL).
2. Edit `post.json` inside it — `title`, `date` (YYYY-MM-DD), `category`, `tags`, `description` (shown on the card), and `body` (Markdown: `##` headings, `**bold**`, `*italic*`, `- ` bullets).
3. Add a cover image next to `post.json` (SVG, PNG, JPG or WebP) and set the `cover` field to its filename. Leave `cover` as `""` to show no image.
4. Add the folder name (the full slug, numbers included) to `_manifest.json` (the array the site loads).

The post is then reachable at `index.html?id=<slug>#blog-post` and appears on the
blog list automatically.
