import styled, { css } from "styled-components";

export const TextArea = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    & textarea {
      width: 100%;
      height: 160px;
      padding: 10px;
      border: 1.5px solid ${theme.colors.blue_200};
      background-color: ${theme.colors.blue_700};
      color: ${theme.colors.white};
      border-radius: 4px;
      outline: none;
      font-size: 1em;
      transition: border 0.2s linear;
      resize: none;
      letter-spacing: 0.1px;
    }
    & span {
      position: absolute;
      left: 0;
      padding: 10px;
      font-size: 1em;
      pointer-events: none;
      text-transform: uppercase;
      transition: all 0.2s linear;
      transition-delay: 0;
      color: ${theme.colors.white};
      transform: translateX(10px);
    }

    & textarea:valid ~ span,
    & textarea:focus ~ span {
      color: ${theme.colors.white};
      transform: translateX(10px) translateY(-7px);
      -ms-transform: translateX(10px) translateY(-7px);
      background-color: ${theme.colors.blue_700};
      font-size: 0.65em;
      padding: 0 10px;
      font-weight: 500;
      border-left: 1.5px solid ${theme.colors.blue_300};
      border-right: 1.5px solid ${theme.colors.blue_300};
      letter-spacing: 0.2em;
    }

    & textarea:valid,
    & textarea:focus {
      border: 1.5px solid ${theme.colors.blue_300};
    }
  `}
`;
