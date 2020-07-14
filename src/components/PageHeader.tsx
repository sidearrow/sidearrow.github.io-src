import React from 'react';

export const PageHeader: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <h1 className="text-xl">{title}</h1>
      <>{children}</>
      <hr className="mb-8 border-gray-400" />
    </>
  );
};
