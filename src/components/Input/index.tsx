import { InputHTMLAttributes } from "react";
import * as S from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <S.Input>
      <input {...rest} required />
      <span>{label}</span>
      <i />
    </S.Input>
  );
};
