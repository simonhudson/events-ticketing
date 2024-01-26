export const AddEvent = () => {
	return (
		<>
			<h1>Add event</h1>
			<form id="add-event" name="add-event" method="post" action="http://localhost:3000/api/events">
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
