import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// @ts-ignore
import stylecss from '!raw-loader!../styles/bundle.css';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Navbar } from '../components/navbar/Navbar';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...page,
      styles: [
        ...(initialProps.styles as React.Component[]),
        <style dangerouslySetInnerHTML={{ __html: stylecss }} key="custom" />,
      ],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
          ></script>
        </Head>
        <body>
          <Main />
          <Sidebar />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
