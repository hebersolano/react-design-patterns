import { ButtonHTMLAttributes, FunctionComponent } from "react";

const sizes = {
  small: "8px",
  medium: "16px",
  big: "32px",
};

export type ButtonProps = {
  size?: "small" | "medium" | "big";
  color?: string;
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = function Button({
  size = "medium",
  color,
  text,
  ...props
}) {
  return (
    <button
      style={{ fontSize: sizes[size], backgroundColor: color }}
      {...props}
    >
      {text}
    </button>
  );
};

export function RedButton(props: ButtonProps) {
  return <Button {...props} color="crimson" />;
}

export function GreenSmallButton(props: ButtonProps) {
  return <Button {...props} color="green" size="small" />;
}
