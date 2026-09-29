import styles from "./TextInput.module.css";

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function TextInput({
  value,
  placeholder,
  onChange,
  onBlur,
}: TextInputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
    />
  );
}