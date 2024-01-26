import type { Ticket } from './ticket';

export type Event = {
	id: string;
	name: string;
	description?: string;
	date: string;
	dateFormatted?: string;
	tickets?: Ticket[];
};
