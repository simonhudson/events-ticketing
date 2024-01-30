import { Request } from 'express';
import { readFileSync } from 'fs';
import { handleError } from './handleError';
import { get } from './get';

jest.mock('fs');
jest.mock('./handleError');

describe('get function', () => {
	let mockRequest: Partial<Request>;
	let endpoint: string;

	beforeEach(() => {
		mockRequest = {};
		endpoint = 'test';
		(readFileSync as jest.Mock).mockReturnValue(JSON.stringify({ key: 'value' }));
		(handleError as jest.Mock).mockClear();
	});

	it('should return the data from the JSON file when it exists', async () => {
		const data = await get({ req: mockRequest as Request, endpoint });
		expect(data).toEqual({ key: 'value' });
		expect(readFileSync).toHaveBeenCalledWith(`../api/data/${endpoint}.json`);
		expect(handleError).not.toHaveBeenCalled();
	});

	it('should call handleError when an error occurs', async () => {
		(readFileSync as jest.Mock).mockImplementation(() => {
			throw new Error('Test error');
		});
		await get({ req: mockRequest as Request, endpoint });
		expect(handleError).toHaveBeenCalledWith({ req: mockRequest, err: expect.any(Error) });
	});
});
