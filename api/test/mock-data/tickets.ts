import type { Ticket } from '../../../types/ticket';

export const Ticket1: Ticket = {
	type: 'Adult',
	info: 'This is some info about the ticket',
	price: 10.99,
	booking_fee: 1.99,
	is_available: true,
};

export const Ticket2: Ticket = {
	type: 'Child',
	info: 'Under 16 years old',
	price: 7.99,
	booking_fee: 1.99,
	is_available: true,
};

export const Ticket3: Ticket = {
	type: 'Vip',
	info: '',
	price: 700.99,
	booking_fee: 1.99,
	is_available: true,
};

export const MockTickets = [Ticket1, Ticket2, Ticket3];
