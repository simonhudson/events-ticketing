import { useState, useRef } from 'react';
import { httpStatusCodes } from '../../constants/httpStatusCodes';
import { Form, Fieldset, FieldRow, FieldItem } from '../form/form.styles';
import { Button } from '../button';
import { Input } from '../form/input';
import { TextArea } from '../form/textarea';
import { Alert } from '../alert';
import type { Ticket } from '../../../../types/ticket';

type FeedbackMessage = {
	type: 'danger' | 'success';
	message: string;
};

export const AddEvent = () => {
	const [tickets, setTickets] = useState<Ticket[]>([]);
	const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage | undefined>();

	const nameFieldRef = useRef<HTMLInputElement>(null);
	const descriptionFieldRef = useRef<HTMLTextAreaElement>(null);
	const mapFieldRef = useRef<HTMLInputElement>(null);
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
		const mapUrlValue = mapFieldRef?.current?.value;
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
					map_url: mapUrlValue,
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
			else setFeedbackMessage({ type: 'danger', message: 'Unable to add event' });
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
			{feedbackMessage && <Alert type={feedbackMessage.type} message={feedbackMessage.message} />}
			<Form id="add-event" name="add-event" onSubmit={(e) => onSubmit(e)} noValidate>
				<FieldRow>
					<FieldItem>
						<Input
							errorText="Please enter a name for your event"
							fieldRef={nameFieldRef}
							id="name"
							labelText="Name"
							required={true}
						/>
					</FieldItem>
				</FieldRow>
				<FieldRow>
					<FieldItem>
						<TextArea
							fieldRef={descriptionFieldRef}
							id="description"
							labelText="Description"
							rows={10}
							cols={50}
						/>
					</FieldItem>
				</FieldRow>
				<FieldRow>
					<FieldItem>
						<Input fieldRef={mapFieldRef} id="map_url" labelText="Map URL" />
					</FieldItem>
				</FieldRow>
				<FieldRow>
					<FieldItem>
						<Input
							errorText="Please enter a date for your event"
							fieldRef={dateFieldRef}
							id="date"
							labelText="Date"
							required={true}
							type="date"
						/>
					</FieldItem>
				</FieldRow>
				<FieldRow>
					<FieldItem>
						<Input fieldRef={timeStartFieldRef} id="timeStart" labelText="Start Time" type="time" />
					</FieldItem>
					<FieldItem>
						<Input fieldRef={timeEndFieldRef} id="timeEnd" labelText="Finish Time" type="time" />
					</FieldItem>
				</FieldRow>
				<Fieldset>
					<legend>Add tickets</legend>
					<FieldRow>
						<FieldItem>
							<Input
								errorText="Please enter a type for this ticket"
								description='(e.g. "Adult", "Family")'
								fieldRef={ticketTypeFieldRef}
								id="type"
								labelText="Type"
								required={true}
							/>
						</FieldItem>
					</FieldRow>
					<FieldRow>
						<FieldItem>
							<Input
								description='(e.g. "General admission", "Balcony seating")'
								fieldRef={ticketCategoryFieldRef}
								id="category"
								labelText="Category"
							/>
						</FieldItem>
					</FieldRow>
					<FieldRow>
						<FieldItem>
							<Input
								description='(e.g. "Under 16 years", "2 adults and 2 children")'
								fieldRef={ticketDescriptionFieldRef}
								id="description"
								labelText="Description"
							/>
						</FieldItem>
					</FieldRow>
					<FieldRow>
						<FieldItem>
							<Input
								errorText="Please enter a price for this ticket"
								fieldRef={ticketPriceFieldRef}
								id="price"
								labelText="Price"
								required={true}
								type="number"
							/>
						</FieldItem>
						<FieldItem>
							<Input
								fieldRef={ticketBookingFeeFieldRef}
								id="booking_fee"
								labelText="Booking fee"
								type="number"
								step=".01"
							/>
						</FieldItem>
					</FieldRow>
					<Button label="Add ticket" onClick={addTicket} />
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
				</Fieldset>
				<Button type="submit" label="Add event" />
			</Form>
		</>
	);
};
