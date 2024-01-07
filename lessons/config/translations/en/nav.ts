/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	/* Example of a collapsable header and a nested item */
	// { text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	// { text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

	{ text: 'Start Here', header: true, key: 'start-here' },
	{ text: 'What you\'ll learn', slug: '001-introduction/001-what-you-will-learn', key: '001-introduction/001-what-you-will-learn' },

] as const;