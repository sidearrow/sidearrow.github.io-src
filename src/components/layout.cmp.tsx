import React from 'react';

const CmpLayout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default CmpLayout;
