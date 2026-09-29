import styles from "./Select.module.css";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function Select({
  value,
  options,
  onChange,
  onBlur,
}: SelectProps) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
    >
      <option value="">Select an option</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}