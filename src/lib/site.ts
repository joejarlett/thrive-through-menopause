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
 * masters in docs/speakers/headshots/. Card images are <slug>-320/-640/-960.jpg,
 * cropped 4:5.
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
		doing: 'Talk',
		blurb:
			'A textile designer who followed a different path and qualified as a homeopath in 2000. Caroline specialises in hormonal balance and managing menopause naturally, building health plans women can actually sustain.',
		url: 'https://carolinegaskin.co.uk/'
	},
	{
		slug: 'pippa-ford',
		name: 'Pippa Ford',
		role: 'Creative arts psychotherapist, eco-therapist and final year eco-depth practitioner',
		doing: 'Opening session',
		/**
		 * Wording is Pippa's own, sent 11 September 2026. "Final year eco-depth
		 * practitioner" is deliberate and now matches pippaford.co.uk, which says
		 * she is currently in training - an earlier draft of this card presented
		 * her as already qualified. Her training completes in late September 2026,
		 * a few weeks before the event; the role line can drop "final year" then,
		 * but only once she confirms. Both eco- terms are hyphenated so the two
		 * sit as equals in the line, at her request.
		 *
		 * The framework is "eco-depth psychology", her own words - it sits with
		 * the Jungian and image work. Don't reach for "spiritual ecology", which
		 * is a different tradition and muddies what she does.
		 */
		blurb:
			'Pippa works with image, somatic approaches and deeper nature connection practices. Her opening workshop, Awakenings, draws on eco-depth psychology to read menopause as a rite of passage - a clearing that reveals what is essential.',
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
		role: 'Wellness and nutrition advocate',
		doing: 'Two cooking sessions',
		blurb:
			'Lisa supports women through perimenopause and menopause, starting with food. Her approach connects nutrition, gut health and healthspan - expect fermented foods, microbiome support and practical changes that fit a busy life.',
		url: ''
	},
	{
		slug: 'elizabeth-thompson',
		name: 'Dr Elizabeth Thompson',
		role: 'Integrative medicine doctor and CEO of NCIM',
		doing: 'Opening talk and panel',
		blurb:
			'Trained in medicine at Oxford and in palliative medicine to consultant level, Dr Thompson founded the National Centre for Integrative Medicine in 2014. She brings conventional, holistic, functional and lifestyle approaches together, and hosts the podcast Integrative Medicine Matters.',
		url: 'https://ncim.org.uk/'
	},
	{
		slug: 'zoue-lloyd-wright',
		name: 'Dr Zouë Lloyd-Wright',
		role: 'Integrated and functional medicine doctor',
		doing: 'Talk and panel',
		blurb:
			'More than three decades in practice, spanning naturopathy, clinical nutrition, chiropractic and craniosacral therapy. Her talk, The Journey Home, looks at how hormones, minerals and nutrition connect - and how to nourish the body through midlife.',
		url: ''
	},
	{
		slug: 'pauline-cox',
		name: 'Pauline Cox',
		role: 'Functional nutritionist and author',
		doing: 'Panel',
		blurb:
			"A former physiotherapist who specialised in women's health, with a Master's in nutrition from the University of Bristol. Pauline is a best-selling author, a Fellow of the National Centre for Integrative Medicine and co-founder of Sow & Arrow, and turns complex science into practical habits.",
		url: ''
	},
	{
		slug: 'ruth-bradbrook',
		name: 'Ruth Bradbrook',
		role: 'Yoga teacher and soul midwife',
		doing: 'Yoga',
		blurb:
			'For Ruth, yoga is a way of life rather than an hour on the mat. Rooted in ritual and presence, she holds space for deep rest and reconnection - somewhere to pause, breathe and remember your wholeness.',
		url: ''
	},
	{
		slug: 'ellen-szide',
		name: 'Ellen Szide',
		role: 'Medical herbalist',
		doing: 'Talk',
		blurb:
			'Ellen runs Holos Herbal Practice in east Bristol, and this talk introduces the herbs that can help with common menopausal symptoms - hot flushes, poor sleep, brain fog, anxiety and low energy.',
		url: ''
	},
	{
		slug: 'izabella-collins',
		name: 'Izabella Collins',
		role: 'Kundalini yoga teacher and kinesiologist',
		doing: 'Kundalini yoga',
		blurb:
			"A holistic wellness practitioner focused on women's hormones and restoring balance naturally. Izabella weaves together bodywork, kinesiology, somatic practice and nervous system regulation to help women release stored stress and reconnect with the wisdom of their bodies.",
		url: ''
	},
	{
		slug: 'jo-ocallaghan',
		name: "Jo O'Callaghan",
		role: 'Founder of Pill Community Circuits',
		doing: 'Circuit training',
		blurb:
			"Fitness has been Jo's best friend for more than 25 years, including through ten years of her own perimenopause. She has run Pill Community Circuits for over four years, and brings tips for staying strong at home, at the gym or in a class.",
		url: ''
	},
	{
		slug: 'caroline-pringle',
		name: 'Caroline Pringle',
		role: 'Qigong and yoga teacher, nutritionist',
		doing: 'Qigong',
		blurb:
			'Perimenopause knocked Caroline for six at 47, while she was running a company as a single parent. Root and Rise, the practice she built from that, pairs dynamic Chinese exercise with Qigong - gentle strength first, then calm.',
		url: ''
	},
	{
		slug: 'anastasia-griffith',
		name: 'Anastasia Griffith',
		role: 'Trauma-informed EFT practitioner and coach',
		doing: 'EFT tapping',
		blurb:
			'After burning out of a successful acting career in Hollywood, Anastasia set out to understand the perfectionism and people-pleasing behind her own stress-induced early perimenopause. She founded The Cortisol Clinic, and sees menopause as an opportunity, not a curse.',
		url: ''
	},
	{
		slug: 'fabienne-vailes',
		name: 'Fabienne Vailes',
		role: 'Mindfulness teacher, hypnotherapist and author',
		doing: 'Mindfulness',
		blurb:
			'A self-described recovering language teacher and reformed mother. Fabienne wrote The Flourishing Student, co-wrote How to Grow a Grown Up, and founded Flourishing Education. She is also an NLP master practitioner and coach.',
		url: ''
	},
	{
		slug: 'kessie-may',
		name: 'Kessie May',
		role: 'Mindset coach and community builder',
		doing: 'Mindset and mantras',
		blurb:
			'Kessie pairs science-backed approaches to behaviour with intuition and a little magic. Her session, Mindset & Mantras, is a playful, practical look at the voice in your head - and how changing that conversation changes what feels possible.',
		url: ''
	},
	{
		slug: 'bean-bindloss',
		name: 'Bean Bindloss',
		role: 'Nutritional therapist and integrative hypnotist',
		doing: 'Talk',
		blurb:
			'Based in Bruton, Somerset, Bean helps women through perimenopause and hormonal health challenges. Her talk explains what shifting oestrogen does to memory, energy, sleep and weight, with practical ways to support your metabolic health.',
		url: ''
	},
	{
		slug: 'susie-morris',
		name: 'Susie Morris',
		role: 'Transformation coach and nutritional advisor',
		doing: 'Session',
		blurb:
			'Susie helps women who feel overwhelmed or stuck make change through small shifts in state, habits and everyday choices. Expect a fun, practical session, plus a stand with naturally derived skincare and the wholefood supplements she relied on herself.',
		url: ''
	},
	{
		slug: 'rachel-fleming',
		name: 'Rachel Fleming',
		role: 'Contemporary witch and intuitive consultant',
		doing: 'Talk',
		blurb:
			'Rachel guides women through the thresholds of midlife, treating intuition as a compass rather than a luxury. Her session, Menopause: A Spiritual Journey Home, is gentle, mischievous and rooted in cyclical living and a devotion to nature.',
		url: ''
	},
	{
		slug: 'sheetal-jethwa',
		name: 'Sheetal Jethwa',
		role: 'Menopause champion, founder of South Asian Voices Bristol',
		doing: 'Talk',
		blurb:
			'A campaigner and broadcaster currently in perimenopause herself, Sheetal speaks openly about what it does to confidence, relationships and work. She makes the case for representation, and for conversations that put South Asian women at their heart.',
		url: ''
	},
	{
		slug: 'emily-spillman',
		name: 'Emily Spillman',
		role: 'Pelvic health and continence nurse',
		doing: 'Talk',
		blurb:
			'Founder of Holora Health in South Gloucestershire, and in perimenopause herself for most of her thirties. Emily talks openly about pelvic floor, bladder and vaginal health, because no woman should be told midlife symptoms are just something to put up with.',
		url: ''
	},
	{
		slug: 'sarah-joy-lendon',
		name: 'Sarah-Joy Lendon',
		role: 'Oral health coach with a background in dentistry',
		doing: 'Talk',
		blurb:
			'Sarah-Joy supports midlife women dealing with changes in the mouth, which is closely tied to general and mental health. She combines dental knowledge, nutrition and compassionate coaching.',
		url: ''
	},
	{
		slug: 'sylvie-wicks',
		name: 'Sylvie Wicks',
		role: 'Internal Family Systems therapist',
		doing: 'IFS meditations',
		blurb:
			'Sylvie works from a studio in Stoke Bishop, Bristol, and introduces Internal Family Systems - the idea that the mind is a mosaic of parts, none of them bad - with short meditations to start mapping your own.',
		url: ''
	},
	{
		slug: 'fran-oconnor',
		name: "Fran O'Connor",
		role: 'Life coach',
		doing: 'Talk',
		blurb:
			'Fran works with people at a crossroads - a career that no longer fits, or a search for something new to care about. The question underneath it all: are you valuing yourself properly?',
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
 * Stands confirmed on the organisers' sheet. Several are run by people who also
 * speak - they keep their card in `speakers` and get a tile here as well. Alex
 * Francis is stand-only, so appears here and not above.
 * An empty array renders a "coming soon" state instead.
 */
export const exhibitors = [
	{
		name: 'Turquoise in Nature',
		category: 'Body Ballancer treatments with Alex Francis',
		url: 'https://turquoiseinnature.co.uk'
	},
	{ name: 'Caroline Gaskin', category: 'Homeopathy', url: 'https://carolinegaskin.co.uk/' },
	{ name: 'Noble Naturals', category: 'With Dr Zouë Lloyd-Wright', url: '' },
	{ name: 'Susie Morris', category: 'Skincare and wholefood supplements', url: '' },
	{ name: 'Sylvie Wicks', category: 'Internal Family Systems books and cards', url: '' },
	{ name: "Fran O'Connor", category: 'Life coaching', url: '' }
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
