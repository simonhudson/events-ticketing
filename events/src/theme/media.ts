import { breakpoints } from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string): string =>
	`@media (min-width: ${viewportWidth}px) { ${styles} }`;

type Media = {
	phonePortrait: (string: string) => string;
	phoneLandscape: (string: string) => string;
	tabletPortrait: (string: string) => string;
	tabletLandscape: (string: string) => string;
	desktop: (string: string) => string;
	prefersReducedMotion: (string: string) => string;
};

export const media: Media = {
	phonePortrait: (styles: string) => applyStyles(breakpoints['phone-p'], styles),
	phoneLandscape: (styles: string) => applyStyles(breakpoints['phone-l'], styles),
	tabletPortrait: (styles: string) => applyStyles(breakpoints['tablet-p'], styles),
	tabletLandscape: (styles: string) => applyStyles(breakpoints['tablet-l'], styles),
	desktop: (styles: string) => applyStyles(breakpoints.desktop, styles),
	prefersReducedMotion: (styles: string) => `@media (prefers-reduced-motion: reduce) { ${styles} }`,
};
