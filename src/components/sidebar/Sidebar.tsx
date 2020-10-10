import Link from 'next/link';
import React from 'react';

export const SIDEBAR_ID = 'sidebar';

const sidebarStyle: React.CSSProperties = {
  width: '300px',
  maxWidth: '90%',
};

export const Sidebar: React.FC = () => (
  <amp-sidebar id={SIDEBAR_ID} layout="nodisplay" style={sidebarStyle}>
    <div className="w-full h-full bg-white px-4 py-8">
      <div>
        <Link href="/articles/development-history">
          <a>開発履歴</a>
        </Link>
      </div>
    </div>
  </amp-sidebar>
);
