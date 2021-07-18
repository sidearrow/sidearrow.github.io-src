import React from 'react';
import { Navbar } from './navbar/Navbar';
import { Footer } from './Footer';
import Head from 'next/head';
import { CONST } from '../const';

export const Layout: React.FC<{ title: string; description: string }> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} | ${CONST.TITLE}`}</title>
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content={CONST.GOOGLE_SITE_VERIFICATION}
        />
      </Head>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header>
          <Navbar />
        </header>
        <main style={{ flexGrow: 1 }}>
          <div className="container">{children}</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
