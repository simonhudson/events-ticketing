import { Request } from 'express';
import { handleError } from '../helpers/handleError';
import { writeFileSync } from 'fs';
import xss from 'xss';

interface PostParams {
	req: Request;
	endpoint: string;
	data: any;
}

export const post = async ({ req, endpoint, data }: PostParams) => {
	try {
		writeFileSync(`../api/data/${endpoint}.json`, xss(JSON.stringify(data, null, 4)));
		return;
	} catch (err: any) {
		handleError({ req, err });
	}
};
