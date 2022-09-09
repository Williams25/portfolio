import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 50px 0;
    background-image: url("./assets/img/footer-bg.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    & .container-footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 100%;

      & .logo,
      & .info-footer {
        display: flex;
        align-items: flex-start;
        flex: 1;
      }

      & .info-footer {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        & .social-media {
          display: flex;
          gap: 1rem;

          & svg {
            color: ${theme.colors.white};
            transition: 0.3s ease-in-out;
            font-size: 1.125rem;
            font-weight: 500;
            letter-spacing: 0.1rem;

            &:hover {
              filter: brightness(0.8);
            }
          }
        }

        & p {
          display: block;
          font-weight: 400;
          font-size: 0.975rem;
          color: ${theme.colors.grey_400};
          letter-spacing: 0.1rem;
          margin-top: 1rem;
        }
      }
    }
  `}
`;
