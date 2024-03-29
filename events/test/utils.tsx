import React from 'react';
import '@testing-library/jest-dom';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

const Theme = { ...theme };

export const render = (
	childToRender: string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined
) => {
	return doRender(<ThemeProvider theme={Theme}>{childToRender}</ThemeProvider>);
};
