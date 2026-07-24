# People

One folder per category:

```
1_faculty/     Group Leader
2_postdocs/    Postdocs
3_phd/         PhD Students
4_masters/     MSc Students
5_bachelors/   BSc Students
6_others/      Others
7_alumni/      Alumni
```

Each person is a `<id>.json` file plus (optionally) their photo, both sitting directly
in their category folder — e.g. `2_postdocs/asal-forouzandeh.json` and
`2_postdocs/asal-forouzandeh.webp` sit side by side.

## Adding a person

1. Copy `_template.json` into the right category folder, rename it to `<id>.json`
   (e.g. `4_masters/jane-doe.json`).
2. Fill in the fields:
   - `id` — must match the filename (no `.json`).
   - `email`, `orcid`, `website` — leave as `""` to hide that button on the card. Only
     filled-in fields show a button.
   - `avatar` — just the filename (e.g. `"jane-doe.webp"`), no folder path — it's
     assumed to be in the same folder as the JSON. Leave as `""` to fall back to a
     coloured initials circle.
3. If you have a photo, drop it in the same folder using that exact filename.
4. Add the `id` under the matching category in `_manifest.json` (the folder alone
   isn't enough — the site can't list folder contents on its own, so the manifest
   says which files to actually load).

## Moving a person between categories

E.g. MSc → PhD, or MSc → Alumni:

1. Cut their `.json` (and photo, if any) from the old category folder and paste them
   into the new one.
2. In `_manifest.json`, remove their `id` from the old category's array and add it to
   the new one.

That's it — no need to touch the JSON file itself, `role_group` isn't stored in it
(the folder they're in is the source of truth).
