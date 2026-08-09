# Placeholder content — what still needs replacing

The site is built out in full, but where we don't have the real content yet it uses
structure with honest stand-in copy. Nothing invented is stated as fact: unknown details
read as "to be confirmed" rather than as made-up specifics.

Everything below lives in [`src/lib/site.ts`](../src/lib/site.ts) unless stated otherwise —
one file, no hunting through markup.

## Must confirm before launch

| What              | Where                                     | Currently says                                                                                                                                                              |
| ----------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The year**      | `event.startsAt` / `endsAt` / `dateLabel` | 2026 assumed — the poster gives no year. This also feeds the Google event listing and the calendar file, so a wrong year is a wrong search result.                          |
| **Contact email** | `event.contactEmail`                      | `hello@thrivethroughmenopause.co.uk` — a guess. Used by the stand-enquiry and organiser links.                                                                              |
| **Domain**        | `site.url`                                | The Vercel URL. Feeds the canonical tag, sitemap, social card and event schema.                                                                                             |
| **Ticket price**  | FAQ "How much are tickets?"               | Points at Ticket Tailor rather than naming a price. Once known it can also go into the event schema as an `offers.price`, which shows the price directly in Google results. |

## Fill in as they confirm

| What                      | Where                                 | Currently                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talk timetable**        | `timetable`                           | Real slot times with "Speaker to be confirmed" against each. Replace titles and names as booked; the section already carries a note saying the running order is indicative.                                               |
| **Exhibitor list**        | `exhibitors`                          | Eight example tiles reading "Exhibitor name" with a category. Replace with real names, and add `url` to make a tile a link. Emptying the array switches the section to a "line-up announced shortly" state automatically. |
| **Parking and access**    | FAQ + the Access panel under Visiting | Written as "being confirmed" with an invitation to get in touch.                                                                                                                                                          |
| **Organiser biographies** | Organisers section in `+page.svelte`  | One factual sentence about TBFS and NCIM; no personal bios.                                                                                                                                                               |
| **Strand descriptions**   | `strands`                             | Written to be true of a fair of this kind and safe to publish as-is, but they're my words — worth her eye before launch.                                                                                                  |

## Assets

- **TBFS and NCIM logos** are cropped from the WhatsApp JPEG of the poster. Ask both for
  SVG or high-resolution PNG — NCIM's is visibly soft at full width.
- **`static/og.jpg`** (the social share card) is cropped from the same JPEG. Fine for now;
  better from the original artwork file if the designer has it.

## Deliberately not built

- **Payments.** Ticketing already exists on Ticket Tailor and the poster's QR points at it.
  See [next-steps.md](./next-steps.md) §2.
- **A stand-booking form with a database.** The site asks for stand enquiries by email for
  now. If she wants a real form, it's a day's work on the existing `jj-groundedninja`
  Firebase project — but it needs her decision first, and a form that silently drops
  submissions is worse than a mailto link.
