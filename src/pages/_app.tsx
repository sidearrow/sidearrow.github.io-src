import React from 'react';
import { AppProps } from 'next/app';

import './../style/index.css';
import './../style/markdown.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
