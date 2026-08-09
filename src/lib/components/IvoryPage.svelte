<script lang="ts">
	import LotusMark from './LotusMark.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { event, strands, timetable, exhibitors, faqs } from '$lib/site';

	/** The booking bar only earns its place once the hero's own CTA has scrolled away. */
	let pastHero = $state(false);

	function watchHero(node: HTMLElement) {
		const observer = new IntersectionObserver(([entry]) => (pastHero = !entry.isIntersecting), {
			threshold: 0.12
		});
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}
</script>

<div class="ivory">
	<a class="skip" href="#about">Skip to event details</a>

	<!-- ── Hero ─────────────────────────────────────────── -->
	<header class="hero" use:watchHero>
		<div class="glow" aria-hidden="true"></div>

		<div class="hero-inner">
			<LotusMark class="hero-lotus" />

			<h1>
				<span class="thrive">Thrive</span>
				<span class="through">through menopause</span>
			</h1>

			<p class="hero-meta">
				<span>{event.dateLabel}</span>
				<span class="dot" aria-hidden="true"></span>
				<span>{event.timeLabel}</span>
				<span class="dot" aria-hidden="true"></span>
				<span>{event.venue}, Bristol</span>
			</p>

			<p class="hero-billing">A Bristol Menopause &amp; Healing Fair</p>

			<div class="hero-cta">
				<a class="btn" href={event.ticketsUrl} target="_blank" rel="noopener">Book your place</a>
				<a class="btn quiet" href="#whats-on">See what's on</a>
			</div>
		</div>

		<a class="cue" href="#about" aria-label="Read on">
			<span></span>
		</a>
	</header>

	<!-- ── The day ──────────────────────────────────────── -->
	<section class="about" id="about">
		<div class="wrap">
			<p class="lead" use:reveal>
				An afternoon for anyone going through menopause — and for the people alongside them.
			</p>
			<div class="two-col">
				<p use:reveal={80}>
					Menopause isn't a problem to be solved in a ten-minute appointment. It touches sleep,
					work, mood, strength and confidence, and most of us are handed very little to go on. This
					day brings the people who can help into one room: practitioners, therapists, teachers and
					local businesses, alongside talks from people who work with menopause every day.
				</p>
				<p use:reveal={160}>
					Come for an hour or stay for the whole afternoon. Browse the stands, sit in on a talk, try
					a gentle yoga session, book a taster treatment — or simply sit down with a cup of tea and
					talk to someone who understands.
				</p>
			</div>
		</div>
	</section>

	<!-- ── What's on ────────────────────────────────────── -->
	<section class="strands wash" aria-labelledby="whats-on">
		<div class="wrap">
			<p class="eyebrow" use:reveal>What's on</p>
			<h2 id="whats-on" use:reveal={60}>Six strands, running right across the afternoon</h2>

			<div class="cards">
				{#each strands as strand, i (strand.id)}
					<article class="card" id={strand.id} use:reveal={i * 70}>
						<span class="petal" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none">
								<path
									d="M12 22C5 18 3 11 4 3c8 1 15 3 18 10-3 6-7 8-10 9Z"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<h3>{strand.title}</h3>
						<p>{strand.blurb}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- ── Timetable ────────────────────────────────────── -->
	<section class="timetable" aria-labelledby="timetable-heading">
		<div class="wrap">
			<p class="eyebrow" use:reveal>The shape of the day</p>
			<h2 id="timetable-heading" use:reveal={60}>How the afternoon runs</h2>
			<p class="note" use:reveal={100}>
				Indicative for now — speakers and session titles are being confirmed, and this page updates
				as each one is booked.
			</p>

			<ol class="timeline">
				{#each timetable as slot, i (slot.time + slot.title)}
					<li use:reveal={i * 50}>
						<time>{slot.time}</time>
						<div class="slot">
							<h3>{slot.title}</h3>
							{#if slot.speaker}<p>{slot.speaker}</p>{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- ── Exhibitors ───────────────────────────────────── -->
	<section class="exhibitors wash" aria-labelledby="exhibitors-heading">
		<div class="wrap">
			<p class="eyebrow" use:reveal>Who you'll meet</p>
			<h2 id="exhibitors-heading" use:reveal={60}>Exhibitors &amp; wellness stands</h2>
			<p class="note" use:reveal={100}>
				The line-up is still being confirmed. If you'd like a stand,
				<a href="mailto:{event.contactEmail}?subject=Stand%20enquiry">we'd love to hear from you</a
				>.
			</p>

			{#if exhibitors.length}
				<ul class="tiles">
					{#each exhibitors as ex, i (ex.name + i)}
						<li use:reveal={i * 45}>
							<span class="tile-name">{ex.name}</span>
							<span class="tile-cat">{ex.category}</span>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="note">The full line-up will be announced here shortly.</p>
			{/if}
		</div>
	</section>

	<!-- ── Visiting ─────────────────────────────────────── -->
	<section class="visiting" aria-labelledby="visiting-heading">
		<div class="wrap">
			<p class="eyebrow" use:reveal>Getting there</p>
			<h2 id="visiting-heading" use:reveal={60}>Visiting</h2>

			<div class="visit-grid">
				<div class="visit-main" use:reveal={80}>
					<h3>{event.venue}</h3>
					<address>
						{event.street}<br />{event.locality}<br />{event.postcode}
					</address>
					<p class="when">{event.dateLabel} · {event.timeLabel}</p>
					<p>
						<a class="link" href={event.mapsUrl} target="_blank" rel="noopener">Open in Maps</a>
						<a class="link" href="/thrive-through-menopause.ics">Add to calendar</a>
					</p>
				</div>

				<aside class="visit-panel" use:reveal={140}>
					<h3>Good to know</h3>
					<dl>
						<dt>Tickets</dt>
						<dd>Booked online in advance, and available on the door on the day.</dd>
						<dt>Access</dt>
						<dd>
							Parking and step-free access are being confirmed. If you have access needs, get in
							touch and we'll make sure the day works for you.
						</dd>
						<dt>Bring someone</dt>
						<dd>The day is open to anyone going through menopause and to those supporting them.</dd>
					</dl>
				</aside>
			</div>
		</div>
	</section>

	<!-- ── FAQ ──────────────────────────────────────────── -->
	<section class="faq wash" aria-labelledby="faq-heading">
		<div class="wrap">
			<p class="eyebrow" use:reveal>Before you come</p>
			<h2 id="faq-heading" use:reveal={60}>Questions</h2>

			<div class="accordion">
				{#each faqs as faq, i (faq.q)}
					<details use:reveal={i * 45}>
						<summary>
							<span>{faq.q}</span>
							<span class="plus" aria-hidden="true"></span>
						</summary>
						<p>{faq.a}</p>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- ── Organisers ───────────────────────────────────── -->
	<section class="organisers">
		<div class="wrap">
			<p class="eyebrow" use:reveal>Brought to you by</p>
			<h2 use:reveal={60}>The people behind the day</h2>
			<p use:reveal={100}>
				Thrive Through Menopause is organised by TBFS alongside the National Centre for Integrative
				Medicine, a Bristol organisation working in integrative health and wellbeing.
			</p>
			<div class="marks" use:reveal={140}>
				<img src="/tbfs.png" alt="TBFS" width="201" height="126" />
				<img
					src="/ncim.png"
					alt="National Centre for Integrative Medicine"
					width="312"
					height="91"
				/>
			</div>
			<p class="note" use:reveal={180}>
				Enquiries: <a href="mailto:{event.contactEmail}">{event.contactEmail}</a>
			</p>
		</div>
	</section>

	<!-- ── Book ─────────────────────────────────────────── -->
	<section class="book">
		<div class="wrap narrow book-inner">
			<h2 use:reveal>Come and spend an afternoon with us.</h2>
			<p class="book-meta" use:reveal={60}>
				{event.dateLabel} · {event.timeLabel} · {event.venue}
			</p>
			<div class="book-cta" use:reveal={100}>
				<a class="btn" href={event.ticketsUrl} target="_blank" rel="noopener">Book your place</a>
				<a class="qr" href={event.ticketsUrl} target="_blank" rel="noopener">
					<img src="/qr.png" alt="Scan to book" width="294" height="308" />
					<span>or scan</span>
				</a>
			</div>
		</div>
	</section>

	<footer class="site-footer">
		<p class="foot-mark">Thrive <span>through menopause</span></p>
		<p>{event.address}</p>
	</footer>

	<a
		class="sticky-book"
		class:shown={pastHero}
		href={event.ticketsUrl}
		target="_blank"
		rel="noopener"
		tabindex={pastHero ? 0 : -1}>Book your place</a
	>
</div>

<style>
	/*
	 * Ivory ground, purple accent, one hairline system. Fraunces carries the
	 * voice (soft optical serif); Mulish does the reading.
	 */
	.ivory {
		--iv-ground: #f7f2e6;
		--iv-raised: #fffdf8;
		--iv-wash: #f0e8f7;
		--iv-purple: #6c4a9c;
		--iv-purple-deep: #3b2a57;
		--iv-purple-soft: #b79ada;
		--iv-ink: #2c2432;
		--iv-muted: #6b6072;
		--iv-line: #e0d4ec;

		--display: 'Fraunces Variable', 'Iowan Old Style', Georgia, serif;
		--body: 'Mulish Variable', ui-sans-serif, system-ui, sans-serif;

		background: var(--iv-ground);
		color: var(--iv-ink);
		font-family: var(--body);
		font-size: 1.0625rem;
		line-height: 1.75;
	}

	.skip {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 30;
		padding: 0.75rem 1.25rem;
		background: var(--iv-purple-deep);
		color: var(--iv-ground);
	}

	.skip:focus {
		left: 0;
	}

	:global(.ivory :focus-visible) {
		outline: 2px solid var(--iv-purple);
		outline-offset: 4px;
		border-radius: 4px;
	}

	/* Reveal ------------------------------------------------ */
	:global(.ivory .will-reveal) {
		opacity: 0;
		translate: 0 1.25rem;
		transition:
			opacity 0.7s cubic-bezier(0.22, 0.7, 0.28, 1),
			translate 0.7s cubic-bezier(0.22, 0.7, 0.28, 1);
	}

	:global(.ivory .is-visible) {
		opacity: 1;
		translate: none;
	}

	/* Shared ------------------------------------------------ */
	section {
		padding: clamp(4rem, 9vw, 8rem) clamp(1.25rem, 5vw, 3rem);
	}

	.wash {
		background: var(--iv-wash);
	}

	.wrap {
		max-width: 64rem;
		margin: 0 auto;
	}

	.wrap.narrow {
		max-width: 42rem;
	}

	h2 {
		margin: 0.5rem 0 0;
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 60,
			'WONK' 0,
			'opsz' 60;
		font-weight: 400;
		font-size: clamp(1.85rem, 4vw, 2.9rem);
		line-height: 1.14;
		letter-spacing: -0.015em;
		color: var(--iv-purple-deep);
		text-wrap: balance;
	}

	h3 {
		margin: 0;
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 60,
			'opsz' 20;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.3;
		color: var(--iv-purple-deep);
	}

	p {
		margin: 0;
	}

	.eyebrow {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.34em;
		text-transform: uppercase;
		color: var(--iv-purple);
	}

	.note {
		margin-top: 1rem;
		max-width: 38rem;
		font-size: 0.98rem;
		color: var(--iv-muted);
	}

	a {
		color: var(--iv-purple);
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
	}

	/* Buttons ----------------------------------------------- */
	.btn {
		display: inline-block;
		padding: 1rem 2.4rem;
		border-radius: 999px;
		border: 1px solid var(--iv-purple-deep);
		background: var(--iv-purple-deep);
		color: var(--iv-ground);
		font-weight: 700;
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition:
			background-color 0.25s ease,
			color 0.25s ease,
			translate 0.25s ease;
	}

	.btn:hover,
	.btn:focus-visible {
		background: transparent;
		color: var(--iv-purple-deep);
		translate: 0 -2px;
	}

	.btn.quiet {
		background: transparent;
		border-color: var(--iv-purple-soft);
		color: var(--iv-purple-deep);
	}

	.btn.quiet:hover,
	.btn.quiet:focus-visible {
		border-color: var(--iv-purple-deep);
		background: var(--iv-raised);
	}

	/* ── Hero ─────────────────────────────────────────── */
	.hero {
		position: relative;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: clamp(3rem, 8vw, 5rem) 1.25rem clamp(4rem, 8vw, 6rem);
		overflow: hidden;
		text-align: center;
	}

	.glow {
		position: absolute;
		top: 42%;
		left: 50%;
		width: min(120vw, 68rem);
		aspect-ratio: 1;
		translate: -50% -50%;
		background: radial-gradient(circle, rgb(183 154 218 / 0.28), transparent 62%);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-inner :global(.hero-lotus) {
		width: min(78vw, 34rem);
		height: auto;
		margin-bottom: clamp(0.25rem, 1vw, 1rem);
	}

	h1 {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.9rem;
	}

	.thrive {
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 80,
			'WONK' 0,
			'opsz' 144;
		font-weight: 300;
		font-size: clamp(3.4rem, 13vw, 7.5rem);
		line-height: 0.95;
		letter-spacing: 0.14em;
		text-indent: 0.14em;
		text-transform: uppercase;
		color: var(--iv-purple-deep);
	}

	.through {
		font-size: clamp(0.72rem, 2.2vw, 0.95rem);
		font-weight: 600;
		letter-spacing: 0.52em;
		text-indent: 0.52em;
		text-transform: uppercase;
		color: var(--iv-purple);
	}

	.hero-meta {
		margin-top: clamp(2rem, 5vw, 3rem);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.9rem;
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--iv-ink);
	}

	.dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--iv-purple-soft);
	}

	.hero-billing {
		margin-top: 0.9rem;
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 60,
			'opsz' 30;
		font-style: italic;
		font-size: clamp(1.1rem, 2.8vw, 1.5rem);
		color: var(--iv-muted);
	}

	.hero-cta {
		margin-top: clamp(2rem, 5vw, 2.75rem);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.85rem;
	}

	.cue {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		translate: -50% 0;
		width: 1.5rem;
		height: 3rem;
		display: grid;
		place-items: start center;
	}

	.cue span {
		width: 1px;
		height: 2.25rem;
		background: linear-gradient(to bottom, var(--iv-purple-soft), transparent);
		animation: drift 2.6s ease-in-out infinite;
	}

	@keyframes drift {
		0%,
		100% {
			opacity: 0.35;
			translate: 0 -0.35rem;
		}
		50% {
			opacity: 1;
			translate: 0 0.35rem;
		}
	}

	/* ── About ────────────────────────────────────────── */
	.lead {
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 60,
			'opsz' 60;
		font-weight: 400;
		font-size: clamp(1.5rem, 3.4vw, 2.35rem);
		line-height: 1.28;
		letter-spacing: -0.012em;
		color: var(--iv-purple-deep);
		max-width: 30ch;
		text-wrap: balance;
	}

	.two-col {
		margin-top: clamp(2rem, 4vw, 3rem);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
		max-width: 58rem;
	}

	/* ── Strands ──────────────────────────────────────── */
	.cards {
		margin-top: clamp(2.5rem, 5vw, 3.5rem);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1rem;
	}

	.card {
		background: var(--iv-raised);
		border: 1px solid var(--iv-line);
		border-radius: 1.5rem;
		padding: 1.9rem 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		scroll-margin-top: 2rem;
		transition:
			border-color 0.3s ease,
			translate 0.3s ease;
	}

	.card:hover {
		border-color: var(--iv-purple-soft);
		translate: 0 -3px;
	}

	.petal {
		width: 1.6rem;
		height: 1.6rem;
		color: var(--iv-purple-soft);
	}

	.petal svg {
		width: 100%;
		height: 100%;
	}

	.card p {
		font-size: 0.99rem;
		color: var(--iv-muted);
	}

	/* ── Timetable ────────────────────────────────────── */
	.timeline {
		position: relative;
		max-width: 44rem;
		margin: clamp(2.25rem, 5vw, 3rem) 0 0;
		padding: 0 0 0 clamp(4.5rem, 12vw, 6rem);
		list-style: none;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: clamp(3.4rem, 9.6vw, 4.6rem);
		top: 0.55rem;
		bottom: 0.55rem;
		width: 1px;
		background: linear-gradient(
			to bottom,
			transparent,
			var(--iv-purple-soft) 12%,
			var(--iv-purple-soft) 88%,
			transparent
		);
	}

	.timeline li {
		position: relative;
		padding: 0 0 1.9rem;
	}

	.timeline li::before {
		content: '';
		position: absolute;
		left: calc(clamp(3.4rem, 9.6vw, 4.6rem) - clamp(4.5rem, 12vw, 6rem) - 3.5px);
		top: 0.5rem;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--iv-ground);
		border: 1px solid var(--iv-purple);
	}

	.timeline time {
		position: absolute;
		left: calc(0px - clamp(4.5rem, 12vw, 6rem));
		top: 0.1rem;
		width: clamp(3rem, 8vw, 3.6rem);
		text-align: right;
		font-variant-numeric: tabular-nums;
		font-weight: 700;
		font-size: 0.92rem;
		letter-spacing: 0.04em;
		color: var(--iv-purple);
	}

	.slot p {
		margin-top: 0.15rem;
		font-size: 0.96rem;
		color: var(--iv-muted);
	}

	/* ── Exhibitors ───────────────────────────────────── */
	.tiles {
		margin: clamp(2rem, 4vw, 2.75rem) 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
		gap: 0.75rem;
	}

	.tiles li {
		background: var(--iv-raised);
		border: 1px solid var(--iv-line);
		border-radius: 1rem;
		padding: 1.15rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-height: 5.25rem;
		justify-content: center;
	}

	.tile-name {
		font-weight: 700;
		color: var(--iv-purple-deep);
	}

	.tile-cat {
		font-size: 0.88rem;
		color: var(--iv-muted);
	}

	/* ── Visiting ─────────────────────────────────────── */
	.visit-grid {
		margin-top: clamp(2rem, 4vw, 3rem);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: clamp(1.25rem, 3vw, 2.5rem);
		align-items: start;
	}

	.visit-main {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	address {
		font-style: normal;
		line-height: 1.8;
	}

	.when {
		font-weight: 700;
		color: var(--iv-purple-deep);
	}

	.link {
		display: inline-block;
		margin-right: 1.25rem;
		font-weight: 600;
	}

	.visit-panel {
		background: var(--iv-wash);
		border-radius: 1.5rem;
		padding: clamp(1.5rem, 3vw, 2.25rem);
	}

	.visit-panel dl {
		margin: 1.1rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.visit-panel dt {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--iv-purple);
		margin-bottom: 0.25rem;
	}

	.visit-panel dd {
		margin: 0;
		font-size: 0.98rem;
		color: var(--iv-ink);
	}

	/* ── FAQ ──────────────────────────────────────────── */
	.accordion {
		max-width: 44rem;
		margin-top: clamp(2rem, 4vw, 2.75rem);
		border-top: 1px solid var(--iv-line);
	}

	details {
		border-bottom: 1px solid var(--iv-line);
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.25rem 0;
		cursor: pointer;
		list-style: none;
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 60,
			'opsz' 20;
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--iv-purple-deep);
	}

	summary::-webkit-details-marker {
		display: none;
	}

	.plus {
		position: relative;
		flex: none;
		width: 1rem;
		height: 1rem;
	}

	.plus::before,
	.plus::after {
		content: '';
		position: absolute;
		inset: 50% 0 auto 0;
		height: 1px;
		background: var(--iv-purple);
		transition: rotate 0.3s ease;
	}

	.plus::after {
		rotate: 90deg;
	}

	details[open] .plus::after {
		rotate: 0deg;
	}

	details p {
		padding: 0 0 1.4rem;
		max-width: 36rem;
		color: var(--iv-muted);
	}

	/* ── Organisers ───────────────────────────────────── */
	.marks {
		margin-top: 2.25rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: clamp(2rem, 6vw, 3.5rem);
	}

	.marks img {
		height: auto;
		display: block;
	}

	.marks img:first-child {
		width: 7rem;
	}

	.marks img:last-child {
		width: 12rem;
	}

	.organisers p {
		margin-top: 1rem;
		max-width: 38rem;
	}

	/* ── Book ─────────────────────────────────────────── */
	.book {
		background: var(--iv-purple-deep);
		color: var(--iv-ground);
		text-align: center;
	}

	.book h2 {
		color: var(--iv-ground);
		font-size: clamp(1.9rem, 4.4vw, 3.1rem);
	}

	.book-meta {
		margin-top: 1.1rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: rgb(247 242 230 / 0.75);
	}

	.book-cta {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.75rem;
	}

	.book .btn {
		background: var(--iv-ground);
		border-color: var(--iv-ground);
		color: var(--iv-purple-deep);
	}

	.book .btn:hover,
	.book .btn:focus-visible {
		background: transparent;
		color: var(--iv-ground);
		border-color: var(--iv-ground);
	}

	.qr {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		color: rgb(247 242 230 / 0.7);
		font-size: 0.72rem;
		letter-spacing: 0.24em;
		text-transform: uppercase;
	}

	.qr img {
		width: 6.5rem;
		height: auto;
		display: block;
		border-radius: 0.5rem;
		background: #fff;
		padding: 0.4rem;
	}

	/* ── Footer ───────────────────────────────────────── */
	.site-footer {
		background: var(--iv-purple-deep);
		color: rgb(247 242 230 / 0.65);
		text-align: center;
		padding: 0 1.5rem clamp(3rem, 6vw, 4rem);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.88rem;
	}

	.foot-mark {
		font-family: var(--display);
		font-variation-settings:
			'SOFT' 80,
			'opsz' 40;
		font-weight: 300;
		font-size: 1.4rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--iv-ground);
	}

	.foot-mark span {
		display: block;
		font-family: var(--body);
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.4em;
		color: var(--iv-purple-soft);
	}

	/* ── Sticky booking bar (phones) ──────────────────── */
	.sticky-book {
		display: none;
	}

	@media (max-width: 620px) {
		.hero-meta {
			flex-direction: column;
			gap: 0.35rem;
		}

		.hero-meta .dot {
			display: none;
		}

		.sticky-book {
			position: fixed;
			left: 1rem;
			right: 1rem;
			bottom: 1rem;
			z-index: 20;
			display: block;
			padding: 0.95rem 1rem;
			border-radius: 999px;
			background: var(--iv-purple-deep);
			color: var(--iv-ground);
			text-align: center;
			text-decoration: none;
			font-weight: 700;
			letter-spacing: 0.06em;
			box-shadow: 0 0.6rem 1.6rem rgb(59 42 87 / 0.28);
			opacity: 0;
			translate: 0 130%;
			pointer-events: none;
			transition:
				opacity 0.35s ease,
				translate 0.35s cubic-bezier(0.22, 0.7, 0.28, 1);
		}

		.sticky-book.shown {
			opacity: 1;
			translate: none;
			pointer-events: auto;
		}

		.site-footer {
			padding-bottom: 6rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cue span,
		.btn,
		.card {
			animation: none;
			transition: none;
		}
	}
</style>
