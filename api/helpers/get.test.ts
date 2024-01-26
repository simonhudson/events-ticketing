import { get } from './get';
import mockFs from 'mock-fs';
import { handleError } from './handleError';

jest.mock('./handleError', () => ({
	handleError: jest.fn(),
}));

describe('get function', () => {
	beforeEach(() => {
		mockFs({
			'../api/data': {
				'test.json': '{"key": "value"}',
			},
		});
	});

	afterEach(() => {
		mockFs.restore();
	});

	it('should return parsed JSON data for a valid endpoint', async () => {
		const data = await get({ endpoint: 'test' });
		expect(data).toEqual({ key: 'value' });
	});

	it('should call handleError for an invalid endpoint', async () => {
		await get({ endpoint: 'invalid' });
		expect(handleError).toHaveBeenCalledWith({ endpoint: 'invalid', err: expect.any(Error) });
	});
});
