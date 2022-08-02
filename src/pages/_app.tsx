import type { AppProps } from "next/app";
// import { Header } from "src/components";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Header /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
