import { useState, useRef } from 'react';
import { httpStatusCodes } from '../../constants/httpStatusCodes';
import { Form, Fieldset, FieldRow, FieldItem, Legend } from '../form/form.styles';
import { Button } from '../button';
import { Input } from '../form/input';
import { TextArea } from '../form/textarea';
import { Select } from '../form/select';
import { Alert } from '../alert';
import { TicketsList } from '../tickets-list';
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
	const locationFieldRef = useRef<HTMLTextAreaElement>(null);
	const mapFieldRef = useRef<HTMLInputElement>(null);
	const dateFieldRef = useRef<HTMLInputElement>(null);
	const timeStartFieldRef = useRef<HTMLInputElement>(null);
	const timeEndFieldRef = useRef<HTMLInputElement>(null);

	const ticketTypeFieldRef = useRef<HTMLSelectElement>(null);
	const ticketInfoFieldRef = useRef<HTMLInputElement>(null);
	const ticketPriceFieldRef = useRef<HTMLInputElement>(null);
	const ticketBookingFeeFieldRef = useRef<HTMLInputElement>(null);

	const clearForm = () => {
		setTickets([]);
		clearTicketForm();
		nameFieldRef.current!.value = '';
		descriptionFieldRef.current!.value = '';
		locationFieldRef.current!.value = '';
		mapFieldRef.current!.value = '';
		dateFieldRef.current!.value = '';
		timeStartFieldRef.current!.value = '';
		timeEndFieldRef.current!.value = '';
	};

	const clearTicketForm = () => {
		ticketTypeFieldRef.current!.value = '';
		ticketInfoFieldRef.current!.value = '';
		ticketPriceFieldRef.current!.value = '';
		ticketBookingFeeFieldRef.current!.value = '';
	};

	const onSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const nameValue = nameFieldRef?.current?.value;
		const descriptionValue = descriptionFieldRef?.current?.value;
		const locationValue = locationFieldRef?.current?.value;
		const mapUrlValue = mapFieldRef?.current?.value;
		const dateValue = dateFieldRef?.current?.value;
		const timeStartValue = timeStartFieldRef?.current?.value;
		const timeEndValue = timeEndFieldRef?.current?.value;

		const isValid = !!nameValue?.length && !!locationValue?.length && !!dateValue?.length && tickets.length;
		if (isValid) {
			const postResponse = await fetch('http://localhost:3000/api/events', {
				method: 'post',
				body: JSON.stringify({
					name: nameValue,
					description: descriptionValue,
					location: locationValue,
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
			if (postResponse.status === httpStatusCodes.OK) {
				setFeedbackMessage({
					type: 'success',
					message: `You have successfully added <strong>${nameValue}</strong>`,
				});
				clearForm();
			} else {
				setFeedbackMessage({ type: 'danger', message: 'Unable to add event' });
			}
		}
	};

	const addTicket = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const typeValue = ticketTypeFieldRef?.current?.value;
		const infoValue = ticketInfoFieldRef?.current?.value;
		const priceValue = ticketPriceFieldRef?.current?.value;
		const bookingFeeValue = ticketBookingFeeFieldRef?.current?.value;

		const isValid = !!typeValue?.length && !isNaN(Number(priceValue)) && !isNaN(Number(bookingFeeValue));
		if (isValid) {
			const newTicket: Ticket = {
				type: typeValue as Ticket['type'],
				info: infoValue,
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
			<Form id="add-event" name="add-event" onSubmit={(e) => onSubmit(e)} noValidate>
				<Fieldset>
					<Legend>What</Legend>
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
							<TextArea fieldRef={descriptionFieldRef} id="description" labelText="Description" />
						</FieldItem>
					</FieldRow>
				</Fieldset>
				<Fieldset>
					<Legend>Where</Legend>
					<FieldRow>
						<FieldItem>
							<TextArea
								fieldRef={locationFieldRef}
								id="location"
								labelText="Location"
								required={true}
								errorText="Please enter a location for your event"
							/>
						</FieldItem>
					</FieldRow>
					<FieldRow>
						<FieldItem>
							<Input fieldRef={mapFieldRef} id="map_url" labelText="Map URL" />
						</FieldItem>
					</FieldRow>
				</Fieldset>
				<Fieldset>
					<Legend>When</Legend>
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
				</Fieldset>
				<Fieldset>
					<Legend>Add tickets</Legend>
					<FieldRow>
						<FieldItem>
							<Select
								errorText="Please enter a type for this ticket"
								fieldRef={ticketTypeFieldRef}
								id="type"
								labelText="Type"
								required={true}
								options={[
									'Adult',
									'Child',
									'Senior',
									'Student',
									'Family',
									'Group',
									'Concession',
									'Carer',
									'Companion',
									'Other',
								]}
							/>
						</FieldItem>
					</FieldRow>
					<FieldRow>
						<FieldItem>
							<Input
								description='(e.g. "Under 16 years", "2 adults and 2 children")'
								fieldRef={ticketInfoFieldRef}
								id="info"
								labelText="Ticket information"
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
					<FieldRow>
						<Button label="Add ticket" onClick={addTicket} variant="secondary" />
					</FieldRow>
					{!!tickets.length && (
						<>
							<p>
								<strong>Tickets added:</strong>
							</p>
							<TicketsList tickets={tickets} />
						</>
					)}
				</Fieldset>
				<FieldRow>
					<Button type="submit" label="Add event" />
				</FieldRow>
				{feedbackMessage && <Alert type={feedbackMessage.type} message={feedbackMessage.message} />}
			</Form>
		</>
	);
};
