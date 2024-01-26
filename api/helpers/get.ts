import { readFileSync } from 'fs';
import { handleError } from './handleError';

type GetParams = {
	endpoint: string;
};

export const get = async ({ endpoint }: GetParams) => {
	try {
		const json = readFileSync(`../api/data/${endpoint}.json`);
		const data = JSON.parse(json.toString());
		return data;
	} catch (err: any) {
		handleError({ endpoint, err });
	}
};
