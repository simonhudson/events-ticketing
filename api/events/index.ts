import express, { Request, Response } from 'express';
import { get } from '../helpers/get';
import { post } from '../helpers/post';
import { handleResponse } from '../helpers/handleResponse';
import { handleError } from '../helpers/handleError';
const router = express.Router();
import type { Event } from '../../types/event';
import { randomUUID } from 'crypto';

export const getEvents = async ({ req }: { req: Request }) => {
	const events: Event[] = await get({ req, endpoint: 'events' });
	events.forEach((event) => {
		event.dateFormatted = new Date(event.date).toLocaleDateString('en-GB', {
			weekday: 'short',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	});
	return events;
};

router.get('/', async (req: Request, res: Response) => {
	const events = await getEvents({ req });
	handleResponse({ res, data: events });
});

router.post('/', async (req: Request, res: Response) => {
	const requestBody = req.body;

	if (!Object.keys(requestBody).length) return res.send(handleError({ req, err: 'No request body found' }));

	const existingEvents: Event[] = await get({ req, endpoint: 'events' });
	const newEventId = randomUUID();

	const newEvent: Event = {
		id: newEventId,
		name: requestBody.name,
		description: requestBody.description,
		date: requestBody.date,
		tickets: requestBody.tickets,
	};

	try {
		await post({ req, endpoint: 'events', data: [...existingEvents, newEvent] });
		handleResponse({ res, data: { message: 'Event created successfully' } });
	} catch (err: any) {
		handleError({ req, err });
	}
});

router.get('/:event_id', async (req: Request, res: Response) => {
	const events = await getEvents({ req });
	const event = events.filter((event: any) => event.id === req.params.event_id);
	handleResponse({ res, data: event });
});

export default router;
