# Adding a blog post

1. Copy the `0_template/` folder, rename it to a numbered, URL-safe slug (e.g.
   `3_new-erc-grant`; the number just keeps posts sorted in the folder, the slug
   after it is what shows up in the URL). Use the next number after whatever
   folders already exist.
2. Edit `post.json` inside it:
   - `title`: the post's headline.
   - `date`: `YYYY-MM-DD`.
   - `category`: a short label shown next to the date (e.g. `Science`, `Methods`).
   - `tags`: 2-4 keywords, shown as clickable chips on the card and the post
     itself. Leave as `[]` to show none.
   - `description`: one or two sentences shown on the blog list card.
   - `cover`: the cover image's filename (see step 3). Leave as `""` for no image.
   - `author`: `{ "name": "...", "linkedin": "https://www.linkedin.com/in/..." }`,
     shown next to the date on the card and post, linking out to that profile.
     Whoever actually wrote the post, not necessarily whoever added the file.
   - `body`: the post text, written in Markdown. Only this subset is supported:
     - `## Heading` and `### Smaller heading`
     - `**bold**`, `*italic*`, and `` `code` ``
     - `- ` or `* ` for a bullet list
     - `![Caption](filename)` for a figure inside the post body, on its own
       line. Same filename convention as `cover`: just the file's own name,
       sitting next to `post.json` in the same folder. Follow it with a
       `*Caption text*` line if you want a caption shown underneath.
     - A blank line between lines starts a new paragraph
     - Numbered lists, links (`[text](url)`), and blockquotes are **not**
       supported, they'll show up as literal text, not render.
3. Add a cover image next to `post.json` (SVG, PNG, JPG, or WebP) and set the
   `cover` field to its filename. Add any in-body figures the same way,
   referenced from `body` as above.
4. Add the folder name (the full slug, number included) to `manifest.json`
   (the array the site loads; a post not listed here never appears, even with
   `post.json` fully filled in). The array's order doesn't matter for display:
   posts are always shown newest-`date`-first, regardless of manifest order.

The post then appears on the blog list automatically, and is reachable at
`index.html?id=<slug>#blog-post` with the leading number stripped from the slug
(e.g. folder `3_new-erc-grant` → `index.html?id=new-erc-grant#blog-post`). That's
the link a visitor gets from clicking the card's title, or from right-clicking it
and copying the link, so it's shareable on its own.
