import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: Centra;
	src: url('/assets/font/CentraNo2-Bold.ttf');
	font-weight: 700;
}
@font-face {
	font-family: Centra;
	src: url('/assets/font/CentraNo2-Medium.ttf');
	font-weight: 500;
}
@font-face {
	font-family: Centra;
	src: url('/assets/font/CentraNo2-Book.ttf');
	font-weight: 400;
}

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 75px;

      @media (max-width: 1080px) {
        font-size: 93.75%; // tamanho da fonte * 0.9375
      }
      @media (max-width: 720px) {
        font-size: 87.5%; // tamanho da fonte * 0.875
      }
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.background.black_500};
      position: relative;
      color: ${theme.colors.white};
      font-family: "Centra", sans-serif;
    }

    body,
    input,
    textarea,
    button {
      font-family: "Centra", sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 700;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      line-height: normal;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}
`;
