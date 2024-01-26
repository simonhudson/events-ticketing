import { useState, useRef } from 'react';
import { httpStatusCodes } from '../../constants/httpStatusCodes';
import type { Ticket } from '../../../../types/ticket';

type FeedbackMessage = {
	type: 'error' | 'success';
	message: string;
};

export const AddEvent = () => {
	const [tickets, setTickets] = useState<Ticket[]>([]);
	const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage | undefined>();

	const nameFieldRef = useRef<HTMLInputElement>(null);
	const descriptionFieldRef = useRef<HTMLInputElement>(null);
	const dateFieldRef = useRef<HTMLInputElement>(null);
	const timeStartFieldRef = useRef<HTMLInputElement>(null);
	const timeEndFieldRef = useRef<HTMLInputElement>(null);

	const ticketCategoryFieldRef = useRef<HTMLInputElement>(null);
	const ticketTypeFieldRef = useRef<HTMLInputElement>(null);
	const ticketDescriptionFieldRef = useRef<HTMLInputElement>(null);
	const ticketPriceFieldRef = useRef<HTMLInputElement>(null);
	const ticketBookingFeeFieldRef = useRef<HTMLInputElement>(null);

	const onSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const nameValue = nameFieldRef?.current?.value;
		const descriptionValue = descriptionFieldRef?.current?.value;
		const dateValue = dateFieldRef?.current?.value;
		const timeStartValue = timeStartFieldRef?.current?.value;
		const timeEndValue = timeEndFieldRef?.current?.value;

		const isValid = !!nameValue?.length && !!descriptionValue?.length && !!dateValue?.length && tickets.length;
		if (isValid) {
			const postResponse = await fetch('http://localhost:3000/api/events', {
				method: 'post',
				body: JSON.stringify({
					name: nameValue,
					description: descriptionValue,
					date: dateValue,
					tickets,
					time: {
						start: timeStartValue,
						end: timeEndValue,
					},
				}),
				headers: { 'Content-Type': 'application/json' },
			});
			if (postResponse.status === httpStatusCodes.OK)
				setFeedbackMessage({ type: 'success', message: 'Event added' });
			else setFeedbackMessage({ type: 'error', message: 'Unable to add event' });
		}
	};

	const addTicket = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const categoryValue = ticketCategoryFieldRef?.current?.value;
		const typeValue = ticketTypeFieldRef?.current?.value;
		const descriptionValue = ticketDescriptionFieldRef?.current?.value;
		const priceValue = ticketPriceFieldRef?.current?.value;
		const bookingFeeValue = ticketBookingFeeFieldRef?.current?.value;

		const isValid =
			!!categoryValue?.length &&
			!!typeValue?.length &&
			!isNaN(Number(priceValue)) &&
			!isNaN(Number(bookingFeeValue));
		if (isValid) {
			const newTicket: Ticket = {
				category: categoryValue,
				type: typeValue,
				description: descriptionValue,
				price: parseFloat(Number(priceValue).toFixed(2)),
				booking_fee: parseFloat(Number(bookingFeeValue).toFixed(2)),
				is_available: true,
			};
			setTickets([...tickets, newTicket]);
		}
	};

	return (
		<>
			<h1>Add event</h1>
			{feedbackMessage && <p className={feedbackMessage.type}>{feedbackMessage.message}</p>}
			<form id="add-event" name="add-event" onSubmit={(e) => onSubmit(e)}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" ref={nameFieldRef} />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" id="description" name="description" ref={descriptionFieldRef} />
				</div>
				<div>
					<label htmlFor="date">Date</label>
					<input type="date" id="date" name="date" ref={dateFieldRef} />
				</div>
				<div>
					<label htmlFor="timeStart">Start time</label>
					<input type="time" id="timeStart" name="timeStart" ref={timeStartFieldRef} />
				</div>
				<div>
					<label htmlFor="timeEnd">Finish time</label>
					<input type="time" id="timeEnd" name="timeEnd" ref={timeEndFieldRef} />
				</div>
				<fieldset>
					<legend>Tickets</legend>
					<div>
						<label htmlFor="category" aria-describedby="category-hint">
							Category
						</label>
						<span id="category-hint">(e.g. "General admission")</span>
						<input type="text" id="category" name="category" ref={ticketCategoryFieldRef} />
					</div>
					<div>
						<label htmlFor="type" aria-describedby="type-hint">
							Type
						</label>
						<span id="type-hint">(e.g. "Adult", "Family")</span>
						<input type="text" id="type" name="type" ref={ticketTypeFieldRef} />
					</div>
					<div>
						<label htmlFor="description" aria-describedby="description-hint">
							Description
						</label>
						<span id="description-hint">(e.g. "Under 16 years", "2 adults and 2 children")</span>
						<input type="text" id="description" name="description" ref={ticketDescriptionFieldRef} />
					</div>
					<div>
						<label htmlFor="price">Price</label>
						<input type="number" id="price" name="price" step=".01" ref={ticketPriceFieldRef} />
					</div>
					<div>
						<label htmlFor="booking_fee">Booking fee</label>
						<input
							type="number"
							id="booking_fee"
							name="booking_fee"
							step=".01"
							ref={ticketBookingFeeFieldRef}
						/>
					</div>
					<input type="button" value="Add ticket" onClick={addTicket} />
					{!!tickets.length && (
						<>
							<p>Tickets added:</p>
							<ul>
								{tickets.map((ticket, index) => (
									<li key={index}>
										{ticket.category}, {ticket.type}, {ticket.price}, {ticket.booking_fee}
									</li>
								))}
							</ul>
						</>
					)}
				</fieldset>
				<input type="submit" value="Add event" />
			</form>
		</>
	);
};
