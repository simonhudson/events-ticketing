import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventsList as StyledEventsList, EventsItem, EventName } from './index.styles';
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
			<button onClick={() => setSortDirection(sortDirection === ASCENDING ? DESCENDING : ASCENDING)}>Sort</button>
			<StyledEventsList>
				{!!events &&
					events.map((event: Event, index: number) => {
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
