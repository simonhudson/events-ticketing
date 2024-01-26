import { Request } from 'express';

type HandleErrorParams = {
	req: Request;
	err: any;
};

export const handleError = ({ req, err }: HandleErrorParams) => {
	return {
		error: true,
		endpoint: req.originalUrl,
		method: req.method,
		err,
	};
};
