import { useState } from 'react';
import { Wrapper, StyledSelect } from './index.styles';
import { validateOnBlur, setDescribedByElement } from '../helpers';
import { Label } from '../label';
import type { SelectProps } from './select';

export const Select = ({
	description,
	errorText,
	labelText,
	id,
	fieldRef,
	onChange,
	required,
	options,
}: SelectProps) => {
	const [isInvalid, setIsInvalid] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
			<Wrapper data-is-open={isOpen}>
				<StyledSelect
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
					onClick={() => setIsOpen(!isOpen)}
					onFocus={() => setIsInvalid(false)}
					ref={fieldRef}
				>
					{options.map((option: string, index: number) => {
						return (
							<option key={index} value={option}>
								{option}
							</option>
						);
					})}
				</StyledSelect>
			</Wrapper>
		</>
	);
};
