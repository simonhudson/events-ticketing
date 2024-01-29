import type { FormFieldProps } from '../form';
import type { LabelProps } from '../label/label';

export interface SelectProps extends Omit<FormFieldProps, 'fieldRef'>, LabelProps {
	options: string[];
	fieldRef: React.RefObject<HTMLSelectElement>;
}
