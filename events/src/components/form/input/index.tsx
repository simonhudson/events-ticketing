import { useState } from 'react';
import { InputField } from './index.styles';
import { Label } from '../label';
import { validateOnBlur, setDescribedByElement } from '../helpers';
import type { InputProps } from './input';

export const Input = ({
	description,
	errorText,
	fieldRef,
	id,
	labelText,
	onChange,
	placeholder = '',
	required,
	type = 'text',
}: InputProps) => {
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
			<InputField
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
				placeholder={placeholder}
				ref={fieldRef}
				type={type}
			/>
		</>
	);
};
