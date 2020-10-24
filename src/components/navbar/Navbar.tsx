import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { CONST } from '../../const';
import { SIDEBAR_ID } from '../sidebar/Sidebar';

export const Navbar: React.FC = () => {
  return (
    <nav className="py-4 border-b border-gray-400">
      <div className="container flex justify-between">
        <Link href="/">
          <a className="no-underline">{CONST.TITLE}</a>
        </Link>
        {/*
        <button className="px-2" on={`tap:${SIDEBAR_ID}.toggle`}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        */}
      </div>
    </nav>
  );
};
