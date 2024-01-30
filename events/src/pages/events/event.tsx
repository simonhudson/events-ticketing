import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Event as EventType } from '../../../../types/event';
import { TicketsList } from '../../components/tickets-list';
import { Icon } from '../../components/icon';
import { VisuallyHidden } from '../../theme/layout';

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
							<h2>
								<Icon name="calendar-days" />
								&nbsp;When
							</h2>
							<p>
								{event.dateFormatted}
								{event.time?.start && (
									<span>
										<br /> {event.time.start}
									</span>
								)}
								<span>{event.time?.end && ` - ${event.time.end}`}</span>
							</p>
						</>
					)}
					<h2>
						<Icon name="location-dot" />
						&nbsp;Where
					</h2>
					{event.location && (
						<p>
							{event.location}
							{event.map_url && (
								<>
									<br />
									<Icon name="map" />
									&nbsp;
									<a href={event.map_url}>
										Map<VisuallyHidden>&nbsp;showing {event.location}</VisuallyHidden>
									</a>
								</>
							)}
						</p>
					)}
					{event.tickets?.length && (
						<>
							<h2>
								<Icon name="ticket" />
								&nbsp;Tickets
							</h2>
							<TicketsList tickets={event.tickets} showCta={true} />
						</>
					)}
				</>
			)}
		</>
	);
};
