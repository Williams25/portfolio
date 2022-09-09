import styled, { css } from "styled-components";

export const Projects = styled.section`
  ${({ theme }) => css`
    padding: 80px 0;
    position: relative;
    background-color: ${theme.background.black};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & h1 {
      font-size: 2.125rem;
      font-weight: 700;
      text-align: center;
    }
    & p {
      color: ${theme.colors.grey_400};
      font-size: 1.125rem;
      letter-spacing: 0.1rem;
      line-height: 1.5em;
      margin: 14px auto 30px auto;
      text-align: center;

      & a {
        color: ${theme.colors.white_100};
        border-bottom: 2px solid transparent;
        border-radius: 1px;
        transition: all 0.2s linear;

        &:hover {
          border-bottom: 2px solid ${theme.colors.white_100};
        }
      }

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  `}
`;
