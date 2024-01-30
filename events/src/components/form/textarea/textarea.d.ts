import type { FormFieldProps } from '../form';
import type { LabelProps } from '../label/label';

export interface TextAreaProps extends Omit<FormFieldProps, 'fieldRef'>, LabelProps {
	fieldRef: React.RefObject<HTMLTextAreaElement>;
}
