export const courseLanguages = {
	// 'pt-br': 'Português do Brasil',
	// 'zh-cn': '简体中文',
	// 'zh-tw': '正體中文',
	// ar: 'العربية',
	de: 'Deutsch',
	en: 'English',
	// es: 'Español',
	// fr: 'Français',
	// hi: 'हिन्दी',
	// it: 'Italiano',
	// ja: '日本語',
	// ko: '한국어',
	// pl: 'Polski',
	// ru: 'Русский',
} as const;

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default courseLanguages;

export const rtlLanguages = new Set(['ar']);
