<script lang="ts">
	import { site, event, faqs } from '$lib/site';

	/** `noindex` keeps the alternative design out of search while it stays available. */
	let { noindex = false }: { noindex?: boolean } = $props();

	const description = `${site.strapline} — ${event.dateLabel}, ${event.timeLabel} at ${event.venue}, ${event.street}, ${event.postcode}. Exhibitions, yoga, workshops, wellbeing, wellness stands and expert talks.`;

	const eventSchema = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: `${site.title} — ${site.strapline}`,
		description:
			'A Bristol menopause and healing fair: exhibitions, yoga, workshops, wellbeing, wellness stands and expert talks.',
		startDate: event.startsAt,
		endDate: event.endsAt,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: event.venue,
			address: {
				'@type': 'PostalAddress',
				streetAddress: event.street,
				addressLocality: 'Bristol',
				postalCode: event.postcode,
				addressCountry: 'GB'
			}
		},
		image: [`${site.url}/og.jpg`],
		offers: {
			'@type': 'Offer',
			url: event.ticketsUrl,
			availability: 'https://schema.org/InStock'
		}
	};

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
</script>

<svelte:head>
	<title>{site.title} — {site.strapline}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<link rel="canonical" href={site.url} />
	{/if}
	<meta property="og:title" content="{site.title} — {site.strapline}" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content="{site.url}/og.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_GB" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(eventSchema)}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</` + `script>`}
</svelte:head>
