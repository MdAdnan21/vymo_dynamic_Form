import type { ReactNode } from "react";

import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function FormField({
  label,
  hint,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
      </label>

      {children}

      {hint && (
        <p className={styles.hint}>
          {hint}
        </p>
      )}

      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}