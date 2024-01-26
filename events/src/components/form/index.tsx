export const AddEvent = () => {
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.target as HTMLFormElement);
		const response = await fetch('http://localhost:3000/api/events', {
			method: 'POST',
			body: form,
		});
		console.log('zzz----------------');
		console.log(response);
		console.log('xx----------------');
	};

	return (
		<>
			<h1>Add event</h1>
			<form id="add-event" name="add-event" onSubmit={(e) => onSubmit(e)}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" id="description" name="description" />
				</div>
				<div>
					<label htmlFor="date">Date</label>
					<input type="date" id="date" name="date" />
				</div>
				<input type="submit" value="Add event" />
			</form>
		</>
	);
};
