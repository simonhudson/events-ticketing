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
							<p>
								{event.time?.start && event.time.start}
								{event.time?.end && ` - ` + event.time.end}
							</p>
						</>
					)}
					<h2>Where</h2>
					{event.map_url && (
						<iframe
							aria-label="Map showing the location of the event"
							src={event.map_url}
							width="600"
							height="450"
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					)}
					{event.tickets?.length && (
						<>
							<h2>Tickets</h2>
							<ul>
								{event.tickets.map((ticket, index: number) => {
									return (
										<li key={index}>
											{ticket.type} {ticket.info && `(${ticket.info})`} - &pound;{ticket.price}
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
