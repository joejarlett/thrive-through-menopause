<script lang="ts">
	import Lotus from '$lib/components/Lotus.svelte';
	import ContourCorner from '$lib/components/ContourCorner.svelte';

	const tags = ['Exhibitions', 'Yoga', 'Workshops', 'Wellbeing', 'Wellness Stands', 'Expert talks'];

	const mapsUrl =
		'https://www.google.com/maps/search/?api=1&query=Ham+Green+House%2C+Chapel+Pill+Lane%2C+Bristol+BS20+0HH';

	/** The event's existing Ticket Tailor page — the destination the poster's QR encodes. */
	const ticketsUrl = 'https://buytickets.at/thebristolfashionshow/2333887';

	const eventSchema = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: 'Thrive Through Menopause — A Bristol Menopause & Healing Fair',
		description:
			'A Bristol menopause and healing fair: exhibitions, yoga, workshops, wellbeing, wellness stands and expert talks.',
		startDate: '2026-10-18T12:00:00+01:00',
		endDate: '2026-10-18T17:00:00+01:00',
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: 'Ham Green House',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Chapel Pill Lane',
				addressLocality: 'Bristol',
				postalCode: 'BS20 0HH',
				addressCountry: 'GB'
			}
		},
		image: ['https://thrive-through-menopause.vercel.app/og.jpg'],
		offers: {
			'@type': 'Offer',
			url: 'https://buytickets.at/thebristolfashionshow/2333887',
			availability: 'https://schema.org/InStock'
		}
	};
</script>

