import type { Ticket } from '../../../../types/ticket';

type SubmitEventArgs = {
	name: string;
	description?: string;
	location: string;
	map_url?: string;
	date: string;
	tickets: Ticket[];
	time?: {
		start?: string;
		end?: string;
	};
};

export const submitEvent = async ({ name, description, location, map_url, date, tickets, time }: SubmitEventArgs) => {
	const response = await fetch('http://localhost:3000/api/events', {
		method: 'post',
		body: JSON.stringify({
			name,
			description,
			location,
			map_url,
			date,
			tickets,
			time,
		}),
		headers: { 'Content-Type': 'application/json' },
	});
	return response;
};
