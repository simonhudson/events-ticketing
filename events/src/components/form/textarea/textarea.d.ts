import type { FormFieldProps } from '../form';
import type { LabelProps } from '../label/label';

export interface TextAreaProps extends FormFieldProps, LabelProps {
	cols?: number;
	rows?: number;
}
