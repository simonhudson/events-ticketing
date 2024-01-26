import request from 'supertest';
import express from 'express';
import router from './index';

const app = express();
app.use(express.json());
app.use('/', router);

describe('GET /', () => {
	it('should respond with a 200 status code', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('GET /:event_id', () => {
	it('should respond with a 200 status code for valid event_id', async () => {
		const response = await request(app).get('/1');
		expect(response.statusCode).toBe(200);
	});
});
