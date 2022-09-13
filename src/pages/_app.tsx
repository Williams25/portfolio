import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { Header, Footer } from "src/components";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { AnalyticsProvider } from "src/contexts/AnalyticsProvider";
import { client } from "src/graphql/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-J8PYKQBWQF" />
      <Script
        id="googletagmanager"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J8PYKQBWQF');
            `
        }}
      />

      <ApolloProvider client={client}>
        <AnalyticsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Head>
              <title>Portfolio - Williams25</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </AnalyticsProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
