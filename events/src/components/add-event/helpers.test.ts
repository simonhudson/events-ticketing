import { submitEvent } from './helpers';

const ORIGINAL_FETCH = global.fetch;

describe('submitEvent', () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
		global.fetch = ORIGINAL_FETCH;
	});

	it('should call fetch with the correct arguments', async () => {
		// Given
		const mockSubmitEventArgs = {
			name: 'Test event',
			description: 'Test description',
			location: 'Test location',
			map_url: 'https://test.com',
			date: '2022-12-31',
			tickets: [],
			time: {
				start: '10:00',
				end: '12:00',
			},
		};
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(),
				status: 200,
			})
		) as jest.Mock;

		// When
		await submitEvent(mockSubmitEventArgs);

		// Then
		expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/events', {
			method: 'post',
			body: JSON.stringify(mockSubmitEventArgs),
			headers: { 'Content-Type': 'application/json' },
		});
	});

	it('should return the response from fetch', async () => {
		// Given
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(123),
				status: 200,
			})
		) as jest.Mock;

		// When
		const response = await submitEvent({
			name: 'Test event',
			location: 'Test location',
			date: '2022-12-31',
			tickets: [],
		});

		// Then
		expect(response).toEqual(123);
	});
});
