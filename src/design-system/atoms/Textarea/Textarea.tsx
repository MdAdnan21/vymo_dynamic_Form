import styles from "./Textarea.module.css";

interface TextareaProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function Textarea({
  value,
  placeholder,
  onChange,
  onBlur,
}: TextareaProps) {
  return (
    <textarea
      className={styles.textarea}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
    />
  );
}