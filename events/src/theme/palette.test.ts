import { palette } from './palette';

describe('theme/palette', () => {
	it('should return expected values', () => {
		expect(palette).toEqual({
			primary: {
				bodyBackground: '#fef9f5',
				brand: '#FA7900',
				bodyText: '#5d5d5d',
				black: '#333',
				white: '#fff',
				grey: '#707070',
				lightGrey: '#f9f9f9',
			},
			status: {
				error: '#ff0033',
				info: '#CCDEFA',
				success: '#e6f7ed',
				warning: '#FEF7E6',
			},
		});
	});
});
