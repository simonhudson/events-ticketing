import express, { Request, Response } from 'express';
import { get } from '../helpers/get';
import { post } from '../helpers/post';
import { handleResponse } from '../helpers/handleResponse';
import { handleError } from '../helpers/handleError';
const router = express.Router();
import type { Event } from '../types/event';
import type { Ticket, TicketCategory } from '../types/ticket';
import { randomUUID } from 'crypto';

export const getEvents = async ({ req }: { req: Request }) => {
	const eventsData: Event[] = await get({ req, endpoint: 'events' });
	const tickets = await get({ req, endpoint: `tickets` });
	eventsData.forEach((event: Event, index: number) => {
		const filteredTickets = tickets.filter((ticket: any) => ticket.event_id == event.id);
		eventsData[index].tickets = filteredTickets[0].categories;
	});
	return eventsData;
};

router.get('/', async (req: Request, res: Response) => {
	const events = await getEvents({ req });
	handleResponse({ res, data: events });
});

router.post('/', async (req: Request, res: Response) => {
	const requestBody = req.body;
	if (!Object.keys(requestBody).length) res.send(handleError({ req, err: 'No request body found' }));

	const existingEvents: Event[] = await get({ req, endpoint: 'events' });
	const existingTickets: Ticket[] = await get({ req, endpoint: 'tickets' });

	const newEventId = randomUUID();

	const newEvent: Event = {
		id: newEventId,
		name: requestBody.name,
		description: requestBody.description,
		date: requestBody.date,
	};

	const createNewEventTicketInfo = () => {
		const returnData: TicketCategory[] = [];
		requestBody.tickets.forEach((ticket: any, index: number) => {
			const newTicket: TicketCategory = {
				category_id: randomUUID(),
				name: ticket.name,
				description: ticket.description || null,
				price: ticket.price || 0,
				booking_fee: ticket.booking_fee || 0,
				is_available: ticket.is_available || true,
			};
			returnData.push(newTicket);
		});
		return returnData;
	};

	const newTicket: Ticket = {
		id: randomUUID(),
		event_id: newEvent.id,
		categories: createNewEventTicketInfo(),
	};

	const eventDataToInsert = [...existingEvents, newEvent];
	const ticketDataToInsert = [...existingTickets, newTicket];

	try {
		await post({ req, endpoint: 'events', data: eventDataToInsert });
		await post({ req, endpoint: 'tickets', data: ticketDataToInsert });
		handleResponse({ res, data: { message: 'Event created successfully' } });
	} catch (err: any) {
		handleError({ req, err });
	}
});

router.get('/:event_id', async (req: Request, res: Response) => {
	const events = await getEvents({ req });
	const eventId: number = parseInt(req.params.event_id, 10);
	const event = events.filter((event: any) => event.id == eventId);
	handleResponse({ res, data: event });
});

export default router;
