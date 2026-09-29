import type {
  FormErrors,
  FormFieldConfig,
  FormValues,
} from "../types/leadForm.types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^\d{10}$/;

function isFieldVisible(
  field: FormFieldConfig,
  values: FormValues,
) {
  if (!field.condition) {
    return true;
  }

  return (
    values[field.condition.field] === field.condition.value
  );
}

export function validateLeadForm(
  config: FormFieldConfig[],
  values: FormValues,
): FormErrors {
  const errors: FormErrors = {};

  for (const field of config) {
    // Don't validate hidden fields
    if (!isFieldVisible(field, values)) {
      continue;
    }

    const value = values[field.name];
    const rules = field.validations;

    if (!rules) {
      continue;
    }

    // Required validation
    if (
      rules.required &&
      (
        value === undefined ||
        value === "" ||
        (typeof value === "string" && value.trim() === "") ||
        value === false
      )
    ) {
      errors[field.name] = `${field.label} is required`;
      continue;
    }

    // Email validation
    if (
      rules.email &&
      typeof value === "string" &&
      value.trim() !== "" &&
      !emailRegex.test(value.trim())
    ) {
      errors[field.name] = "Please enter a valid email";
      continue;
    }

    // Phone validation
    if (
      rules.phone &&
      typeof value === "string" &&
      value.trim() !== "" &&
      !phoneRegex.test(value.trim())
    ) {
      errors[field.name] =
        "Phone number must contain 10 digits";
      continue;
    }

    // Maximum length
    if (
      rules.maxLength &&
      typeof value === "string" &&
      value.length > rules.maxLength
    ) {
      errors[field.name] =
        `${field.label} must be ${rules.maxLength} characters or less`;
    }
  }

  return errors;
}