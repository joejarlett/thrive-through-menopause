<script lang="ts">
	/** Magenta blob plus concentric contour rings in the bottom-right corner. */
	const rings = Array.from({ length: 10 }, (_, i) => ({
		rx: 16 + i * 15,
		ry: 12 + i * 11.5
	}));
</script>

<svg
	class="corner"
	viewBox="0 0 260 300"
	fill="none"
	aria-hidden="true"
	focusable="false"
	preserveAspectRatio="xMaxYMax meet"
>
	<path d="M260 0v300H172c-52-44-64-114-22-172C176 90 216 34 260 0Z" fill="var(--color-blob)" />
	<g stroke="var(--color-contour)" stroke-width="1.5" opacity="0.85">
		{#each rings as r (r.rx)}
			<ellipse cx="244" cy="226" rx={r.rx} ry={r.ry} transform="rotate(-40 244 226)" />
		{/each}
	</g>
</svg>

<style>
	.corner {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 0;
		width: 26cqw;
		height: auto;
		pointer-events: none;
	}
</style>
