import { TextareaHTMLAttributes } from "react";
import * as S from "./styles";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export const TextArea = ({ label, ...rest }: TextAreaProps) => {
  return (
    <S.TextArea>
      <textarea {...rest} required />
      <span>{label}</span>
    </S.TextArea>
  );
};
