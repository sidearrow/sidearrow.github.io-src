import React from 'react';

export const PageHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="gray-700">{description}</p>
    </>
  );
};
