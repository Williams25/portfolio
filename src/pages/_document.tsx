import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.williams25.com/" />
          <meta property="og:title" content="Portfolio - Williams25" />
          <meta property="og:description" content="Portfolio - Williams25" />
          <meta name="description" content="Portfolio - Williams25" />
          <meta
            property="og:image"
            content="https://www.williams25.com/Logo_Responsivo/Negativo/Negativo.png"
          />
          <meta name="robots" content="index" />

          <link rel="canonical" href="https://www.williams25.com/" />
          <link rel="icon" href="Logo_Responsivo/Negativo/Negativo.png" />
          <link rel="icon" href="Logo_Responsivo/Negativo/Negativo.png" />
          <link
            rel="apple-touch-icon"
            href="Logo_Responsivo/Negativo/Negativo.png"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
