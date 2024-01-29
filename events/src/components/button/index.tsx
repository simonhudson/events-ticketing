import { MouseEvent } from 'react';
import { StyledButton } from './index.styles';

export type ButtonProps = {
	label: string;
	onClick?: (e: MouseEvent) => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary';
};

export const Button = ({ label, onClick, type = 'button', variant = 'primary' }: ButtonProps) => {
	return (
		<StyledButton
			data-variant={variant}
			onClick={(e: MouseEvent) => {
				if (onClick) onClick(e);
			}}
			type={type}
		>
			{label}
		</StyledButton>
	);
};
