export interface FormFieldProps {
	id: string;
	isInvalid?: boolean;
	onChange?: (e) => void;
	value?: string;
	fieldRef: React.RefObject<HTMLInputElement>;
}
