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
    <nav className="py-4 border-b border-gray-400">
      <div className="container flex justify-between">
        <Link className="no-underline" to="/">
          {config.title}
        </Link>

        <button className="text-sm" onClick={handleMenuShow}>
          MENU
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-white"
        style={{
          opacity: 0.95,
          display: isMenuShow ? 'block' : 'none',
        }}
      >
        <div className="container pt-4">
          <div className="text-right">
            <button className="text-sm" onClick={handleMenuClose}>
              CLOSE
            </button>
          </div>
          <div>
            <div>
              <Link to="/about" onClick={handleMenuClose}>
                ABOUT
              </Link>
            </div>
            <div>
              <Link to="/development-history" onClick={handleMenuClose}>
                開発履歴
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
