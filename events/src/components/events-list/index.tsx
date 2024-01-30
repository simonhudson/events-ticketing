import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventsList as StyledEventsList, EventsItem, EventDetailsItem } from './index.styles';
import type { Event } from '../../../../types/event';

const ASCENDING = 'asc';
const DESCENDING = 'desc';

const sortData = (data: Event[], sortDirection: typeof ASCENDING | typeof DESCENDING): Event[] => {
	const sorted =
		sortDirection === ASCENDING
			? data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
			: data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return sorted;
};

export const EventsList = () => {
	const [events, setEvents] = useState<Event[] | undefined>();
	const [sortDirection, setSortDirection] = useState<typeof ASCENDING | typeof DESCENDING>(ASCENDING);

	useEffect(() => {
		if (events) {
			setEvents(sortData(events, sortDirection));
		}
	}, [sortDirection, events]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:3000/api/events`);
			const data = await response.json();
			if (data?.data?.length) {
				const sorted = sortData(data.data, sortDirection);
				setEvents(sorted);
			}
		})();
	}, [sortDirection]);

	return (
		<>
			{events && events.length > 1 && (
				<button onClick={() => setSortDirection(sortDirection === ASCENDING ? DESCENDING : ASCENDING)}>
					Sort by date {sortDirection === ASCENDING ? '↑' : '↓'}
				</button>
			)}
			<StyledEventsList>
				{!!events &&
					events.map((event: Event, index: number) => {
						return (
							<EventsItem key={index}>
								<EventDetailsItem>{event.name}</EventDetailsItem>
								<EventDetailsItem>{event.date && event.dateFormatted}</EventDetailsItem>
								<EventDetailsItem>
									<Link to={`/events/${event.slug}`}>More info</Link>
								</EventDetailsItem>
							</EventsItem>
						);
					})}
			</StyledEventsList>
		</>
	);
};
