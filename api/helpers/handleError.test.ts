import { handleError } from './handleError';

describe('handleError function', () => {
	it('should return an error object with the correct properties', () => {
		const error = new Error('Test error');
		const result = handleError({ endpoint: 'test', err: error });
		expect(result).toEqual({
			error: true,
			endpoint: 'test',
			err: error,
		});
	});
});
