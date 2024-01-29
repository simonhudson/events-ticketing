import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventsList as StyledEventsList, EventsItem, EventName } from './index.styles';
import type { Event } from '../../../../types/event';

export const EventsList = () => {
	const [events, setEvents] = useState<Event[] | undefined>();
	const [sortedEvents, setSortedEvents] = useState<Event[] | undefined>();
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

	useEffect(() => {
		(async () => {
			const response = await fetch(`https://events-ticketing-api.vercel.app/api/events`);
			const data = await response.json();
			if (data?.data?.length) {
				setEvents(data.data);
			}
		})();
	}, []);

	useEffect(() => {
		if (events) {
			const sorted =
				sortDirection === 'asc'
					? events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
					: events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			setSortedEvents(sorted);
		}
	}, [events, sortDirection]);

	return (
		<>
			<button onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}>Sort</button>
			<StyledEventsList>
				{!!sortedEvents &&
					sortedEvents.map((event: Event, index: number) => {
						return (
							<EventsItem key={index}>
								<EventName>{event.name}</EventName>
								<span>{event.date && event.dateFormatted}</span>
								<span>
									<Link to={`/events/${event.slug}`}>More info</Link>
								</span>
							</EventsItem>
						);
					})}
			</StyledEventsList>
		</>
	);
};
