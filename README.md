# Mueller Family History

The home for the family history: an **interactive family tree**, a **wiki page for every person**,
**stories** linked to the people and places they involve, and a **playable map** that runs the years
forward and shows where everyone was.

A static site (plain HTML/CSS/JS, in `public/`) served by **Next.js** on **Vercel**, gated behind a
single shared family passphrase. Same shape as `honeymoon-research` and `fantasy-football-stats` in
this folder — **minus the database**, since nothing here is collaboratively edited: the content lives
in versioned data files, not in Postgres. If the site ever grows comments, corrections, or
family-uploaded photos, that's when to add Postgres back (see *Where a database would go*, below).

| Page | What it does |
|---|---|
| `index.html` | The family tree: one column per generation, couples on a single card, SVG connectors drawn between parents and children. Hover any card to trace its line; search jumps to a person. |
| `person.html?id=eh-mueller` | One person: biography, close-family snapshot (parents, siblings, spouses, children), the stories they appear in, every place the record puts them with years, and their photographs. |
| `stories.html` / `story.html?id=civil-war` | The twenty narrative sections of the history, each linked to its people, places, and photos. |
| `map.html` | The playable map. Press play and the year advances; pins show every place with someone in it that year, sized by how many. Everyone is shown by default, with a filter by person or generation. |
| `people.html` | Every person in the record in one sortable, filterable table. |

## The content

Everything comes from **`knowledge/Mueller History in Milwaukee.v1.final.pdf`** — an 84-slide deck
covering 1842 to the present. `knowledge/` holds the source documents this archive is built from;
everything the site needs was transcribed out of the deck into `public/data/*.js` and
`public/photos/`. The site never reads these files at runtime, so they're here as the archive's
provenance, not as a dependency — put future source material (scans, letters, documents, later
versions of the deck) alongside it.

- **84 people** (`public/data/people.js`), transcribed from the "Family Tree by Generation" chart —
  all five generations, spouses included — plus individuals named only in the narrative pages
  (EH's first wife and their son, Anna's parents and half-brother's family, the Dentinger and
  Thomas descendants, and Gertrude Wagner Poetz, who lived with the family without being related).
- **37 places** (`public/data/places.js`), from Wągrodno in Silesia to two Wisconsin lakes, by way of
  six Civil War battlefields. `approx: true` marks a coordinate that's a sensible placement for the
  area described rather than a surveyed address — historical street numbers, section-and-township
  descriptions, and "somewhere on this lake" all land there.
- **62 presence records** (also `places.js`) — "these people were at this place between these two
  years." This is what the map plays back.
- **20 stories** (`public/data/stories.js`).
- **17 photographs** (`public/data/photos.js`, files in `public/photos/`).

### About the photographs

The deck has 153 embedded images; the 17 here are the ones whose subjects it names clearly enough to
attribute with confidence — the 1911 family portrait with everyone listed by row, the 1983 reunion
with four brothers named, the Memmel wedding, the Dentinger family, Shirley and "Bim" as children,
the 1842 farm deed, the lake houses, and a few pieces of family artwork.

Images the deck itself questions — the slides captioned *"Who are these folks?"* and *"Is this
Eileen?"* — are **deliberately left out**, as are pages where several photos share a caption block
and there's no way to tell which caption belongs to which image. Those are worth adding once someone
who recognizes the faces can identify them; see *Adding to the record*.

### Where the record is uncertain

The site shows uncertainty rather than hiding it. Two examples already flagged on the relevant pages:

- **EH Mueller** married Anna Dietrich in 1901, but Minnie Weber's recorded death is 1902. The
  source doesn't resolve it, so both dates are presented as written, with a note.
- **August Hannig's** death year is printed as 1979 on the chart, which would make him 160. Recorded
  here as 1879 with a note explaining the change.

One chart entry — a trailing "Gertrude E. Wagner (1898–" at the bottom of the Generation 5 column —
was left out entirely, since there's no way to tell whose line it belongs to.

## Deploy on Vercel (one-time setup)

1. **Import the repo.** Vercel dashboard → **Add New → Project** → select `family-history`. The
   framework preset should auto-detect as **Next.js** — if the project was imported back when this
   repo was just a README, it may say "Other"; fix it under **Settings → General → Build and
   Deployment**.
