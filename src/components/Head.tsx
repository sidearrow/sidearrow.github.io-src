import React from 'react';
import { Helmet } from 'react-helmet';

export const Head: React.FC<{
  title?: string;
  description: string;
}> = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title === undefined ? '' : `${title} | `}sidearrow Notebook</title>
    <meta name="description" content={description} />
  </Helmet>
);
