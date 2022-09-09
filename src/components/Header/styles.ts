import styled, { css, DefaultTheme } from "styled-components";
import { rgba } from "polished";

type HeaderStyles = {
  scrolled: boolean;
};

const wrapperModifiersHeaderScrolled = (theme: DefaultTheme) => css`
  background-color: ${rgba(theme.background.black_500, 0.9)};
  position: sticky;
  top: 0;
`;

export const Header = styled.header<HeaderStyles>`
  ${({ theme, scrolled }) => css`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid ${rgba(theme.colors.white_200, 0.1)};
    background-color: transparent;
    transition: 0.3s ease-in-out;
    z-index: 1001;
    ${scrolled && wrapperModifiersHeaderScrolled(theme)};

    & .content-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      gap: 1rem;

      & .burguer-menu {
        background: transparent;
        border: 0;
        outline: none;
        color: ${theme.colors.white};
        transition: 0.3s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          filter: brightness(0.8);
        }

        @media (min-width: 870px) {
          display: none;
        }
      }

      & .logo {
        max-width: 150px;
        width: 100%;

        & a {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        & img {
          cursor: pointer;
          min-width: 85px !important;
          min-height: 25px !important;
        }
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
              filter: brightness(0.8);
            }
          }
        }

        & ul {
          display: flex;
          gap: 1rem;
          list-style: none;
          user-select: none;

          & li {
            transition: 0.5s;
            padding: 0;
            display: block;
            margin: auto;
          }
        }

        @media (max-width: 870px) {
          & ul li:not(.icon) {
            display: none;
          }
        }
      }
    }
  `}
`;

type MenuMobileStyle = {
  show?: boolean;
};

export const MenuMobile = styled.div<MenuMobileStyle>`
  ${({ theme, show }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${show ? 1100 : -1};
    opacity: ${show ? 1 : 0};
    visibility: ${show ? "visibility" : "hidden"};
    transition: all 0.2s linear;

    & .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: ${show ? 1 : 0};
      visibility: ${show ? "visibility" : "hidden"};
      transition: all 0.2s linear;
      background-color: ${theme.colors.black_800};
      z-index: -1;
    }

    & .close-burguer-menu {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: auto;
      background: transparent;
      border: 0;
      outline: none;
      color: ${theme.colors.white};
      transition: 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }

    & .menu-mobile {
      max-width: 350px;
      width: 100%;
      height: 100%;
      background: ${theme.background.blue_900};
      box-shadow: 0 0 5px ${theme.colors.blue_900},
        0 0 5px ${theme.colors.blue_900};
      padding: 1rem;
      z-index: ${show ? 1100 : -1};
      transition: all 0.2s linear;
      transform: translateX(${show ? 0 : -350}px) translateY(0);

      @media (max-width: 500px) {
        max-width: 250px;
      }

      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;
      }

      & nav {
        width: 100%;
        & a {
          display: inline-block;
          width: inherit;
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
    }
  `}
`;
