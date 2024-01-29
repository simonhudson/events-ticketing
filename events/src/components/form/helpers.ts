export const validateOnBlur = (
	fieldRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	setStateFunction: (isInvalid: boolean) => void
): void => {
	const value = fieldRef?.current?.value;
	if (!value) setStateFunction(true);
	else setStateFunction(false);
};

export const setDescribedByElement = (isInvalid: boolean, fieldId: string, description?: string): string => {
	let describedByElement = isInvalid ? `error--${fieldId}` : '';
	if (description) describedByElement = describedByElement + ` description--${fieldId}`;
	return describedByElement.trim();
};
