/**
 * Single source of truth for everything the site says about the event.
 *
 * Entries marked PLACEHOLDER are structure standing in for content we don't have
 * yet - they are safe to show (nothing invented is stated as fact) but every one
 * of them is listed in docs/content-todo.md and wants replacing before launch.
 */

export const site = {
	url: 'https://thrive-through-menopause.vercel.app', // PLACEHOLDER: swap for the real domain
	title: 'Thrive Through Menopause',
	tagline: 'Through Menopause',
	strapline: 'A Bristol Menopause & Healing Fair'
};

export const event = {
	/** PLACEHOLDER: the poster says "18 October" with no year - 2026 assumed, please confirm. */
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
	/** The existing Ticket Tailor event - the destination the poster's QR code encodes. */
	ticketsUrl: 'https://buytickets.at/thebristolfashionshow/2333887',
	/** PLACEHOLDER: confirm the address enquiries should go to. */
	contactEmail: 'hello@thrivethroughmenopause.co.uk'
};

/**
 * The opening text under the hero. Kept here rather than in the markup so the
 * copy the organisers actually read and edit lives in one file.
 */
export const intro = {
	lead: 'An afternoon for anyone going through menopause - and for the people alongside them.',
	paragraphs: [
		"Menopause isn't a problem to be solved in a ten-minute appointment. It touches sleep, work, mood, strength and confidence, and most of us are handed very little to go on. This day brings the people who can help into one room: practitioners, therapists, teachers and local businesses, alongside talks from people who work with menopause every day.",
		'Come for an hour or stay for the whole afternoon. Browse the stands, sit in on a talk, try a gentle yoga session, book a taster treatment - or simply sit down with a cup of tea and talk to someone who understands.'
	]
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
			'Gentle, accessible sessions suitable for every body and every stage. Mats provided - no experience needed, and you can join whichever session fits your day.'
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
			'Taster treatments and one-to-one consultations - from nutrition and movement to complementary therapies - bookable when you arrive.'
	},
	{
		id: 'expert-talks',
		title: 'Expert talks',
		blurb:
			'Short, clear talks from people who work with menopause every day. Sit in on one or stay for all of them.'
	}
];

/**
 * The confirmed line-up. Blurbs are cut down from the full bios the speakers
 * sent - those are kept verbatim in docs/speakers/<slug>.md, and the headshot
 * masters in docs/speakers/headshots/. Card images are <slug>-400/-800.jpg.
 *
 * `doing` is what they are bringing to the day, from the organiser's sheet.
 * A speaker with no `blurb` renders as a name-and-photo card until their bio
 * arrives, so the section can go live before the last one is in.
 */
export const speakers = [
	{
		slug: 'shona-hirons',
		name: 'Shona Hirons',
		role: 'Menopause coach, speaker and author',
		doing: 'Talk',
		blurb:
			'A litigation lawyer for twenty years, Shona came to menopause the hard way - a cycling accident, uterine cancer, and surgical menopause at 44. She now helps women stop fighting their bodies and start working with them.',
		url: 'https://mindset-in-motion.co.uk'
	},
	{
		slug: 'claire-cohen',
		name: 'Claire Cohen',
		role: 'Naturopathic nutritional therapist',
		doing: 'Three cooking sessions',
		blurb:
			'Her own perimenopause prompted a dramatic change of career. Claire cuts through the noise about food and hormones, and her hands-on sessions send you home with nutrient-dense snacks you will actually make.',
		url: ''
	},
	{
		slug: 'caroline-gaskin',
		name: 'Caroline Gaskin',
		role: "Homeopath and women's health coach",
		doing: 'Talk and stand',
		blurb:
			'A textile designer who followed a different path and qualified as a homeopath in 2000. Caroline specialises in hormonal balance and managing menopause naturally, building health plans women can actually sustain.',
		url: 'https://carolinegaskin.co.uk/'
	},
	{
		slug: 'pippa-ford',
		name: 'Pippa Ford',
		role: 'Creative arts psychotherapist and ecotherapist',
		doing: 'Opening session',
		/**
		 * "Ecotherapist" is her own word, from the bio she sent for this event -
		 * we are repeating her self-description, not upgrading her. Her Eco-Depth
		 * Practitioner training completes in late September 2026, a few weeks
		 * before the event, and she has asked to be presented as qualified for it.
		 * (pippaford.co.uk still says "currently in training" and will want the
		 * same update once she qualifies.)
		 *
		 * The framework is "eco-depth psychology", her own words - it sits with
		 * the Jungian and image work. Don't reach for "spiritual ecology", which
		 * is a different tradition and muddies what she does.
		 */
		blurb:
			'Her opening session, Awakenings: Menopause as a Sacred Threshold, holds menopause as a psycho-spiritual journey, not a list of symptoms. Drawing on eco-depth psychology, it asks what might awaken if we listen to the inner voice, and what deepens as we come back to knowing ourselves as nature rather than apart from it.',
		url: 'https://www.pippaford.co.uk'
	},
	{
		slug: 'emma-rice',
		name: 'Emma Rice',
		role: 'Holistic health and wellness coach',
		doing: 'Mindfulness workshop',
		blurb:
			'Fifteen years in healthcare showed Emma how easily our own wellbeing slips to the bottom of the list. She brings mindfulness, breathwork and immersive relaxation to midlife - no perfection required, just room to pause.',
		url: ''
	},
	{
		slug: 'elena-mary',
		name: 'Elena Mary',
		role: 'Multidimensional healer, formerly a nurse',
		doing: 'Womb meditation',
		blurb:
			'A nurse who followed a different calling. Elena offers energy healing for body, mind and soul, holistic support through perimenopause, and shares the Rites of the Munay Ki.',
		url: 'https://bodysoulalignment.podia.com/'
	},
	{
		slug: 'julie-britton',
		name: 'Julie Britton',
		role: 'Speaker',
		doing: 'Talk',
		/** PLACEHOLDER: drawn from Julie's own words - she has not sent a bio yet. */
		blurb:
			'Julie speaks about boundaries and coming home to yourself: the moment you stop living to keep everyone else comfortable, and start honouring what is true for you.',
		url: 'https://www.instagram.com/britton7148'
	},
	{
		slug: 'lisa-hunnego',
		name: 'Lisa Hunnego',
		role: '',
		doing: 'Two cooking sessions',
		/** PLACEHOLDER: no bio yet - the card renders as name and photo until there is one. */
		blurb: '',
		url: ''
	}
];

/**
 * Flip to true once `timetable` carries real slots. While it is false the section
 * shows the shape of the day in prose instead of a running order full of "to be
 * confirmed" - which read as nobody being booked, directly under eight speakers
 * who are.
 */
export const timetableConfirmed = false;

/**
 * PLACEHOLDER: the shape of the day, with slots to be filled once speakers confirm.
 * Times are indicative - replace title/speaker as each is booked. Not shown on the
 * page until `timetableConfirmed` is true.
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
 * exhibitors as they confirm - an empty array renders a "coming soon" state instead.
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
		a: 'Tickets are booked through Ticket Tailor - follow the booking link for current prices and availability. Tickets will also be available on the door on the day.'
	},
	{
		q: 'Do I need to book in advance?',
		a: 'Booking ahead helps us plan numbers and guarantees you a place, but you are very welcome to turn up on the day.'
	},
	{
		q: 'Is there parking?',
		a: 'Parking arrangements at Ham Green House are being confirmed - details will be added here before the event.'
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
		a: 'Yes - we welcome practitioners, makers and local businesses. Get in touch and we will send you the details.'
	}
];
