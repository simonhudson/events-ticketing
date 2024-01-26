export type Ticket = {
	category: string;
	type: string;
	description?: string;
	price?: number;
	booking_fee?: number;
	is_available: boolean;
};
