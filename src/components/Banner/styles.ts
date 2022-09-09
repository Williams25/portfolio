/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export const Banner = styled.section`
  ${({ theme }) => css`
    margin-top: -85px;
    padding: 260px 0 100px 0;
    background-image: url("/assets/img/banner-bg.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

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

        & h1 {
          font-size: 2.5rem;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        & p {
          font-size: 1rem;
          line-height: 1.5;
        }

        & .txt-rotate > .wrap {
          border-right: 0.1em solid;
          border-color: ${theme.colors.grey_400};
          padding-right: 0.2rem;
        }
      }

      & .animate_image {
        animation: slide-top 5s linear infinite;
        display: flex;
        justify-content: center;
        z-index: 1;

        img {
          width: 500px;
          height: 500px;
        }
      }
    }

    @media (max-width: 768px) {
      margin-top: -175px;

      & .container-banner {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 3rem;

        & h1 {
          min-height: 80px;
        }

        & .animate_image {
          animation: slide-top-mobile 5s linear infinite;
        }
      }
    }

    @media (max-width: 670px) {
      padding: 320px 0 100px 0;
    }

    @media (max-width: 430px) {
      & .container-banner {
        & h1 {
          min-height: 110px;
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
