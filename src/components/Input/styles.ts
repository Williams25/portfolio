import styled, { css } from "styled-components";

export const Input = styled.label`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    & input {
      width: 100%;
      padding: 10px;
      border: 1.5px solid ${theme.background.white_200};
      background-color: ${theme.colors.blue_700};
      color: ${theme.colors.white};
      border-radius: 4px;
      outline: none;
      font-size: 1em;
      transition: border 0.2s linear;
      letter-spacing: 0.1px;
    }
    & span {
      background-color: ${theme.colors.blue_700};
      position: absolute;
      left: 0;
      padding: 5px 10px;
      font-size: 1em;
      pointer-events: none;
      text-transform: uppercase;
      transition: all 0.2s linear;
      transition-delay: 0;
      color: ${theme.colors.white};
      transform: translateX(10px) translateY(5px);
    }

    & input:valid ~ span,
    & input:focus ~ span {
      color: ${theme.colors.white};
      transform: translateX(10px) translateY(-7px);
      -ms-transform: translateX(10px) translateY(-7px);
      background-color: ${theme.colors.blue_700};
      font-size: 0.65em;
      padding: 0 10px;
      font-weight: 500;
      border-left: 1.5px solid ${theme.colors.white};
      border-right: 1.5px solid ${theme.colors.white};
      letter-spacing: 0.2em;
    }

    & input:valid,
    & input:focus {
      border: 1.5px solid ${theme.colors.white};
    }
  `}
`;
