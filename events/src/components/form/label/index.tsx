import { Label as StyledLabel, Description, ErrorText, RequiredPrompt } from './index.styles';
import type { LabelProps } from './label';

export const Label = ({ description, errorText, isInvalid, labelText, fieldId, required }: LabelProps) => {
	return (
		<>
			<StyledLabel htmlFor={fieldId}>
				{labelText}
				{required && <RequiredPrompt> (required)</RequiredPrompt>}
			</StyledLabel>
			{description && <Description id={`description--${fieldId}`}>{description}</Description>}
			{isInvalid && <ErrorText id={`error--${fieldId}`}>{errorText}</ErrorText>}
		</>
	);
};
