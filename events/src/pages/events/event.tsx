import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Event as EventType } from '../../../../types/event';

export const Event = () => {
	const params = useParams();

	const [event, setEvent] = useState<EventType | undefined>();

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:3000/api/events/${params.id}`);
			const data = await response.json();
			console.log('----------------');
			console.log(data.data[0]);
			console.log('----------------');

			if (data?.data?.length) setEvent(data.data[0]);
		})();
	}, [params.id]);

	return (
		<>
			{event && (
				<>
					<h1>{event.name}</h1>
					{event.description && <p>{event.description}</p>}
					{event.date && (
						<>
							<h2>When</h2>
							<p>{event.dateFormatted}</p>
						</>
					)}
					{event.tickets?.length && (
						<>
							<h2>Tickets</h2>
							<ul>
								{event.tickets.map((ticket, index: number) => {
									return (
										<li key={index}>
											{ticket.type} {ticket.description && `(${ticket.description})`} - £
											{ticket.price}
										</li>
									);
								})}
							</ul>
						</>
					)}
				</>
			)}
		</>
	);
};
