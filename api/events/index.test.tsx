import request from 'supertest';
import express from 'express';
import router from './index';
import { MockTickets } from '../test/mock-data/tickets';

const app = express();
app.use(express.json());
app.use('/', router);

describe('GET /', () => {
	it('should respond with a 200 status code', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('POST /', () => {
	it('should respond with a 200 status code for valid request body', async () => {
		const requestBody = {
			date: '2022-12-31',
			description: 'Test event',
			location: 'Test location',
			map_url: 'https://test.com',
			name: 'Test',
			tickets: MockTickets,
			time: {
				start: '10:00',
				end: '12:00',
			},
		};
		const response = await request(app).post('/').send(requestBody);
		expect(response.statusCode).toBe(200);
	});

	it('should respond with a 400 status code for invalid request body', async () => {
		const requestBody = {};
		const response = await request(app).post('/').send(requestBody);
		expect(response.statusCode).toBe(400);
	});
});

describe('GET /:slug', () => {
	it('should respond with a 200 status code for valid slug', async () => {
		const response = await request(app).get('/test-2022-12-31');
		expect(response.statusCode).toBe(200);
	});
});
