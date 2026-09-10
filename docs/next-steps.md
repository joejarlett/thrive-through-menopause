# Thrive Through Menopause - where to take the site next

Written 9 August 2026, after building the poster page. Three parts: the chips question,
a booking recommendation to put in front of the organiser, and a general review of the site.

---

## 1. The chips do look like buttons

They do, and that's a real problem rather than a taste one. On a printed poster an outlined
pill is decoration. On a web page, a pill with a border and a fill is the single most
button-shaped thing you can draw - so a visitor tries to click "Yoga", nothing happens, and
the page has quietly told them it's broken.

Two honest fixes, and only two:

1. **Make them true.** Once the page has content below the poster, each chip becomes an
   anchor to its section - Yoga jumps to the yoga timetable, Wellness Stands to the exhibitor
   list. The affordance stops lying. This is the one I'd take.
2. **Make them plainly not buttons.** Drop the border and fill, keep the words as a
   letter-spaced row. Truthful, but it costs the poster its most recognisable band of texture.

Until there's something to link to, leaving them is defensible - the page is currently a
faithful poster and nothing else on it is interactive either. The moment we add a second
screenful, option 1 should land in the same commit.

---

## 2. Booking and payment - she already has it, don't build one

**Finding first:** the QR code on the poster decodes to
`https://buytickets.at/thebristolfashionshow/2333887` - a live **Ticket Tailor** event page
under the organiser account `thebristolfashionshow` (TBFS). Ticketing exists and is already
printed on every poster. So the question isn't "what should we build", it's "how much of it
do we bother replacing".

### The ladder, cheapest first

|       | What                                                                                                                                          | Effort                                 | When it's right                                            |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------------------------------- |
| **A** | **Link out.** A "Book tickets" button in the hero and the poster's QR wired as a real link.                                                   | Done in minutes (QR is already linked) | Now. Always.                                               |
| **B** | **Embed.** Ticket Tailor's embeddable checkout widget on our own page - the visitor never leaves the site, same fees, our branding around it. | Half a day                             | If she wants the booking to feel part of the site          |
| **C** | **Build it.** Stripe Checkout + a database + confirmation emails + refunds + a check-in view.                                                 | 2–4 days, plus it's ours forever       | Only if there's something Ticket Tailor genuinely can't do |

**My recommendation is A now, B if she asks, and not C.** Ticket Tailor already gives her
card payments, refunds, PCI and GDPR compliance, a door-sales mode for people paying on the
day, and a scanner app for check-in. Rebuilding that on Stripe means we own the refund emails
at 9pm on a Sunday. It also charges a small flat fee per paid ticket rather than Eventbrite's
percentage, so she's on the cheaper platform already - there's no saving to chase by moving.

The "take payment on the day" plan works with this rather than against it: Ticket Tailor's
box-office mode handles door sales, and pre-booking still gives her the headcount she needs
to order catering, chairs and staff.

### Where a custom build genuinely pays: exhibitors, not attendees

The money at a fair like this is in stand fees, and stand booking is the part no ticketing
platform does well. A short **"Book a stand"** form - business name, contact, stand size,
what they offer, public liability insurance certificate, socials for cross-promotion - writing
into a database with an email to her, is about a day's work and replaces what is otherwise a
WhatsApp-and-spreadsheet job. Payment for stands can stay an invoice; no gateway needed.

That form also builds the exhibitor list the site should be showing anyway (see §3).

### If we need a database

Reuse the existing Firebase project **`jj-groundedninja`** (under `joe.jarlett@gmail.com`).
It's already used by `~/Documents/dev/groundedninja-v4` and `~/Documents/projects/dadscamp`.

`dadscamp` is the closest template to copy: SvelteKit on Vercel, `firebase-admin` server-side
only (`src/lib/server/firebase/admin.ts`), service-account JSON in a `FIREBASE_ADMIN_CONFIG`
environment variable. Nothing new to set up - a new Firestore collection and one form action.

_(There's no `learning.jarlett.uk` or `felix.jarlett.uk` checkout on this machine, and no
other Firebase project configured locally - `jj-groundedninja` is the one.)_

---

## 3. Site review

### Content - highest return first

1. **Put the year on it.** The poster says "18 October"; the page should say **Sunday 18
   October 2026**. It removes all doubt and it's what people type into Google.
2. **Exhibitor list, with logos and links.** Every exhibitor shares a page they appear on.
   This is the single biggest reach multiplier available and it costs nothing but collection.
3. **Talk timetable.** 12–5pm is roughly four slots. People commit to a named speaker at a
   named time far more readily than to a category called "Expert talks".
4. **The practical block.** Ticket price (or "free entry"), parking at Ham Green House,
   step-free access, whether it's drop-in or timed, whether partners and under-18s are welcome.
   These are the questions that otherwise arrive one at a time by DM.
5. **Who's behind it.** NCIM is a real Bristol charity and TBFS has a following - a short
   paragraph plus a contact email converts curiosity into trust.
6. **A plain-English "what is a healing fair"** paragraph. Doubles as the page's SEO body copy.
7. **Typo on the artwork:** the poster reads "Exibitions". The site says "Exhibitions". Worth
   correcting before the next print run.

### Style

- Keep the hero exactly as it is - poster-faithful is the right call for the first screen.
- Everything below should be deliberately plainer: same lilac, generous line height, one
  accent. **Do not carry the poster's extreme letter-spacing into body copy** - it's beautiful
  at 60px and unreadable at 16px.
- Poster type gets genuinely small on a phone. Body content wants a 16px floor regardless of
  what the poster proportions want.
- Once there's scroll content, a sticky "Book tickets" bar on mobile.

### Technical and SEO

Already in place from this build:

- Title, meta description, Open Graph image (`/og.jpg`), Twitter card.
- **schema.org `Event` JSON-LD** - this is what feeds Google's event rich results, and it's
  the highest-leverage SEO item for an event page. Confirm the 2026 date and any ticket price
  and it can carry those too.

Still worth doing:

- **A real domain.** `*.vercel.app` works, but `thrivethroughmenopause.co.uk` ranks, shares and
  prints better. Minutes to attach in Vercel.
- **Self-host the fonts** via `@fontsource` (Playfair Display, Poppins, Quicksand). Currently
  they come from Google's CDN - one extra connection on mobile, and visitor IPs going to
  Google is a GDPR wrinkle worth not having on a health-adjacent site. ~15 minutes.
- **Clean logo files.** TBFS and NCIM logos are currently cropped out of a WhatsApp JPEG.
  Ask both for SVG or high-res PNG - NCIM's is visibly soft at full width.
- `sitemap.xml`, a canonical URL, and a robots.txt that points at it.
- Search terms worth writing towards: _menopause event Bristol_, _menopause fair Bristol_,
  _wellbeing fair Bristol October_, _Ham Green House events_.

### Questions for the organiser

- Ticket price, or is entry free?
- Confirmed exhibitor list and talk schedule - even partial, it can go up now and grow.
- Does she want a domain of her own, or is a Vercel URL fine for year one?
- Should the site collect emails for next year's event? (If yes, that's the one thing worth
  building beyond the poster - a mailing list is the asset that survives the day.)
