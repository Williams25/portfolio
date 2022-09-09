import styled, { css } from "styled-components";

export const Contact = styled.div`
  ${() => css`
    background: linear-gradient(
      to right top,
      #321023,
      #2d1127,
      #27122b,
      #20142d,
      #17152f,
      #101831,
      #071a31
    );
    & .contact-container {
      padding: 4rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      & > div {
        display: flex;
        justify-content: center;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;

        & div:first-child {
          display: none;
        }
      }

      & img {
        transition: all 0.2s linear;
        /* animation: toUpAndDown 5s linear forwards infinite; */
        width: 100%;
        height: 100%;
        object-fit: contain;
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
