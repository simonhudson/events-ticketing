import request from 'supertest';
import app from './index';

describe('App', () => {
	it('should respond with a 200 status code for GET /api/events', async () => {
		const response = await request(app).get('/api/events');
		expect(response.statusCode).toBe(200);
	});

	it('should respond with a 404 status code for GET /api/nonexistent', async () => {
		const response = await request(app).get('/api/nonexistent');
		expect(response.statusCode).toBe(404);
	});
});
