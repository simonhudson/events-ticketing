type TicketCategory = {
	category_id: number;
	name: 'Adult' | 'Child' | 'Under 5' | 'Family';
	description?: string;
	price: number;
	booking_fee: number;
	isAvailable: boolean;
};

export type Ticket = {
	id: number;
	event_id: number;
	categories: TicketCategory[];
};
