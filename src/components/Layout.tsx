import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import './../assets/index.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container" style={{ paddingTop: '2rem' }}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