2. **Set the passphrase.** Project → **Settings → Environment Variables** → add **`FAMILY_CODE`**
   with whatever passphrase the family will use. Add it to **Production, Preview, and Development**.
   Anyone with the link *and* this passphrase can read the archive; everyone else gets the sign-in
   page.
3. **Deploy.** The first deploy runs automatically on import. If you added `FAMILY_CODE` after that
   first deploy, hit **Redeploy** — environment variables only apply to new deployments.

There's no database to attach and no cron to configure, so that's the whole setup.

**If `FAMILY_CODE` isn't set**, every request redirects to the sign-in page and every passphrase is
rejected — the site fails closed, on purpose. The sign-in page says so rather than letting people
guess.

### How the gate works

`src/middleware.ts` checks a cookie on every request — pages, data files, photos, everything except
the sign-in page itself and the login endpoint. `src/app/api/login/route.ts` sets that cookie after a
correct passphrase; `/api/logout` clears it (the "Sign out" link in the footer). The cookie holds a
SHA-256 hash of the passphrase, never the passphrase itself, and is `httpOnly` + `secure` in
production. It's Web Crypto rather than `node:crypto` because middleware runs on the Edge runtime,
where the Node built-ins aren't available.

It's one shared passphrase, not accounts — appropriate for a family archive, but worth knowing: it
keeps the record off the public web, and it is not a permission system. Everyone who gets in sees
everything, including pages for living relatives.

## Run it locally

```
npm install
FAMILY_CODE=whatever npm run dev     # http://localhost:3000, sign in with "whatever"
```

Without `FAMILY_CODE` set, you'll be stuck at the sign-in page — that's the gate working.

## Adding to the record

All four data files are plain JS, versioned, and hand-editable — no build step, no migration.

- **A person**: add an object to `public/data/people.js`. `parentIds` is what the tree draws from;
  `childIds` is derived from it (every person's `childIds` must list their children's ids — keep
  both sides in sync, or regenerate with the script note below). `gen` picks the column.
- **A story**: add to `public/data/stories.js` with `peopleIds`, `placeIds`, and `photoIds`. It then
  appears automatically on every linked person's page.
- **A place and who was there**: add to `window.FH.places`, then one or more records to
  `window.FH.presence` in the same file. The map picks them up with no further wiring.
- **A photo**: drop the file in `public/photos/`, add an entry to `public/data/photos.js` with
  `peopleIds`, and a `storyId` and/or `placeId`. Only attribute what you're sure of — a `note` field
  is there for "the adult holding them isn't identified."

Person pages show images in two galleries. **Photographs** is the people named in `peopleIds`, and
the first becomes their portrait. **From their stories and places** is everything else connected to
them — images from the stories they appear in and the places the record puts them — captioned with
where each one comes from, so context images are never mistaken for pictures of the person. That
second gallery is why a `storyId`/`placeId` is worth setting even on a photo with no one identifiable
in it: it reaches 38 people's pages rather than the 18 that have a photo naming them.

Group presence records ("the family summered here, 1902–1925") don't need per-person date-fiddling:
`FH.clampToLife` in `public/js/core.js` trims every record to each person's own lifespan, so a child
born in 1921 never appears on the map in 1902, and nobody shows up after they died — except burials,
which are allowed to.

## What's not here yet

Known gaps, roughly in the order they'd be worth closing:

- **Generations 3 and 4 are only expanded along the EH Mueller line**, because that's how the source
  chart is drawn. The other Generation 2 siblings' descendants — including whoever the "Ebel" and
  "Seeboth" families in the lake photos connect through — aren't in the tree.
- **Most Generation 5 entries have dates but no biography**, and no photos.
- **The home movies** the deck lists (1929 8mm reels, the Shirley and Bim footage, the Ebel movies,
  Julie's 1967 picnic) aren't digitized here.
- **Living relatives** are in the tree with dates only, deliberately.

### Where a database would go

If the family should be able to *contribute* — corrections, comments on photos, "that's actually
Aunt Eileen," uploaded scans — that's the point where this needs Postgres, and the pattern to copy is
`honeymoon-research` in this folder: Vercel → Storage → Create Database → Postgres (Neon) → Connect
to Project, Prisma schema, one API route. Until then, data files in git are a better archive: they
diff, they review, and they can't be silently overwritten.
