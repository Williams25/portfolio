import styled, { css } from "styled-components";

export const NotFound = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.background.black_500};

    & div {
      animation: slide-top 5s linear infinite;

      @media (max-width: 768px) {
        animation: slide-top-mobile 5s linear infinite;
      }
    }

    @keyframes slide-top {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-100px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes slide-top-mobile {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}
`;
