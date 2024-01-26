import { Request, Response } from 'express';
import { handleError } from '../helpers/handleError';
import { writeFileSync } from 'fs';

interface PostParams {
	req: Request;
	endpoint: string;
	data: any;
}

export const post = async ({ req, endpoint, data }: PostParams) => {
	try {
		writeFileSync(`../api/data/${endpoint}.json`, JSON.stringify(data, null, 4));
		return;
	} catch (err: any) {
		handleError({ req, err });
	}
};
