import React from 'react';
import { Helmet } from 'react-helmet';
import { config } from '../config';

export const Head: React.FC<{
  title?: string;
  description: string;
}> = ({ title, description }) => {
  title = title === undefined ? config.title : `${title} | ${config.title}`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
