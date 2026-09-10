<script lang="ts">
	import Poster from '$lib/components/Poster.svelte';
	import { event, strands, timetable, exhibitors, faqs } from '$lib/site';
</script>

<a class="skip" href="#about">Skip to event details</a>

<main>
	<Poster />

	<!-- ── The day ──────────────────────────────────────── -->
	<section class="band-intro" id="about">
		<div class="col">
			<p class="eyebrow">{event.dateLabel} · {event.timeLabel}</p>
			<h2>A day for anyone going through menopause - and the people alongside them.</h2>
			<p>
				Menopause is not a problem to be solved in a ten-minute appointment. It touches sleep, work,
				mood, strength and confidence, and most of us are handed very little to go on. Thrive
				Through Menopause brings the people who can help into one room for an afternoon:
				practitioners, therapists, teachers and local businesses, alongside talks from people who
				work with menopause every day.
			</p>
			<p>
				Come for an hour or stay for the whole afternoon. Browse the stands, sit in on a talk, try a
				gentle yoga session, book a taster treatment, or simply sit down with a cup of tea and talk
				to someone who understands.
			</p>
			<div class="actions">
				<a class="btn" href={event.ticketsUrl} target="_blank" rel="noopener">Book tickets</a>
				<a class="btn ghost" href="/thrive-through-menopause.ics">Add to calendar</a>
			</div>
		</div>
	</section>

	<!-- ── What's on ────────────────────────────────────── -->
	<section class="strands" aria-labelledby="whats-on">
		<div class="col">
			<p class="eyebrow">What's on</p>
			<h2 id="whats-on">Six strands, all running across the afternoon</h2>
		</div>
		<div class="cards">
			{#each strands as strand (strand.id)}
				<article class="card" id={strand.id}>
					<h3>{strand.title}</h3>
					<p>{strand.blurb}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- ── Timetable ────────────────────────────────────── -->
	<section class="timetable" aria-labelledby="timetable-heading">
		<div class="col">
			<p class="eyebrow">The shape of the day</p>
			<h2 id="timetable-heading">Timetable</h2>
			<p class="note">
				The running order below is indicative. Speakers and session titles are being confirmed and
				this page will be updated as each one is booked.
			</p>
		</div>
		<ol class="slots">
			{#each timetable as slot (slot.time + slot.title)}
				<li>
					<span class="slot-time">{slot.time}</span>
					<span class="slot-body">
						<span class="slot-title">{slot.title}</span>
						{#if slot.speaker}<span class="slot-who">{slot.speaker}</span>{/if}
					</span>
				</li>
			{/each}
		</ol>
	</section>

	<!-- ── Exhibitors ───────────────────────────────────── -->
	<section class="exhibitors" aria-labelledby="exhibitors-heading">
		<div class="col">
			<p class="eyebrow">Who you'll meet</p>
			<h2 id="exhibitors-heading">Exhibitors &amp; wellness stands</h2>
			<p class="note">
				The line-up is still being confirmed. If you'd like a stand, we'd love to hear from you -
				<a
					href="mailto:{event.contactEmail}?subject=Stand%20enquiry%20-%20Thrive%20Through%20Menopause"
					>get in touch</a
				>.
			</p>
		</div>
		{#if exhibitors.length}
			<ul class="grid">
				{#each exhibitors as ex, i (ex.name + i)}
					<li class="tile">
						<span class="tile-name">{ex.name}</span>
						<span class="tile-cat">{ex.category}</span>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="col"><p class="note">The full line-up will be announced here shortly.</p></div>
		{/if}
	</section>

	<!-- ── Visiting ─────────────────────────────────────── -->
	<section class="visiting" aria-labelledby="visiting-heading">
		<div class="col">
			<p class="eyebrow">Getting there</p>
			<h2 id="visiting-heading">Visiting</h2>
		</div>
		<div class="facts">
			<div class="fact">
				<h3>When</h3>
				<p>{event.dateLabel}<br />{event.timeLabel}</p>
			</div>
			<div class="fact">
				<h3>Where</h3>
				<p>
					{event.venue}<br />{event.street}<br />{event.locality}<br />{event.postcode}
				</p>
				<p><a href={event.mapsUrl} target="_blank" rel="noopener">Open in Maps</a></p>
			</div>
			<div class="fact">
				<h3>Tickets</h3>
				<p>Booked through Ticket Tailor, with tickets also available on the door.</p>
				<p><a href={event.ticketsUrl} target="_blank" rel="noopener">Book online</a></p>
			</div>
			<div class="fact">
				<h3>Access</h3>
				<p>
					Parking and step-free access details are being confirmed. If you have access needs, do get
					in touch and we'll make sure the day works for you.
				</p>
			</div>
		</div>
	</section>

	<!-- ── FAQ ──────────────────────────────────────────── -->
	<section class="faq" aria-labelledby="faq-heading">
		<div class="col">
			<p class="eyebrow">Before you come</p>
			<h2 id="faq-heading">Questions</h2>
			<dl>
				{#each faqs as faq (faq.q)}
					<div class="qa">
						<dt>{faq.q}</dt>
						<dd>{faq.a}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- ── Organisers ───────────────────────────────────── -->
	<section class="organisers" aria-labelledby="organisers-heading">
		<div class="col">
			<p class="eyebrow">Brought to you by</p>
			<h2 id="organisers-heading">The people behind the day</h2>
			<p>
				Thrive Through Menopause is organised by TBFS alongside the National Centre for Integrative
				Medicine, a Bristol organisation working in integrative health and wellbeing.
			</p>
			<p class="note">
				Organiser biographies to be confirmed. Enquiries:
				<a href="mailto:{event.contactEmail}">{event.contactEmail}</a>
			</p>
		</div>
		<div class="marks">
			<img src="/tbfs.png" alt="TBFS" width="201" height="126" />
			<img src="/ncim.png" alt="National Centre for Integrative Medicine" width="312" height="91" />
		</div>
	</section>

	<!-- ── Closing call ─────────────────────────────────── -->
	<section class="closing">
		<div class="col">
			<h2>{event.dateShort}. {event.timeLabel}. {event.venue}.</h2>
			<a class="btn" href={event.ticketsUrl} target="_blank" rel="noopener">Book your ticket</a>
		</div>
	</section>

	<footer class="site-footer">
		<p>Thrive Through Menopause - A Bristol Menopause &amp; Healing Fair</p>
		<p>{event.address}</p>
	</footer>
</main>

<!-- Sticky booking bar, phones only -->
<a class="sticky-book" href={event.ticketsUrl} target="_blank" rel="noopener">
	<span>Book tickets</span>
	<span class="sticky-meta">{event.dateShort} · {event.timeLabel}</span>
</a>

<style>
	.skip {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 10;
		padding: 0.75rem 1.25rem;
		background: var(--color-ink);
		color: var(--color-lilac);
	}

	.skip:focus {
		left: 0;
	}

	section {
		padding: clamp(3.5rem, 8vw, 6.5rem) clamp(1.25rem, 5vw, 3rem);
		background: var(--color-lilac-tint);
	}

	.col {
		max-width: 40rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}

	/*
	 * Sections with a wide grid share one left edge: the heading column widens to
	 * the grid's width and the prose inside it stays at a readable measure.
	 */
	.strands .col,
	.timetable .col,
	.exhibitors .col,
	.visiting .col {
		max-width: 66rem;
	}

	.strands .col p,
	.timetable .col p,
	.exhibitors .col p,
	.visiting .col p {
		max-width: 40rem;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.36em;
		text-transform: uppercase;
		color: var(--color-ink-muted);
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(1.6rem, 3.6vw, 2.4rem);
		line-height: 1.18;
		text-wrap: balance;
		margin: 0;
	}

	h3 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.2rem;
		margin: 0;
	}

	p {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
	}

	.note {
		font-size: 0.95rem;
		color: var(--color-ink-muted);
	}

	a {
		color: inherit;
		text-underline-offset: 0.25em;
	}

	:global(:focus-visible) {
		outline: 2px solid var(--color-ink);
		outline-offset: 3px;
	}

	/* ── Buttons ──────────────────────────────────────── */
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 0.6rem;
	}

	.btn {
		display: inline-block;
		padding: 0.9rem 2rem;
		border-radius: 999px;
		border: 1.5px solid var(--color-ink);
		background: var(--color-ink);
		color: var(--color-lilac);
		font-family: var(--font-rounded);
		font-weight: 700;
		font-size: 0.95rem;
		letter-spacing: 0.08em;
		text-decoration: none;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.btn:hover,
	.btn:focus-visible {
		background: transparent;
		color: var(--color-ink);
	}

	.btn.ghost {
		background: transparent;
		color: var(--color-ink);
	}

	.btn.ghost:hover,
	.btn.ghost:focus-visible {
		background: var(--color-ink);
		color: var(--color-lilac);
	}

	/* ── Intro ────────────────────────────────────────── */
	.band-intro {
		background: var(--color-lilac);
	}

	/* ── Strands ──────────────────────────────────────── */
	.cards {
		max-width: 66rem;
		margin: 2.5rem auto 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.25rem;
	}

	.card {
		background: var(--color-surface);
		border-radius: 1.25rem;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		scroll-margin-top: 1.5rem;
	}

	.card p {
		font-size: 1rem;
	}

	/* ── Timetable ────────────────────────────────────── */
	.timetable {
		background: var(--color-lilac);
	}

	.slots {
		max-width: 66rem;
		margin: 2.25rem auto 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.slots li {
		display: flex;
		gap: 1.5rem;
		max-width: 44rem;
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-rule);
	}

	.slot-time {
		font-variant-numeric: tabular-nums;
		font-weight: 600;
		letter-spacing: 0.08em;
		min-width: 4rem;
	}

	.slot-body {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.slot-title {
		font-weight: 600;
	}

	.slot-who {
		font-size: 0.92rem;
		color: var(--color-ink-muted);
	}

	/* ── Exhibitors ───────────────────────────────────── */
	.grid {
		max-width: 66rem;
		margin: 2.25rem auto 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 0.9rem;
	}

	.tile {
		background: var(--color-surface);
		border-radius: 1rem;
		padding: 1.15rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		min-height: 5rem;
		justify-content: center;
	}

	.tile-name {
		font-weight: 600;
	}

	.tile-cat {
		font-size: 0.88rem;
		color: var(--color-ink-muted);
	}

	/* ── Visiting ─────────────────────────────────────── */
	.visiting {
		background: var(--color-lilac);
	}

	.facts {
		max-width: 66rem;
		margin: 2.25rem auto 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 1.75rem;
	}

	.fact {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.fact p {
		font-size: 1rem;
	}

	/* ── FAQ ──────────────────────────────────────────── */
	dl {
		margin: 1rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	dt {
		font-weight: 600;
		margin-bottom: 0.35rem;
	}

	dd {
		margin: 0;
		line-height: 1.7;
		color: var(--color-ink-muted);
	}

	/* ── Organisers ───────────────────────────────────── */
	.organisers {
		background: var(--color-lilac);
	}

	.marks {
		max-width: 40rem;
		margin: 2.5rem auto 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: clamp(2rem, 6vw, 4rem);
	}

	.marks img {
		height: auto;
		display: block;
	}

	.marks img:first-child {
		width: 8rem;
	}

	.marks img:last-child {
		width: 13rem;
	}

	/* ── Closing ──────────────────────────────────────── */
	.closing {
		text-align: center;
	}

	.closing .col {
		align-items: center;
		gap: 1.75rem;
	}

	.closing h2 {
		font-size: clamp(1.5rem, 4vw, 2.6rem);
	}

	/* ── Site footer ──────────────────────────────────── */
	.site-footer {
		background: var(--color-ink);
		color: var(--color-lilac);
		text-align: center;
		padding: 2.5rem 1.5rem 6rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.site-footer p {
		font-size: 0.9rem;
		letter-spacing: 0.06em;
	}

	/* ── Sticky booking bar (phones) ──────────────────── */
	.sticky-book {
		display: none;
	}

	@media (max-width: 620px) {
		.sticky-book {
			position: fixed;
			left: 0.75rem;
			right: 0.75rem;
			bottom: 0.75rem;
			z-index: 20;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.15rem;
			padding: 0.85rem 1rem;
			border-radius: 999px;
			background: var(--color-ink);
			color: var(--color-lilac);
			text-decoration: none;
			font-family: var(--font-rounded);
			font-weight: 700;
			letter-spacing: 0.08em;
			box-shadow: 0 0.5rem 1.5rem rgb(11 4 9 / 0.25);
		}

		.sticky-meta {
			font-weight: 500;
			font-size: 0.75rem;
			letter-spacing: 0.12em;
			opacity: 0.8;
		}

		.site-footer {
			padding-bottom: 7rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.btn {
			transition: none;
		}
	}
</style>
