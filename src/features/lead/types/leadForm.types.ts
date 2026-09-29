export type FieldType =
  | "text"
  | "email"
  | "select"
  | "textarea"
  | "checkbox";

export interface FormOption {
  label: string;
  value: string;
}

export interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  maxLength?: number;
}

export interface FieldCondition {
  field: string;
  value: string | boolean;
}

export interface FormFieldConfig {
  name: string;
  type: FieldType;
  label: string;
  hint?: string;
  options?: FormOption[];
  validations?: ValidationRules;
  condition?: FieldCondition;
  layout?: 'full'
}

export type FormValues = Record<string, string | boolean>;

export type FormErrors = Record<string, string>;