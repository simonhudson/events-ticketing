import express, { Request, Response } from 'express';
import { get } from '../helpers/get';
import { handleResponse } from '../helpers/handleResponse';
const router = express.Router();
import type { Event } from '../types/event';

export const getEvents = async () => {
	const eventsData: Event[] = await get({ endpoint: 'events' });
	const tickets = await get({ endpoint: `tickets` });
	eventsData.forEach((event: Event, index: number) => {
		const filteredTickets = tickets.filter((ticket: any) => ticket.event_id == event.id);
		eventsData[index].tickets = filteredTickets[0].categories;
	});
	return eventsData;
};

router.get('/', async (_req: Request, res: Response) => {
	const events = await getEvents();
	handleResponse({ res, data: events });
});

router.get('/:event_id', async (req: Request, res: Response) => {
	const events = await getEvents();
	const eventId: number = parseInt(req.params.event_id, 10);
	const event = events.filter((event: any) => event.id == eventId);
	handleResponse({ res, data: event });
});

export default router;
