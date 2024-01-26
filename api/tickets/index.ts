import express, { Request, Response } from 'express';
import { get } from '../helpers/get';
import { handleResponse } from '../helpers/handleResponse';
const router = express.Router();
import type { Ticket } from '../types/ticket';

router.get('/', async (_req: Request, res: Response) => {
	const tickets: Ticket[] = await get({ req, endpoint: 'tickets' });
	handleResponse({ res, data: tickets });
});

router.get('/:event_id', async (req: Request, res: Response) => {
	const tickets: Ticket[] = await get({ req, endpoint: `tickets` });
	const filteredTickets: Ticket[] = tickets.filter((ticket: any) => ticket.event_id === req.params.event_id);
	handleResponse({ res, data: filteredTickets });
});

export default router;
