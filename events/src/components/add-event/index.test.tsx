import { fireEvent, act, screen } from '@testing-library/react';
import { render } from '../../../test/utils';
import { AddEvent } from './index';
import { submitEvent } from './helpers';

jest.mock('./helpers');

const populateTicketForm = () => {
	fireEvent.change(screen.getByLabelText('Type (required)'), { target: { value: 'Child' } });
	fireEvent.change(screen.getByLabelText('Ticket information'), { target: { value: 'Test ticket information' } });
	fireEvent.change(screen.getByLabelText('Price (required)'), { target: { value: 10.99 } });
	fireEvent.change(screen.getByLabelText('Booking fee'), { target: { value: 1.99 } });
	fireEvent.click(screen.getByText('Add ticket'));
};

const populateForm = () => {
	fireEvent.change(screen.getByLabelText('Name (required)'), { target: { value: 'Test event' } });
	fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test description' } });
	fireEvent.change(screen.getByLabelText('Location (required)'), { target: { value: 'Test location' } });
	fireEvent.change(screen.getByLabelText('Map URL'), { target: { value: 'Test map URL' } });
	fireEvent.change(screen.getByLabelText('Date (required)'), { target: { value: '2022-12-31' } });
	fireEvent.change(screen.getByLabelText('Start Time'), { target: { value: '19:00' } });
	fireEvent.change(screen.getByLabelText('Finish Time'), { target: { value: '23:30' } });
	populateTicketForm();
};

describe('AddEvent component', () => {
	it('should render without crashing', () => {
		// When
		render(<AddEvent />);

		// Then
		expect(screen.getByText('Add event', { selector: 'h1 ' })).toBeInTheDocument();
		expect(screen.getByRole('form')).toBeInTheDocument();
	});

	it('should call submitEvent with the correct arguments when the form is submitted', async () => {
		// Given
		render(<AddEvent />);
		populateForm();

		// When
		await act(async () => {
			fireEvent.submit(screen.getByRole('form'));
		});

		// Then
		expect(submitEvent).toHaveBeenCalledWith({
			name: 'Test event',
			description: 'Test description',
			location: 'Test location',
			map_url: 'Test map URL',
			date: '2022-12-31',
			tickets: [
				{
					type: 'Child',
					info: 'Test ticket information',
					price: 10.99,
					booking_fee: 1.99,
					is_available: true,
				},
			],
			time: {
				start: '19:00',
				end: '23:30',
			},
		});
	});

	it('should list tickets as they are added', async () => {
		// Given
		render(<AddEvent />);

		// When
		populateTicketForm();

		// Then
		expect(screen.getByText('Tickets added:')).toBeInTheDocument();
		expect(screen.getByText('Child', { selector: 'span' })).toBeInTheDocument();
		expect(screen.getByText('Test ticket information')).toBeInTheDocument();
		expect(screen.getByText('Price: £10.99')).toBeInTheDocument();
		expect(screen.getByText('Booking fee: £1.99')).toBeInTheDocument();
	});
});
