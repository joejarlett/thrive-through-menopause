import { redirect } from '@sveltejs/kit';

/** The ivory design is now the site itself — keep any shared /ivory links working. */
export function load() {
	redirect(308, '/');
}
