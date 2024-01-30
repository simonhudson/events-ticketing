import { Response } from 'express';
import { handleResponse } from './handleResponse';

describe('handleResponse function', () => {
	let mockResponse: Partial<Response>;
	let data: any[];

	beforeEach(() => {
		data = [{ key: 'value' }];
		mockResponse = {
			statusCode: 200,
			setHeader: jest.fn(),
			json: jest.fn(),
		};
	});

	it('should set the correct headers and call res.json with the correct argument', () => {
		handleResponse({ res: mockResponse as Response, data });
		expect(mockResponse.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
		expect(mockResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
		expect(mockResponse.json).toHaveBeenCalledWith({
			status: 200,
			metadata: {
				count: 1,
			},
			data: data,
		});
	});
});
