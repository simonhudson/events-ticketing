import { Request } from 'express';
import { writeFileSync } from 'fs';
import { handleError } from '../helpers/handleError';
import { post } from './post';

jest.mock('fs');
jest.mock('../helpers/handleError');

describe('post function', () => {
	let mockRequest: Partial<Request>;
	let endpoint: string;
	let data: any;

	beforeEach(() => {
		mockRequest = {};
		endpoint = 'test';
		data = { key: 'value' };
		(writeFileSync as jest.Mock).mockClear();
		(handleError as jest.Mock).mockClear();
	});

	it('should write the data to the correct JSON file', async () => {
		await post({ req: mockRequest as Request, endpoint, data });
		expect(writeFileSync).toHaveBeenCalledWith(`../api/data/${endpoint}.json`, JSON.stringify(data, null, 4));
		expect(handleError).not.toHaveBeenCalled();
	});

	it('should call handleError when an error occurs', async () => {
		(writeFileSync as jest.Mock).mockImplementation(() => {
			throw new Error('Test error');
		});
		await post({ req: mockRequest as Request, endpoint, data });
		expect(handleError).toHaveBeenCalledWith({ req: mockRequest, err: expect.any(Error) });
	});
});
