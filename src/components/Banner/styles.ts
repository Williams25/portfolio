/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export const Banner = styled.section`
  ${({ theme }) => css`
    margin-top: -75px;
    padding: 260px 0 100px 0;
    background-image: url("/assets/img/banner-bg.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    & .container-banner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;

      .content-description {
        & .tagline {
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 8px 10px;
          background: linear-gradient(
            90.21deg,
            rgba(170, 54, 124, 0.5) -5.91%,
            rgba(74, 47, 189, 0.5) 111.58%
          );
          border: 1px solid rgba(255, 255, 255, 0.5);
          font-size: 20px;
          margin-bottom: 16px;
          display: inline-block;
        }
      }

      & .animate_image {
        animation: slide-top 4s linear infinite;
        display: flex;
        justify-content: center;

        & img {
          width: 500px;
          height: 500px;
        }
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
  `}
`;
