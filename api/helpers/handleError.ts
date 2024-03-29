import { Request } from 'express';

type HandleErrorParams = {
	statusCode: number;
	req: Request;
	err: any;
};

export const handleError = ({ req, err, statusCode }: HandleErrorParams) => {
	return {
		error: true,
		endpoint: req.originalUrl,
		method: req.method,
		err,
		statusCode,
	};
};
