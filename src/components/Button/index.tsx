import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from "react";
import * as S from "./styles";

export type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  variant: "light" | "dark";
  borderColor?: string;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
  as?: ElementType;
} & ButtonTypes;

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
