import type { Ticket } from './ticket';

export type Event = {
	date: string;
	dateFormatted?: string;
	description?: string;
	id: string;
	map_url?: string;
	name: string;
	slug: string;
	tickets?: Ticket[];
	time?: {
		start?: string;
		end?: string;
	};
};
