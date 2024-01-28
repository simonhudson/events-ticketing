import { useState } from 'react';
import { StyledTextArea } from './index.styles';
import { Label } from '../label';
import { validateOnBlur, setDescribedByElement } from '../helpers';
import type { TextAreaProps } from './textarea';

export const TextArea = ({
	description,
	errorText,
	fieldRef,
	id,
	labelText,
	required,
	rows,
	cols,
	onChange,
}: TextAreaProps) => {
	const [isInvalid, setIsInvalid] = useState<boolean>(false);

	const fieldId = `input-${id}`;

	return (
		<>
			<Label
				description={description}
				errorText={errorText}
				isInvalid={isInvalid}
				labelText={labelText}
				fieldId={fieldId}
				required={required}
			/>
			<StyledTextArea
				aria-describedby={setDescribedByElement(isInvalid, fieldId, description)}
				aria-invalid={isInvalid}
				aria-required={required}
				required={required}
				id={fieldId}
				name={fieldId}
				onBlur={() => (required ? validateOnBlur(fieldRef, setIsInvalid) : null)}
				onChange={(e) => {
					if (onChange) onChange(e);
				}}
				onFocus={() => setIsInvalid(false)}
				ref={fieldRef}
				rows={rows}
				cols={cols}
			></StyledTextArea>
		</>
	);
};
