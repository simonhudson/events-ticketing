const mapping = ['access-nav', 'site-header'];

export const zIndex = (key: string): number => (mapping.includes(key) ? mapping.indexOf(key) + 1 : 0);
