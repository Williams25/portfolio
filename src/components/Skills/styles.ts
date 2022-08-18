import styled, { css } from "styled-components";

export const Skills = styled.section`
  ${({ theme }) => css`
    #skills {
      position: relative;
      background: ${theme.background.black_600};
      border-radius: 64px;
      text-align: center;
      padding: 60px 50px;
      margin-top: -60px;
    }

    &::after {
      content: "";
      position: absolute;
      background-image: url("/assets/img/color-sharp.png");
      background-repeat: no-repeat;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: -4;
    }

    & h1 {
      font-size: 2.125rem;
      margin-bottom: 2rem;
    }
    & .react-multi-carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .item {
      width: 180px;
      height: 200px;
    }
    & .background-image-left {
      position: absolute;
      top: 0;
      /* bottom: 0; */
      left: 0;
      width: 100%;
      z-index: -4;
    }
  `}
`;
