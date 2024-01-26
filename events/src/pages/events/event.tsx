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

	return <>{event && <h1>{event.name}</h1>}</>;
};
