# Thrive Through Menopause

Event site for a Bristol menopause and healing fair — 18 October, Ham Green House.

The home page opens with a faithful reproduction of the printed poster, then continues into
the day's details. Every dimension in the poster is a percentage of its own width, measured
from the artwork (1131 × 1600), so the composition holds identically at any size.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run check      # svelte-check
npm run build      # production build (Vercel adapter, runtime pinned to nodejs22.x)
```

## Where things live

|                                           |                                                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/site.ts`                         | **All copy and event data.** Dates, venue, ticket link, strands, timetable, exhibitors, FAQs. Change content here, not in markup. |
| `src/lib/components/Poster.svelte`        | The poster hero. Dimensions in `cqw` — see the comment at the top of its stylesheet before touching numbers.                      |
| `src/lib/components/EventPage.svelte`     | The whole page: poster plus every content section.                                                                                |
| `src/lib/components/Lotus.svelte`         | The lotus mark, drawn as SVG.                                                                                                     |
| `src/lib/components/ContourCorner.svelte` | Bottom-right blob and contour rings.                                                                                              |
| `src/routes/layout.css`                   | Design tokens for both palettes.                                                                                                  |
| `docs/content-todo.md`                    | Every placeholder still to be replaced, and where.                                                                                |
| `docs/next-steps.md`                      | Booking/payment recommendation and the wider site review.                                                                         |

## Two versions

- **`/`** — the poster reproduction. Lilac, Playfair Display and Poppins, every dimension
  measured from the printed artwork.
- **`/ivory`** — a designed treatment of the same content. Ivory ground, purple lotus, and
  its own type: **Fraunces** (soft optical serif, `SOFT` axis dialled up) for the voice and
  **Mulish** for reading. The wordmark sits clear of the lotus rather than behind it, the
  timetable is a timeline, the FAQ is an accordion, and sections reveal gently on scroll.
  Marked `noindex` — it exists so the two can be compared before choosing.

Both read from the same `site.ts`. The ivory design is self-contained in
`src/lib/components/IvoryPage.svelte` with its own tokens, so neither version can break the
other. To make it the live site, point `src/routes/+page.svelte` at `IvoryPage` and move the
`noindex`.

Motion (`src/lib/actions/reveal.ts`, the lotus draw-on, the sticky booking bar) is all
disabled under `prefers-reduced-motion`.

## Tickets

Ticketing is handled by the organiser's existing **Ticket Tailor** event; the poster's QR
code encodes the same URL. The site links out rather than taking payment. Reasoning is in
[docs/next-steps.md](docs/next-steps.md).
