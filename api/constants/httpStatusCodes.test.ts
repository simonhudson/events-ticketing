import { httpStatusCodes } from './httpStatusCodes';

describe('httpStatusCodes', () => {
	it('should return expected values', () => {
		expect(httpStatusCodes).toEqual({
			OK: 200,
			BAD_REQUEST: 400,
			NOT_FOUND: 404,
			SERVER_ERROR: 500,
		});
	});
});
