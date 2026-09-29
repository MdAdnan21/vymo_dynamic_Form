import { useState } from "react";
import type { FormEvent } from "react";

import { TextInput } from "../../design-system/atoms/TextInput/TextInput";
import { Select } from "../../design-system/atoms/Select/Select";
import { Textarea } from "../../design-system/atoms/Textarea/Textarea";
import { Checkbox } from "../../design-system/atoms/Checkbox/Checkbox";
import { Button } from "../../design-system/atoms/Button/Button";

import { FormField } from "../../design-system/molecules/FormField/FormField";

import { leadFormConfig } from "./config/leadFormConfig";

import type {
  FormErrors,
  FormValues,
} from "./types/leadForm.types";

import { validateLeadForm } from "./validation/validateLeadForm";

import styles from "./validation/LeadForm.module.css";

export function LeadForm() {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submittedValues, setSubmittedValues] =
    useState<FormValues | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    name: string,
    value: string | boolean,
  ) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
      setSubmittedValues(null);
    }
  };

  const isVisible = (
    field: (typeof leadFormConfig)[number],
  ) => {
    if (!field.condition) {
      return true;
    }

    return (
      values[field.condition.field] === field.condition.value
    );
  };

  

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const nextErrors = validateLeadForm(
      leadFormConfig,
      values,
    );

    setErrors(nextErrors);
  };


  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const nextErrors = validateLeadForm(
      leadFormConfig,
      values,
    );

    setErrors(nextErrors);

    const allTouched: Record<string, boolean> = {};

    leadFormConfig.forEach((field) => {
      if (isVisible(field)) {
        allTouched[field.name] = true;
      }
    });

    setTouched(allTouched);

    // Invalid form
    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      setSubmittedValues(null);

      return;
    }


    console.log("Submitted values:", values);

    setSubmittedValues(values);
    setIsSubmitted(true);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.grid}>
          {leadFormConfig.map((field) => {
            if (!isVisible(field)) {
              return null;
            }

            const value = values[field.name] ?? "";

            return (
              <div
                key={field.name}
                className={
                  field.layout === "full"
                    ? styles.fullWidth
                    : styles.field
                }
              >
                <FormField
                  label={field.label}
                  hint={field.hint}
                  error={
                    touched[field.name]
                      ? errors[field.name]
                      : undefined
                  }
                >
                  {field.type === "text" && (
                    <TextInput
                      value={String(value)}
                      onChange={(value) =>
                        handleChange(field.name, value)
                      }
                      onBlur={() =>
                        handleBlur(field.name)
                      }
                    />
                  )}

                  {field.type === "email" && (
                    <TextInput
                      value={String(value)}
                      onChange={(value) =>
                        handleChange(field.name, value)
                      }
                      onBlur={() =>
                        handleBlur(field.name)
                      }
                    />
                  )}

                  {field.type === "select" && (
                    <Select
                      value={String(value)}
                      options={field.options ?? []}
                      onChange={(value) =>
                        handleChange(field.name, value)
                      }
                      onBlur={() =>
                        handleBlur(field.name)
                      }
                    />
                  )}

                  {field.type === "textarea" && (
                    <Textarea
                      value={String(value)}
                      onChange={(value) =>
                        handleChange(field.name, value)
                      }
                      onBlur={() =>
                        handleBlur(field.name)
                      }
                    />
                  )}

                  {field.type === "checkbox" && (
                    <Checkbox
                      value={Boolean(value)}
                      onChange={(value) =>
                        handleChange(field.name, value)
                      }
                      onBlur={() =>
                        handleBlur(field.name)
                      }
                    />
                  )}
                </FormField>
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Button
            type="submit"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Submitted ✓" : "Submit"}
          </Button>
        </div>

        {isSubmitted && (
          <p
            className={styles.successMessage}
            role="status"
          >
            Form submitted successfully.
          </p>
        )}
      </form>

      {submittedValues && (
        <div className={styles.submittedData}>
          <h2>Submitted Data</h2>

          <pre>
            {JSON.stringify(
              submittedValues,
              null,
              2,
            )}
          </pre>
        </div>
      )}
    </>
  );
}