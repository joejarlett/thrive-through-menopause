<script lang="ts">
	/** Decorative line-art lotus that sits behind the wordmark. */
	let { class: className = '' }: { class?: string } = $props();

	/** Pointed leaf, base at the origin, tip at (0, -h). */
	const leaf = (h: number, w: number) =>
		`M 0 0 C ${-w} ${-h * 0.44}, ${-w * 0.7} ${-h * 0.84}, 0 ${-h}` +
		` C ${w * 0.7} ${-h * 0.84}, ${w} ${-h * 0.44}, 0 0 Z`;

	/** Swept petal — leans away from the centre, for the outer fan. */
	const sweep = (h: number, w: number) =>
		`M 0 0 C ${-w * 0.5} ${-h * 0.46}, ${-w * 0.55} ${-h * 0.84}, ${w * 0.22} ${-h}` +
		` C ${w * 1.2} ${-h * 0.76}, ${w * 1.1} ${-h * 0.32}, 0 0 Z`;

	// [angle from vertical, length, half-width, swept?] — mirrored either side
	const petals: Array<[number, number, number, boolean]> = [
		[0, 332, 94, false],
		[29, 320, 90, false],
		[58, 380, 96, true],
		[86, 435, 100, true],
		[114, 300, 78, true]
	];
</script>

<svg
	class={className}
	viewBox="0 0 900 502"
	fill="none"
	aria-hidden="true"
	focusable="false"
	preserveAspectRatio="xMidYMid meet"
>
	<g
		transform="translate(450 360)"
		stroke="var(--color-lilac-petal)"
		stroke-width="11"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		{#each petals as [angle, h, w, swept] (angle)}
			<path d={swept ? sweep(h, w) : leaf(h, w)} transform="rotate({-angle}) scale(-1 1)" />
			{#if angle !== 0}
				<path d={swept ? sweep(h, w) : leaf(h, w)} transform="rotate({angle})" />
			{/if}
		{/each}
	</g>
</svg>
