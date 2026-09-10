/**
 * Build the shared copy document from src/lib/site.ts.
 *
 *   bun run scripts/export-copy.ts > copy.md
 *   mm drive doc "Thrive Through Menopause — website copy" --file copy.md --folder <id>
 *
 * The organisers edit the Google Doc; we read it back with `mm drive read <id>`
 * and apply changes to site.ts. The headings are the contract between the two,
 * so keep them stable — they are how a line of prose is matched back to a field.
 */
import {
	site,
	event,
	intro,
	strands,
	speakers,
	timetable,
	timetableConfirmed,
	exhibitors,
	faqs
} from '../src/lib/site';

const today = new Date().toLocaleDateString('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});

const out: string[] = [];
const p = (...lines: string[]) => out.push(...lines, '');

p(`# ${site.title} — website copy`);

p(
	`This is the shared copy for the event website. **Edit the text freely** — change wording,`,
	`replace anything marked TO CONFIRM, delete what you don't want. We read this document and`,
	`apply your changes to the site.`,
	'',
	`Two things to leave alone: **the headings** (they are how we match your text to the right`,
	`part of the page) and the **image notes in [square brackets]**.`,
	'',
	`Live site: ${site.url}`,
	`This copy generated: ${today}`
);

p('---', '', '## Event details');
p(
	`- **Date:** ${event.dateLabel}`,
	`- **Time:** ${event.timeLabel}`,
	`- **Venue:** ${event.venue}, ${event.street}, ${event.locality} ${event.postcode}`,
	`- **Tickets:** ${event.ticketsUrl}`,
	`- **Ticket price:** TO CONFIRM — the site currently sends people to Ticket Tailor rather than naming a price.`,
	`- **Enquiries email:** ${event.contactEmail} — TO CONFIRM, this is a guess.`,
	`- **Web address:** TO CONFIRM — the site is on a temporary address until a domain is chosen.`
);

p('---', '', '## Opening text', '', '_The first thing people read, under the title._');
p(`**Standfirst:** ${intro.lead}`);
intro.paragraphs.forEach((para, i) => p(`**Paragraph ${i + 1}:** ${para}`));

p('---', '', '## The line-up');
p(
	`_One entry per speaker. The short blurb is what appears on the website — around forty words,`,
	`written to be read at a glance. The full bios you sent are kept on file; nothing is lost by`,
	`cutting them here._`
);

for (const person of speakers) {
	p(`### ${person.name}`);
	p(
		`- **Role:** ${person.role || 'TO CONFIRM'}`,
		`- **On the day:** ${person.doing || 'TO CONFIRM'}`,
		`- **Link:** ${person.url || 'TO CONFIRM — website or social account'}`,
		`- **Headshot:** [on file — ${person.slug}.jpg]`
	);
	p(`**Short blurb:** ${person.blurb || 'TO CONFIRM — no bio received yet.'}`);
}

p('### Speakers still to come');
p(
	`_These names are on the Speaker Info sheet with no bio or headshot yet. Add a role, a short`,
	`blurb and send a photo, and they will appear alongside the others._`
);
p(
	...[
		'Ruth',
		'Ellen Szide',
		'Izabela Collins',
		'Dr Zoe & Pauline',
		'Joey',
		'Alex Francis',
		'Annastasia',
		'Fabien Valles'
	].map((n) => `- **${n}** — role: TO CONFIRM · blurb: TO CONFIRM · [headshot needed]`)
);

p('---', '', "## What's on");
p(`_The six strands from the poster, each with a short description._`);
for (const strand of strands) {
	p(`### ${strand.title}`);
	p(strand.blurb);
}

p('---', '', '## How the afternoon runs');
if (timetableConfirmed) {
	p(...timetable.map((s) => `- **${s.time}** — ${s.title}${s.speaker ? ` · ${s.speaker}` : ''}`));
} else {
	p(
		`The site does not show a running order yet, because every slot would read "speaker to be`,
		`confirmed" — which reads as though nobody is booked, directly under eight speakers who are.`,
		`It shows this instead:`,
		'',
		`> Doors open at midday and the exhibition and wellness stands run all afternoon. Talks,`,
		`> workshops and yoga sessions are timetabled across the day — the running order is being`,
		`> finalised with the speakers, and will be published here and on the door before the event.`,
		'',
		`**Fill in the times below and the real timetable replaces that paragraph.** This is the`,
		`draft shape we assumed — change the times, titles and names freely:`
	);
	p(...timetable.map((s) => `- **${s.time}** — ${s.title} · ${s.speaker || 'TO CONFIRM'}`));
}

p('---', '', '## Exhibitors and wellness stands');
p(
	`_Currently placeholders. Replace with the real names as they book — a category next to each`,
	`name (Nutrition, Yoga & movement, and so on) is enough._`
);
p(...exhibitors.map((ex) => `- ${ex.name} — ${ex.category}`));

p('---', '', '## Visiting');
p(
	`- **Parking:** TO CONFIRM`,
	`- **Step-free access:** TO CONFIRM`,
	`- **Anything else people should know before they arrive:** TO CONFIRM`
);

p('---', '', '## Questions people ask');
p(`_The FAQ on the site. Change an answer, or add a question we have missed._`);
for (const faq of faqs) {
	p(`### ${faq.q}`);
	p(faq.a);
}

p('---', '', '## Images');
p(
	`- **Poster artwork** — [we have the WhatsApp photo of the poster. The original file from the designer would be sharper.]`,
	`- **TBFS logo** — [cropped from the poster photo. An SVG or large PNG would be better.]`,
	`- **NCIM logo** — [cropped from the poster photo, and visibly soft. Worth asking NCIM for the original.]`,
	`- **Headshots** — [eight on file. See the line-up above for who is missing.]`,
	`- **Photos of the venue** — [none yet. A few good photographs of Ham Green House would help the Visiting section a lot.]`
);

console.log(
	out
		.join('\n')
		.replace(/\n{3,}/g, '\n\n')
		.trim() + '\n'
);
