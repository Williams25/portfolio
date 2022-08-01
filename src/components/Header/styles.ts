import styled, { css, DefaultTheme } from "styled-components";

type HeaderStyles = {
  scrolled: boolean;
};

const wrapperModifiersHeaderScrolled = (theme: DefaultTheme) => css`
  background-color: ${theme.background.black_500};
  position: sticky;
  top: 0;
`;

export const Header = styled.header<HeaderStyles>`
  ${({ theme, scrolled }) => css`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.white_200};
    background-color: transparent;
    transition: 0.3s ease-in-out;

    ${scrolled && wrapperModifiersHeaderScrolled(theme)};

    & .content-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;

      & .logo {
        max-width: 150px;
        width: 100%;
      }
      & .menu-items {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        gap: 2rem;

        & nav {
          & a {
            color: ${theme.colors.white};
            transition: 0.3s ease-in-out;
            font-size: 1.125rem;
            font-weight: 500;
            letter-spacing: 0.1rem;

            &:hover {
              filter: brightness(0.8)
            }
          }
        }

        & ul {
          display: flex;
          gap: 1rem;
          list-style: none;

          & li {
            transition: 0.5s;
            width: 2.55rem;
            height: 2.55rem;
            padding: 0;

            & a {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 1px solid ${theme.colors.white};
              overflow: : hidden;

              &::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: ${theme.background.white};
                  border-radius: 50%;
                  transform: scale(0);
                  transition: 0.3s ease-in-out;
                  z-index: -1;
                }

              & svg {
                font-size: 1.625rem;
                color: ${theme.colors.white};
                transition: 0.3s ease-in-out;
              }

              &:hover {
                filter: brightness(0.8);

                & svg {
                  color: ${theme.colors.black_500};
                }

                &::before {
                  transform: scale(1);
                }
              }
            }
          }
        }
      }
    }
  `}
`;
