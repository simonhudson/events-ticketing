import type { FormFieldProps } from '../form';
import type { LabelProps } from '../label/label';

export interface TextAreaProps extends Omit<FormFieldProps, fieldRef>, LabelProps {
	cols?: number;
	rows?: number;
	fieldRef: React.RefObject<HTMLTextAreaElement>;
}
