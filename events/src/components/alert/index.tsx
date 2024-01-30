import { Wrapper } from './index.styles';
import type { AlertProps } from './alert';

export const Alert = ({ message, type }: AlertProps) => {
	return (
		<Wrapper data-alert-type={type} role="alert">
			<p dangerouslySetInnerHTML={{ __html: message }} />
		</Wrapper>
	);
};
