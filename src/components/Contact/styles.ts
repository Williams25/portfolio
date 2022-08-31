import styled, { css } from "styled-components";

export const Contact = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      90.21deg,
      ${theme.colors.pink} -5.91%,
      ${theme.colors.blue} 111.58%
    );
    & .contact-container {
      padding: 4rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      & img {
        transition: all 0.2s linear;
        animation: toUpAndDown 5s linear forwards infinite;
        max-width: 400px;
        object-fit: contain;
        pointer-events: none;
      }

      & form {
        margin: 2rem auto 0;
        display: flex;
        flex-direction: column;

        gap: 1rem;
        max-width: 500px;
        width: 100%;
        padding: 0 1rem;

        & .input-group {
          display: flex;
          gap: 1rem;
          width: 100%;

          @media (max-width: 768px) {
            flex-direction: column;
          }
        }
      }
    }

    @keyframes toUpAndDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}
`;
