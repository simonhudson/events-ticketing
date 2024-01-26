import { useState } from 'react';
import { debounce } from '../../helpers/debounce';
import { httpStatusCodes } from '../../constants/httpStatusCodes';
import type { Ticket } from '../../../../types/ticket';

type FormFieldValues = {
	name: string;
	description: string;
	date: string;
	tickets: Ticket[];
};

const defaultFormFieldValues: FormFieldValues = {
	name: '',
	description: '',
	date: '',
	tickets: [],
};

const defaultTicketFieldValues: Ticket = {
	category: '',
	type: '',
	price: undefined,
	booking_fee: undefined,
	is_available: true,
};

export const AddEvent = () => {
	const [formFieldValues, setFormFieldValues] = useState<FormFieldValues>(defaultFormFieldValues);
	const [ticketFieldValues, setTicketFieldValues] = useState<Ticket>(defaultTicketFieldValues);

	const [feedbackMessage, setFeedbackMessage] = useState<
		{ type: 'error' | 'success'; message: string } | undefined
	>();

	const onSubmit = async (event: { preventDefault: () => void }) => {
		console.log('----------------');
		console.log(formFieldValues.tickets);
		console.log('----------------');

		event.preventDefault();
		const isValid =
			!!formFieldValues.name.length &&
			!!formFieldValues.description.length &&
			!!formFieldValues.date.length &&
			formFieldValues.tickets.length;

		if (isValid) {
			const postResponse = await fetch('http://localhost:3000/api/events', {
				method: 'post',
				body: JSON.stringify(formFieldValues),
				headers: { 'Content-Type': 'application/json' },
			});
			if (postResponse.status === httpStatusCodes.OK) {
				setFeedbackMessage({ type: 'success', message: 'Event added' });
			} else {
				setFeedbackMessage({ type: 'error', message: 'Unable to add event' });
			}
			setFormFieldValues(defaultFormFieldValues);
		}
	};

	const handleFieldChange = debounce((e: { target: { name: string; value: string } }) => {
		setFormFieldValues({
			...formFieldValues,
			[e.target.name]: e.target.value,
		});
	}, 500);

	const handleTicketFieldChange = debounce((e: { target: { name: string; value: string; type: string } }) => {
		setTicketFieldValues({
			...ticketFieldValues,
			[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value,
		});
	}, 500);

	const addTicket = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const isValid =
			!!ticketFieldValues.category.length && !!ticketFieldValues.type.length && !isNaN(ticketFieldValues.price);
		if (isValid) {
			setFormFieldValues({
				...formFieldValues,
				tickets: [...formFieldValues.tickets, ticketFieldValues],
			});
			setTicketFieldValues(defaultTicketFieldValues);
		}
	};

	return (
		<>
			{formFieldValues.tickets.map((ticket, index) => (
				<p key={index}>{ticket.name}</p>
			))}
			<h1>Add event</h1>
			{feedbackMessage && <p className={feedbackMessage.type}>{feedbackMessage.message}</p>}
			<form id="add-event" name="add-event" onSubmit={(e) => onSubmit(e)}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" onChange={(e) => handleFieldChange(e)} />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" id="description" name="description" onChange={(e) => handleFieldChange(e)} />
				</div>
				<div>
					<label htmlFor="date">Date</label>
					<input type="date" id="date" name="date" onChange={(e) => handleFieldChange(e)} />
				</div>
				<fieldset>
					<legend>Tickets</legend>
					<div>
						<label htmlFor="category" aria-describedby="category-hint">
							Category
						</label>
						<span id="category-hint">(e.g. "General admission")</span>
						<input type="text" id="category" name="category" onChange={(e) => handleTicketFieldChange(e)} />
					</div>
					<div>
						<label htmlFor="type" aria-describedby="type-hint">
							Type
						</label>
						<span id="type-hint">(e.g. "Adult", "Family")</span>
						<input type="text" id="type" name="type" onChange={(e) => handleTicketFieldChange(e)} />
					</div>
					<div>
						<label htmlFor="description" aria-describedby="description-hint">
							Description
						</label>
						<span id="description-hint">(e.g. "Under 16 years", "2 adults and 2 children")</span>
						<input
							type="text"
							id="description"
							name="description"
							onChange={(e) => handleTicketFieldChange(e)}
						/>
					</div>
					<div>
						<label htmlFor="price">Price</label>
						<input type="number" id="price" name="price" onChange={(e) => handleTicketFieldChange(e)} />
					</div>
					<div>
						<label htmlFor="booking_fee">Booking fee</label>
						<input
							type="number"
							id="booking_fee"
							name="booking_fee"
							onChange={(e) => handleTicketFieldChange(e)}
						/>
					</div>
					<div>
						<label htmlFor="is_available">Is available</label>
						<input
							type="checkbox"
							id="is_available"
							name="is_available"
							checked
							onChange={(e) => handleTicketFieldChange(e)}
						/>
					</div>
					<input type="button" value="Add ticket" onClick={addTicket} />
				</fieldset>
				<input type="submit" value="Add event" />
			</form>
		</>
	);
};
