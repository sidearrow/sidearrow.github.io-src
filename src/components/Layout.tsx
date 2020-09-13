import React from 'react';
import { Navbar } from './Navbar';
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
      <header>
        <Navbar />
      </header>
      <main className="container py-12">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
