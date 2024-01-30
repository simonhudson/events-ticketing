import { Request } from 'express';
import { handleError } from './handleError';

describe('handleError', () => {
	it('should return an error object with the correct properties', () => {
		const mockRequest = {
			originalUrl: '/test',
			method: 'GET',
		} as Request;
		const error = new Error('Test error');
		const result = handleError({ req: mockRequest, err: error });

		expect(result).toEqual({
			error: true,
			endpoint: '/test',
			method: 'GET',
			err: error,
		});
	});
});
