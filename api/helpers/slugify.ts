export const slugify = (str: string) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[ ]{1,}/g, '-');
