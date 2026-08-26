# People

One folder per category:

```
1_Faculty/     Group Leader
2_Postdocs/    Postdoctoral Researchers
3_PhD/         PhD Students
4_Masters/     MSc Students
5_Bachelors/   BSc Students
6_Others/      Others
7_Alumni/      Alumni
```

Each person is a `<id>.json` file plus (optionally) their photo, both sitting directly
in their category folder, e.g. `2_Postdocs/asal-forouzandeh.json` and
`2_Postdocs/asal-forouzandeh.webp` sit side by side.

## Adding a person

1. Copy `template.json` into the right category folder, rename it to `<id>.json`
   (e.g. `4_Masters/jane-doe.json`).
2. Fill in the fields:
   - `id`: must match the filename (no `.json`).
   - `name`, `role`: shown on the card (e.g. `role`: `"PhD Student"`).
   - `email`, `orcid`, `website`, `linkedin`: leave as `""` to hide that button on
     the card. Only filled-in fields show a button. **Group Leader, Postdocs, and
     PhD Students** show all four (missing ones as a greyed-out placeholder);
     **every other category** (MSc, BSc, Others, Alumni) shows LinkedIn only, even
     if the others are filled in. That's a deliberate simplification for larger
     groups, not a bug.
   - `tags`: 2-3 keywords, shown as chips on the card.
   - `bio`: a paragraph or two about the person. It always displays as plain
     flowing text: any `##`/`###` headings, `**bold**`/`*italic*`, or `- bullets`
     are stripped down to their words rather than rendered (e.g. `### Research
     Focus` becomes plain "Research Focus" run into the surrounding sentence),
     so there's no real benefit to using that syntax here, just write normal
     prose, in one or a few paragraphs.
   - `avatar`: just the filename (e.g. `"jane-doe.webp"`), no folder path, it's
     assumed to be in the same folder as the JSON. Leave as `""` to fall back to a
     coloured initials circle.
3. If you have a photo, drop it in the same folder using that exact filename.
4. Add the `id` under the matching category in `manifest.json` (the folder alone
   isn't enough, the site can't list folder contents on its own, so the manifest
   says which files to actually load). Order in that category's array is display
   order on the page.

## Moving a person between categories

E.g. MSc → PhD, or MSc → Alumni:

1. Cut their `.json` (and photo, if any) from the old category folder and paste them
   into the new one.
2. In `manifest.json`, remove their `id` from the old category's array and add it to
   the new one.

That's it, no need to touch the JSON file itself, `role_group` isn't stored in it
(the folder they're in is the source of truth).
