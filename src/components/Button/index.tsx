import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  variant: "light" | "dark";
  borderColor?: string;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "light",
  size = "small",
  icon,
  fullWidth,
  title,
  borderColor = "#2894ff",
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      {...rest}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      borderColor={borderColor}
    >
      <span />
      <span />
      <span />
      <span />
      {icon} {title}
    </S.Button>
  );
};
