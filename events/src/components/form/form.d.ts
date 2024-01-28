export interface FormFieldProps {
	id: string;
	isInvalid?: boolean;
	onChange?: () => void;
	value?: string;
	fieldRef: React.RefObject<HTMLInputElement>;
}
