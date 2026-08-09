/**
 * Gentle scroll reveal. Adds `is-visible` once the element enters the viewport;
 * anyone who has asked for reduced motion simply gets the final state immediately.
 */
export function reveal(node: HTMLElement, delay = 0) {
	if (typeof IntersectionObserver === 'undefined') return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return;
	}

	node.classList.add('will-reveal');
	node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.classList.add('is-visible');
			observer.disconnect();
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.04 }
	);

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
}
