import { Request } from 'express';
import { readFileSync } from 'fs';
import { handleError } from './handleError';

type GetParams = {
	req: Request;
	endpoint: string;
};

export const get = async ({ req, endpoint }: GetParams) => {
	try {
		const json = readFileSync(`../api/data/${endpoint}.json`);
		const data = JSON.parse(json.toString());
		return data;
	} catch (err: any) {
		handleError({ req, err });
	}
};
