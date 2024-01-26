export type BaseApiResponse = {
	status: number;
	metadata: {
		count: number;
	};
	data: any[];
};
