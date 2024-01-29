import { MouseEvent } from 'react';
import { StyledButton } from './index.styles';

export type ButtonProps = {
	label: string;
	onClick?: (e: MouseEvent) => void;
	type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ label, onClick, type = 'button' }: ButtonProps) => {
	return (
		<StyledButton
			onClick={(e: MouseEvent) => {
				if (onClick) onClick(e);
			}}
			type={type}
		>
			{label}
		</StyledButton>
	);
};
