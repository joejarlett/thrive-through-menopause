# Thrive Through Menopause

Event site for a Bristol menopause and healing fair — 18 October, Ham Green House.

**Live:** <https://thrive-through-menopause.vercel.app>

**Shared copy doc:** <https://docs.google.com/document/d/1tZ2isW8Ae2K429EXLWO3BL0UtuQ6dkwfOKEp67U8XAU/edit> — the organisers edit the wording there, we read it back and
apply it here. [Drive folder](https://drive.google.com/drive/folders/1Ef-hc2i4kNfJ0AZYBH4ZT2PH7g8p_nE0). See [docs/content-todo.md](docs/content-todo.md).

The site takes its identity from the printed poster — lotus, wordmark, purple — and gives it
room to breathe on screen. The poster itself is reproduced exactly at `/poster`, where every
dimension is a percentage of its own width, measured from the artwork (1131 × 1600), so the
composition holds identically at any size.

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

- **`/`** — the site. Ivory ground, purple lotus, **Fraunces** (soft optical serif) for the
  voice and **Mulish** for reading. Full-height hero where the lotus draws itself, one shared
  left edge across sections, the timetable as a timeline, the FAQ as an accordion.
- **`/poster`** — the literal reproduction of the printed poster: lilac, Playfair Display and
  Poppins, every dimension measured from the artwork. Kept for reference and `noindex`ed so
  it doesn't compete in search. `/ivory` 308-redirects to `/`.

Both read from the same `src/lib/site.ts`, and share page metadata via
`src/lib/components/SeoHead.svelte`. Otherwise they're independent — the ivory design carries
its own tokens in `IvoryPage.svelte`, so neither version can break the other.

Motion (`src/lib/actions/reveal.ts`, the lotus draw-on, the sticky booking bar) is all
disabled under `prefers-reduced-motion`.

## Tickets

Ticketing is handled by the organiser's existing **Ticket Tailor** event; the poster's QR
code encodes the same URL. The site links out rather than taking payment. Reasoning is in
[docs/next-steps.md](docs/next-steps.md).
