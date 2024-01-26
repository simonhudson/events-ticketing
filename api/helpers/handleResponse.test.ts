import { Response } from 'express';
import { handleResponse } from './handleResponse';

describe('handleResponse function', () => {
	let mockResponse: Partial<Response>;
	let data: any[];

	beforeEach(() => {
		data = [{ id: 1 }, { id: 2 }];
		mockResponse = {
			statusCode: 200,
			json: jest.fn(),
		};
	});

	it('should call res.json with the correct return object', () => {
		handleResponse({ res: mockResponse as Response, data });
		expect(mockResponse.json).toHaveBeenCalledWith({
			status: mockResponse.statusCode,
			metadata: {
				count: data.length,
			},
			data: data,
		});
	});
});
