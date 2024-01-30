export type Ticket = {
	type:
		| 'Adult'
		| 'Carer'
		| 'Child'
		| 'Companion'
		| 'Concession'
		| 'Family'
		| 'Group'
		| 'Other'
		| 'Senior'
		| 'Student'
		| 'VIP';
	info?: string;
	price?: number;
	booking_fee?: number;
	is_available: boolean;
};
