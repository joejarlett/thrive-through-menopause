# Placeholder content - what still needs replacing

The site is built out in full, but where we don't have the real content yet it uses
structure with honest stand-in copy. Nothing invented is stated as fact: unknown details
read as "to be confirmed" rather than as made-up specifics.

Everything below lives in [`src/lib/site.ts`](../src/lib/site.ts) unless stated otherwise -
one file, no hunting through markup.

## Must confirm before launch

| What              | Where                                     | Currently says                                                                                                                                                              |
| ----------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The year**      | `event.startsAt` / `endsAt` / `dateLabel` | 2026 assumed - the poster gives no year. This also feeds the Google event listing and the calendar file, so a wrong year is a wrong search result.                          |
| **Contact email** | `event.contactEmail`                      | `hello@thrivethroughmenopause.co.uk` - a guess. Used by the stand-enquiry and organiser links.                                                                              |
| **Domain**        | `site.url`                                | The Vercel URL. Feeds the canonical tag, sitemap, social card and event schema.                                                                                             |
| **Ticket price**  | FAQ "How much are tickets?"               | Points at Ticket Tailor rather than naming a price. Once known it can also go into the event schema as an `offers.price`, which shows the price directly in Google results. |

## Fill in as they confirm

| What                      | Where                                 | Currently                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talk timetable**        | `timetable`                           | Real slot times with "Speaker to be confirmed" against each. Replace titles and names as booked; the section already carries a note saying the running order is indicative.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Speaker bios**          | `speakers`                            | 27 cards, from the organisers' Speaker Info sheet as of 7 October 2026. Julie Britton's card is written from her own words because what she sent is an Instagram reel script, not a bio. The 20 bios added on 7 October are not yet saved verbatim in `docs/speakers/` (the Drive gateway was down) - pull them with `scripts/pull-speaker.sh`. Names to confirm with the organisers: Sheetal Jethwa (her bio says Jeswal), Ellen Szide (programme says Sziede), Susie Morris (her bio says Suzie). Pippa Ford's card says "Opening session" but the programme has Dr Elizabeth Thompson opening at 12:00. |
| **Exhibitor list**        | `exhibitors`                          | Six real stands from the sheet. Fran O'Connor is on the Stall Holder tab and also has a 14:40 slot in the programme, so she has a tile here and a speaker card. Ellen Szide and Julie Britton are marked "stand?" on the sheet and are not listed. Add `url` to make a tile a link.                                                                                                                                                                                                                                                                                                                        |
| **Parking and access**    | FAQ + the Access panel under Visiting | Written as "being confirmed" with an invitation to get in touch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Organiser biographies** | Organisers section in `+page.svelte`  | One factual sentence about TBFS and NCIM; no personal bios.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Strand descriptions**   | `strands`                             | Written to be true of a fair of this kind and safe to publish as-is, but they're my words - worth her eye before launch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## The shared copy doc

The organisers edit the site's wording in a Google Doc rather than by sending notes:

<https://docs.google.com/document/d/1tZ2isW8Ae2K429EXLWO3BL0UtuQ6dkwfOKEp67U8XAU/edit>

`bun run scripts/export-copy.ts` regenerates it from `site.ts` (pipe to a file, then
`mm drive doc "..." --file copy.md --folder <id>`). To read their edits back:

```bash
mm drive read <doc-id> --as html --out copy.html   # html, not txt - it keeps heading levels
```

The headings are the contract between the doc and `site.ts`, which is why the doc asks them
not to rename any. Note `--as txt` works too but flattens headings into ordinary lines, and
`--as md` currently 503s at the gateway.

## Speakers

Full bios as supplied are kept verbatim in `docs/speakers/<slug>.md` and headshot masters in
`docs/speakers/headshots/`. The site shows a cut-down blurb from `speakers` in `site.ts` -
the long version is the record, not the page copy.

`scripts/pull-speaker.sh` fetches a new one from Drive:

```bash
scripts/pull-speaker.sh - <bio-doc-url> <headshot-url>
```

`-` as the name takes it from the Drive file name. Either URL can be `-` if that half hasn't
arrived. It writes the bio, the master, and the three card widths (320/640/960).

## Assets

- **TBFS and NCIM logos** are cropped from the WhatsApp JPEG of the poster. Ask both for
  SVG or high-resolution PNG - NCIM's is visibly soft at full width.
- **`static/og.jpg`** (the social share card) is cropped from the same JPEG. Fine for now;
  better from the original artwork file if the designer has it.

## Deliberately not built

- **Payments.** Ticketing already exists on Ticket Tailor and the poster's QR points at it.
  See [next-steps.md](./next-steps.md) §2.
- **A stand-booking form with a database.** The site asks for stand enquiries by email for
  now. If she wants a real form, it's a day's work on the existing `jj-groundedninja`
  Firebase project - but it needs her decision first, and a form that silently drops
  submissions is worse than a mailto link.
