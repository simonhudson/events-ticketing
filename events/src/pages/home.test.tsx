import { Home } from './home';
import { render } from '../../test/utils';
import { screen } from '@testing-library/react';

describe('Home', () => {
	it(`should render with form`, () => {
		// When
		render(<Home />);

		// Then
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
});
