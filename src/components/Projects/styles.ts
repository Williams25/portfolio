import styled, { css } from "styled-components";

export const Projects = styled.section`
  ${({ theme }) => css`
    padding: 80px 0;
    position: relative;
    background: rgb(23, 15, 30) url("/assets/img/grain-dark.9d5983e6.png")
      repeat scroll 0% 0%;

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
    & .project-items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2.5rem;
      max-width: 1280px;
      margin: 3rem auto 0;

      @media (max-width: 1312px) {
        max-width: 840px;
      }
    }
  `}
`;
