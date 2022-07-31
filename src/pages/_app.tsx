import type { AppProps } from "next/app";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
