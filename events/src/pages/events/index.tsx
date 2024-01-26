import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Events = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:3000/api/events`);
			const data = await response.json();
			if (data?.data?.length) setEvents(data.data);
		})();
	}, []);

	return (
		<>
			<h1>Events</h1>
			{events && (
				<ul>
					{events.map((event, index: number) => {
						return (
							<li key={index}>
								<Link to={`/events/${event.slug}`}>{event.name}</Link>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};
