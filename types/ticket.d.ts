export type Ticket = {
	type:
		| 'Adult'
		| 'Child'
		| 'Senior'
		| 'Student'
		| 'Family'
		| 'Group'
		| 'Concession'
		| 'Carer'
		| 'Companion'
		| 'Other';
	info?: string;
	price?: number;
	booking_fee?: number;
	is_available: boolean;
};
