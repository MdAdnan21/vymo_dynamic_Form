import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
  <button
  className={styles.button}
  type={type}
  disabled={disabled}
  onClick={onClick}
>
  {children}
</button>
  );
}