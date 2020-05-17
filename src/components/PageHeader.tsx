import React from 'react';

export const PageHeader: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <h1 style={{ fontSize: '1.4rem', fontWeight: 'normal' }}>{title}</h1>
      <>{children}</>
      <hr style={{ marginBottom: '2rem' }} />
    </>
  );
};
