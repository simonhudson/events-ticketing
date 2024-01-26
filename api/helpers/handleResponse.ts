import { Response } from 'express';

type HandleResponseParams = {
	res: Response;
	data: any;
};
export const handleResponse = ({ res, data }: HandleResponseParams) => {
	let returnObj = {
		status: res.statusCode,
		metadata: {
			count: data.length,
		},
		data: data,
	};
	res.json(returnObj);
};
