import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const wrapperModifiersButtonVariant = {
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.background.black_600};
    color: ${theme.colors.white_100};
  `,
  light: (theme: DefaultTheme) => css`
    background-color: ${theme.background.white};
    color: ${theme.colors.black_500};
  `
};

const wrapperModifiersButtonSize = {
  large: () => css`
    padding: 15px 30px;
    font-size: 1.25rem;

    & svg {
      font-size: 0.95rem;
    }
  `,
  small: () => css`
    padding: 5px 15px;
    font-size: 0.875rem;
    & svg {
      font-size: 0.65rem;
    }
  `,
  medium: () => css`
    padding: 10px 30px;
    font-size: 0.975rem;
    & svg {
      font-size: 0.75rem;
    }
  `
};

const wrapperModifiersButtonfullWidth = () => css`
  width: 100%;
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, size, fullWidth, borderColor }) => css`
    cursor: pointer;
    position: relative;
    display: inline-block;

    text-transform: capitalize;
    letter-spacing: 0.2em;
    font-weight: 600;
    transition: 0.2s;
    border: 0;
    overflow: hidden;
    ${wrapperModifiersButtonVariant[variant](theme)}
    ${wrapperModifiersButtonSize[size!]}
    ${fullWidth && wrapperModifiersButtonfullWidth()}

    &:hover {
      filter: brightness(0.8);
    }

    & span {
      display: block;
      position: absolute;
      background-color: ${borderColor};

      &:nth-child(1) {
        left: 0;
        bottom: 0;
        width: 1px;
        height: 100%;

        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.5s;
      }
      &:nth-child(2) {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }
      &:nth-child(3) {
        right: 0;
        bottom: 0;
        width: 1px;
        height: 100%;

        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.5s;
      }
      &:nth-child(4) {
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }
    }

    &:hover span {
      &:nth-child(1) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
      }
      &:nth-child(2) {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
      }
      &:nth-child(3) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
      }
      &:nth-child(4) {
        transform: scaleX(1);
        transform-origin: right;
        transition: transform 0.5s;
      }
    }
  `}
`;
