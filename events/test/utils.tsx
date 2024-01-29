import React from 'react';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';

const Theme = { ...theme };

export const render = (
	childToRender:
		| string
		| number
		| boolean
		| React.JSX.Element
		| Iterable<React.ReactNode>
		| React.PromiseLikeOfReactNode
		| null
		| undefined
) => {
	return doRender(<ThemeProvider theme={Theme}>{childToRender}</ThemeProvider>);
};