<svelte:head>
	<title>Thrive Through Menopause — A Bristol Menopause &amp; Healing Fair</title>
	<meta
		name="description"
		content="A Bristol Menopause & Healing Fair — 18 October, 12–5pm at Ham Green House, Chapel Pill Lane, BS20 0HH. Exhibitions, yoga, workshops, wellbeing, wellness stands and expert talks."
	/>
	<meta
		property="og:title"
		content="Thrive Through Menopause — A Bristol Menopause &amp; Healing Fair"
	/>
	<meta
		property="og:description"
		content="18 October, 12–5pm at Ham Green House, Chapel Pill Lane, BS20 0HH."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(eventSchema)}</` + `script>`}
</svelte:head>

<main class="poster">
	<div class="sheet">
		<svg
			class="blob"
			viewBox="0 0 118 128"
			fill="none"
			aria-hidden="true"
			focusable="false"
			preserveAspectRatio="xMinYMax meet"
		>
			<path
				d="M0 0c30 2 62 16 74 42 12 26-2 46-22 58-18 11-30 20-24 28H0Z"
				fill="var(--color-blob)"
			/>
		</svg>

		<!-- Wordmark -->
		<header class="hero">
			<Lotus class="lotus" />
			<div class="wordmark">
				<h1>Thrive</h1>
				<p class="tagline">Through Menopause</p>
			</div>
		</header>

		<!-- When & where -->
		<section class="band">
			<p class="date">18 October</p>
			<p class="venue">at Ham Green House</p>
		</section>

		<!-- Billing -->
		<section class="billing">
			<p class="kicker">A Bristol</p>
			<h2 class="fair">Menopause<br />&amp; Healing Fair</h2>
		</section>

		<!-- What's on -->
		<section class="tags" aria-label="What's on">
			{#each tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</section>

		<!-- Time & address -->
		<section class="details">
			<p class="time">12 - 5 pm</p>
			<p class="address">
				<a href={mapsUrl} target="_blank" rel="noopener">Chapel Pill Lane BS20 0HH</a>
			</p>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<a class="qr" href={ticketsUrl} target="_blank" rel="noopener">
				<img
					src="/qr.png"
					alt="Book tickets for Thrive Through Menopause"
					width="324"
					height="328"
				/>
			</a>
			<div class="logos">
				<img class="tbfs" src="/tbfs.png" alt="TBFS" width="201" height="126" />
				<img
					class="ncim"
					src="/ncim.png"
					alt="National Centre for Integrative Medicine — inspiring health and wellbeing"
					width="312"
					height="91"
				/>
			</div>
		</footer>

		<ContourCorner />
	</div>
</main>

<style>
	/*
	 * Every dimension below is a percentage of the sheet width (cqw), taken from
	 * the printed poster (1131 × 1600), so the composition holds at any size.
	 */
	.poster {
		min-height: 100dvh;
		background: var(--color-lilac);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sheet {
		container-type: inline-size;
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 1000px;
		padding-bottom: 3.2cqw;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.hero,
	.band,
	.billing,
	.tags,
	.details,
	.footer {
		position: relative;
		z-index: 1;
	}

	.blob {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 0;
		width: 24cqw;
		height: auto;
		pointer-events: none;
	}

	/* ── Wordmark ─────────────────────────────────────── */
	.hero {
		position: relative;
		width: 100%;
	}

	.hero :global(.lotus) {
		position: absolute;
		top: 2.92cqw;
		left: 50.4%;
		translate: -50% 0;
		width: 69.5cqw;
	}

	.wordmark {
		position: relative;
		padding-top: 18.17cqw;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: 7.52cqw;
		line-height: 1;
		letter-spacing: 0.365em;
		text-indent: 0.365em;
		text-transform: uppercase;
	}

	.tagline {
		margin-top: 1.03cqw;
		font-size: max(10px, 2.02cqw);
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.705em;
		text-indent: 0.705em;
		text-transform: uppercase;
	}

	/* ── Date band ────────────────────────────────────── */
	.band {
		margin-top: 19.37cqw;
		width: 81.96cqw;
		padding: 0.36cqw 1cqw 2.28cqw;
		background: var(--color-lilac-band);
	}

	.date {
		font-size: max(17px, 4cqw);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.835em;
		text-indent: 0.835em;
		text-transform: uppercase;
	}

	.venue {
		margin-top: 0.83cqw;
		font-size: max(12px, 2.61cqw);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.786em;
		text-indent: 0.786em;
		text-transform: uppercase;
	}

	/* ── Billing ──────────────────────────────────────── */
	.billing {
		margin-top: 6.18cqw;
	}

	.kicker {
		font-size: max(12px, 2.72cqw);
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.281em;
		text-indent: 0.281em;
		text-transform: uppercase;
	}

	.fair {
		margin-top: 1.46cqw;
		font-family: var(--font-display);
		font-weight: 900;
		font-size: max(24px, 5.45cqw);
		line-height: 0.985;
		letter-spacing: 0.272em;
		text-indent: 0.272em;
		text-transform: uppercase;
	}

	/* ── What's on ────────────────────────────────────── */
	.tags {
		margin-top: 13.86cqw;
		width: 77.4cqw;
		display: grid;
		grid-template-columns: repeat(3, auto);
		justify-content: space-between;
		align-items: center;
		row-gap: 4.51cqw;
	}

	.tag {
		font-family: var(--font-rounded);
		font-weight: 600;
		font-size: max(10px, 1.9cqw);
		line-height: 1;
		letter-spacing: 0.14em;
		text-indent: 0.14em;
		padding: 0.59cqw 2.12cqw;
		border: 0.12cqw solid var(--color-ink);
		border-radius: 999px;
		background: var(--color-lilac-pill);
		white-space: nowrap;
	}

	/* ── Time & address ───────────────────────────────── */
	.details {
		margin-top: 5.97cqw;
	}

	.time {
		font-size: max(17px, 3.93cqw);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.368em;
		text-indent: 0.368em;
		text-transform: uppercase;
	}

	.address {
		margin-top: 5.32cqw;
		font-size: max(9px, 1.88cqw);
		font-weight: 600;
		line-height: 1;
		letter-spacing: 1.097em;
		text-indent: 1.097em;
		text-transform: uppercase;
	}

	.address a {
		color: inherit;
		text-decoration: none;
		text-underline-offset: 0.35em;
	}

	.address a:hover,
	.address a:focus-visible {
		text-decoration: underline;
	}

	/* ── Footer ───────────────────────────────────────── */
	.footer {
		margin-top: 3.25cqw;
		width: 100%;
		padding-left: 0.8cqw;
		display: flex;
		align-items: flex-start;
	}

	.qr {
		width: 13cqw;
		display: block;
		background: #fff;
	}

	.qr img {
		width: 100%;
		height: auto;
		display: block;
	}

	.logos {
		display: flex;
		align-items: flex-end;
		gap: 6.1cqw;
		margin-left: 14cqw;
		margin-top: 0.3cqw;
	}

	.logos img {
		height: auto;
		display: block;
	}

	.tbfs {
		width: 17cqw;
	}

	.ncim {
		width: 26.7cqw;
		margin-bottom: 0.1cqw;
	}

	/* ── Small screens ────────────────────────────────── */
	@media (max-width: 620px) {
		.tags {
			grid-template-columns: repeat(2, auto);
			justify-content: center;
			gap: 3.5cqw 3cqw;
		}

		.tag {
			font-size: max(12px, 2.8cqw);
			padding: 1cqw 2.6cqw;
		}

		.footer {
			margin-top: 8cqw;
			flex-direction: column;
			align-items: center;
			gap: 6cqw;
			padding-left: 0;
		}

		.qr {
			width: 26cqw;
		}

		.logos {
			margin-left: 0;
			gap: 8cqw;
		}

		.tbfs {
			width: 20cqw;
		}

		.ncim {
			width: 32cqw;
		}
	}
</style>
