type HandleErrorParams = {
	endpoint: string;
	err: any;
};

export const handleError = ({ endpoint, err }: HandleErrorParams) => {
	return {
		error: true,
		endpoint,
		err,
	};
};
