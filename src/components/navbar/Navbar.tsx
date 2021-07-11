import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { CONST } from '../../const';

export const Navbar: React.FC = () => {
  return (
    <nav className="py-4 border-b">
      <div className="container flex justify-between">
        <Link href="/">
          <a className="no-underline">{CONST.TITLE}</a>
        </Link>
        {/*
        <button className="px-2">
          <FontAwesomeIcon icon={faBars} />
        </button>
        */}
      </div>
    </nav>
  );
};
