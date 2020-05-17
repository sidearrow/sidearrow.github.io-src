import React from 'react';
import { Link } from 'gatsby';

export const ContentCard: React.FC<{
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}> = ({ id, title, createdAt, updatedAt }) => {
  return (
    <div>
      <Link to={`/article/${id}`} style={{ marginRight: '2rem' }}>
        {title}
      </Link>
      <span
        style={{ color: 'gray', display: 'inline-block', fontSize: 'small' }}
      >
        <span style={{ marginRight: '0.5rem' }}>作成日：{createdAt}</span>
        <span>最終更新日：{updatedAt}</span>
      </span>
    </div>
  );
};
