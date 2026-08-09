/**
 * Single source of truth for everything the site says about the event.
 *
 * Entries marked PLACEHOLDER are structure standing in for content we don't have
 * yet — they are safe to show (nothing invented is stated as fact) but every one
 * of them is listed in docs/content-todo.md and wants replacing before launch.
 */

export const site = {
	url: 'https://thrive-through-menopause.vercel.app', // PLACEHOLDER: swap for the real domain
	title: 'Thrive Through Menopause',
	tagline: 'Through Menopause',
	strapline: 'A Bristol Menopause & Healing Fair'
};

export const event = {
	/** PLACEHOLDER: the poster says "18 October" with no year — 2026 assumed, please confirm. */
	startsAt: '2026-10-18T12:00:00+01:00',
	endsAt: '2026-10-18T17:00:00+01:00',
	dateLabel: 'Sunday 18 October 2026',
	dateShort: '18 October',
	timeLabel: '12 – 5pm',
	venue: 'Ham Green House',
	street: 'Chapel Pill Lane',
	locality: 'Pill, Bristol',
	postcode: 'BS20 0HH',
	get address() {
		return `${this.venue}, ${this.street}, ${this.locality} ${this.postcode}`;
	},
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=Ham+Green+House%2C+Chapel+Pill+Lane%2C+Bristol+BS20+0HH',
	/** The existing Ticket Tailor event — the destination the poster's QR code encodes. */
	ticketsUrl: 'https://buytickets.at/thebristolfashionshow/2333887',
	/** PLACEHOLDER: confirm the address enquiries should go to. */
	contactEmail: 'hello@thrivethroughmenopause.co.uk'
};

/** The six strands from the poster. Each chip on the poster links to its card. */
export const strands = [
	{
		id: 'exhibitions',
		title: 'Exhibitions',
		blurb:
			'Independent practitioners, makers and local businesses, all under one roof. Come and browse, ask questions, and find the people who can help.'
	},
	{
		id: 'yoga',
		title: 'Yoga',
		blurb:
			'Gentle, accessible sessions suitable for every body and every stage. Mats provided — no experience needed, and you can join whichever session fits your day.'
	},
	{
		id: 'workshops',
		title: 'Workshops',
		blurb:
			'Small, hands-on sessions where you can try something rather than just hear about it. Places are limited and allocated on the day.'
	},
	{
		id: 'wellbeing',
		title: 'Wellbeing',
		blurb:
			'A quiet corner of the day: breathwork, rest, and space to sit down with a cup of tea and talk to someone who understands.'
	},
	{
		id: 'wellness-stands',
		title: 'Wellness Stands',
		blurb:
			'Taster treatments and one-to-one consultations — from nutrition and movement to complementary therapies — bookable when you arrive.'
	},
	{
		id: 'expert-talks',
		title: 'Expert talks',
		blurb:
			'Short, clear talks from people who work with menopause every day. Sit in on one or stay for all of them.'
	}
];

/**
 * PLACEHOLDER: the shape of the day, with slots to be filled once speakers confirm.
 * Times are indicative — replace title/speaker as each is booked.
 */
export const timetable = [
	{ time: '12:00', title: 'Doors open', speaker: 'Exhibition and wellness stands open all day' },
	{ time: '12:30', title: 'Opening talk', speaker: 'Speaker to be confirmed' },
	{ time: '13:15', title: 'Gentle yoga session', speaker: 'Teacher to be confirmed' },
	{ time: '14:00', title: 'Expert talk', speaker: 'Speaker to be confirmed' },
	{ time: '14:45', title: 'Workshop', speaker: 'Facilitator to be confirmed' },
	{ time: '15:30', title: 'Expert talk', speaker: 'Speaker to be confirmed' },
	{ time: '16:15', title: 'Closing session', speaker: 'To be confirmed' },
	{ time: '17:00', title: 'Event closes', speaker: '' }
];

/**
 * PLACEHOLDER: example rows showing how the line-up will read. Replace with real
 * exhibitors as they confirm — an empty array renders a "coming soon" state instead.
 */
export const exhibitors = [
	{ name: 'Exhibitor name', category: 'Nutrition', url: '' },
	{ name: 'Exhibitor name', category: 'Yoga & movement', url: '' },
	{ name: 'Exhibitor name', category: 'Complementary therapy', url: '' },
	{ name: 'Exhibitor name', category: 'Sleep & rest', url: '' },
	{ name: 'Exhibitor name', category: 'Skincare', url: '' },
	{ name: 'Exhibitor name', category: 'Strength & fitness', url: '' },
	{ name: 'Exhibitor name', category: 'Counselling', url: '' },
	{ name: 'Exhibitor name', category: 'Local makers', url: '' }
];

/** PLACEHOLDER answers are written as open questions rather than invented facts. */
export const faqs = [
	{
		q: 'How much are tickets?',
		a: 'Tickets are booked through Ticket Tailor — follow the booking link for current prices and availability. Tickets will also be available on the door on the day.'
	},
	{
		q: 'Do I need to book in advance?',
		a: 'Booking ahead helps us plan numbers and guarantees you a place, but you are very welcome to turn up on the day.'
	},
	{
		q: 'Is there parking?',
		a: 'Parking arrangements at Ham Green House are being confirmed — details will be added here before the event.'
	},
	{
		q: 'Is the venue accessible?',
		a: 'Access details are being confirmed. If you have specific access needs, please get in touch and we will make sure the day works for you.'
	},
	{
		q: 'Can I bring a friend or partner?',
		a: 'Yes. The day is open to anyone going through menopause and to the people supporting them.'
	},
	{
		q: 'Can I have a stand?',
		a: 'Yes — we welcome practitioners, makers and local businesses. Get in touch and we will send you the details.'
	}
];
