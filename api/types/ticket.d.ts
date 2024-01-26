export type TicketCategory = {
	category_id: string;
	name: 'Adult' | 'Child' | 'Under 5' | 'Family';
	description?: string;
	price: number;
	booking_fee?: number;
	is_available: boolean;
};

export type Ticket = {
	id: string;
	event_id: string;
	categories: TicketCategory[];
};
