import React, { useState } from 'react';
import { Link } from 'gatsby';
import { config } from '../config';

export const Navbar: React.FC = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleMenuShow = (): void => {
    setIsMenuShow(true);
  };
  const handleMenuClose = (): void => {
    setIsMenuShow(false);
  };

  return (
    <nav
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        borderBottom: 'solid 1px #dce3e5',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {config.title}
        </Link>

        <button onClick={handleMenuShow} style={{ fontSize: 'small' }}>
          MENU
        </button>
      </div>
      <div
        style={{
          background: 'white',
          opacity: 0.9,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: isMenuShow ? 'block' : 'none',
        }}
      >
        <div className="container" style={{ paddingTop: '1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <button onClick={handleMenuClose} style={{ fontSize: 'small' }}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
