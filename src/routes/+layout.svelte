<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

	/** Palette is chosen by route so the alternative can be viewed side by side. */
	let palette = $derived(page.url.pathname.startsWith('/ivory') ? 'ivory' : 'lilac');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={palette === 'ivory' ? '#f7f1e3' : '#e2a9f0'} />
</svelte:head>

<div class="palette" data-palette={palette}>{@render children()}</div>

<style>
	.palette {
		display: contents;
	}
</style>
