<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

	/** Ivory is the site; the poster reproduction keeps the printed lilac. */
	let palette = $derived(page.url.pathname.startsWith('/poster') ? 'lilac' : 'ivory');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={palette === 'ivory' ? '#f7f2e6' : '#e2a9f0'} />
</svelte:head>

<div class="palette" data-palette={palette}>{@render children()}</div>

<style>
	.palette {
		display: contents;
	}
</style>
