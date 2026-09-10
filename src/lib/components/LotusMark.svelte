<script lang="ts">
	/**
	 * Fine-line lotus. Draws itself petal by petal on load, then breathes very
	 * slowly - a calm entrance rather than an animation you notice twice.
	 */
	let { class: className = '' }: { class?: string } = $props();

	const leaf = (h: number, w: number) =>
		`M 0 0 C ${-w} ${-h * 0.44}, ${-w * 0.7} ${-h * 0.84}, 0 ${-h}` +
		` C ${w * 0.7} ${-h * 0.84}, ${w} ${-h * 0.44}, 0 0 Z`;

	const sweep = (h: number, w: number) =>
		`M 0 0 C ${-w * 0.5} ${-h * 0.46}, ${-w * 0.55} ${-h * 0.84}, ${w * 0.22} ${-h}` +
		` C ${w * 1.2} ${-h * 0.76}, ${w * 1.1} ${-h * 0.32}, 0 0 Z`;

	// [angle from vertical, length, half-width, swept?]
	const petals: Array<[number, number, number, boolean]> = [
		[0, 332, 94, false],
		[29, 320, 90, false],
		[58, 380, 96, true],
		[86, 435, 100, true],
		[114, 300, 78, true]
	];

	/** Centre outwards, so the bloom opens from the middle. */
	const paths = petals.flatMap(([angle, h, w, swept], ring) => {
		const d = swept ? sweep(h, w) : leaf(h, w);
		const mirrored = { d, transform: `rotate(${-angle}) scale(-1 1)`, ring };
		return angle === 0 ? [mirrored] : [mirrored, { d, transform: `rotate(${angle})`, ring }];
	});
</script>

<svg
	class="lotus {className}"
	viewBox="0 0 900 502"
	fill="none"
	aria-hidden="true"
	focusable="false"
	preserveAspectRatio="xMidYMid meet"
>
	<g transform="translate(450 360)">
		{#each paths as path, i (i)}
			<path d={path.d} transform={path.transform} pathLength="1" style="--i: {path.ring}" />
		{/each}
	</g>
</svg>

<style>
	.lotus {
		display: block;
		overflow: visible;
		animation: breathe 11s ease-in-out 2.6s infinite;
	}

	path {
		fill: none;
		stroke: var(--iv-purple-soft);
		stroke-width: 3.4;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: draw 1.7s cubic-bezier(0.32, 0.72, 0.24, 1) forwards;
		animation-delay: calc(var(--i) * 160ms + 120ms);
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes breathe {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.018);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.lotus {
			animation: none;
		}

		path {
			animation: none;
			stroke-dashoffset: 0;
		}
	}
</style>
