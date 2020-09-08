import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CONST } from '../const';

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
        <Link href="/">
          <a className="no-underline">{CONST.TITLE}</a>
        </Link>

        <button className="px-2" onClick={handleMenuShow}>
          <FontAwesomeIcon icon={faBars} />
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
            <button className="px-2" onClick={handleMenuClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div>
            <div>
              <Link href={CONST.FIXED_PAGES.ABOUT.URL}>
                <a onClick={handleMenuClose}>{CONST.FIXED_PAGES.ABOUT.TEXT}</a>
              </Link>
            </div>
            <div>
              <Link href={CONST.FIXED_PAGES.DEVELOPMENT_HISOTRY.URL}>
                <a onClick={handleMenuClose}>
                  {CONST.FIXED_PAGES.DEVELOPMENT_HISOTRY.TEXT}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
