import { Wrapper } from './index.styles';

type AlertProps = {
	message: string;
	type: 'danger' | 'success';
};

export const Alert = ({ message, type }: AlertProps) => {
	return (
		<Wrapper data-alert-type={type} role="alert">
			<p>{message}</p>
		</Wrapper>
	);
};
