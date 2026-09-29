import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur?: () => void;
}

export function Checkbox({
  value,
  onChange,
  onBlur,
}: CheckboxProps) {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={value}
      onChange={(event) => onChange(event.target.checked)}
      onBlur={onBlur}
    />
  );
}