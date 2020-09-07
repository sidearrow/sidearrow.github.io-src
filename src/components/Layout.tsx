import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
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
