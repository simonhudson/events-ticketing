import express, { Request, Response } from 'express';
import { get } from '../helpers/get';
import { post } from '../helpers/post';
import { handleResponse } from '../helpers/handleResponse';
import { handleError } from '../helpers/handleError';
const router = express.Router();
import type { Event } from '../../types/event';
import { randomUUID } from 'crypto';
import { slugify } from '../helpers/slugify';
import { httpStatusCodes } from '../constants/httpStatusCodes';

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

	if (!Object.keys(requestBody).length)
		return res.send(handleError({ req, err: 'No request body found', statusCode: httpStatusCodes.BAD_REQUEST }));

	const existingEvents: Event[] = await get({ req, endpoint: 'events' });
	const newEventId = randomUUID();

	const newEvent: Event = {
		date: requestBody.date,
		description: requestBody.description,
		id: newEventId,
		location: requestBody.location,
		map_url: requestBody.map_url,
		name: requestBody.name,
		slug: `${slugify(requestBody.name)}-${requestBody.date}`,
		tickets: requestBody.tickets,
		time: {
			start: requestBody.time.start,
			end: requestBody.time.end,
		},
	};

	try {
		await post({ req, endpoint: 'events', data: [...existingEvents, newEvent] });
		handleResponse({ res, data: { message: 'Event created successfully' } });
	} catch (err: any) {
		handleError({ req, err, statusCode: err.statusCode });
	}
});

router.get('/:slug', async (req: Request, res: Response) => {
	const events = await getEvents({ req });
	const event = events.filter((event: any) => event.slug === req.params.slug);
	handleResponse({ res, data: event });
});

export default router;
