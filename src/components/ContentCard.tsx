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
      <Link to={`/article/${id}`}>{title}</Link>
      <div className="text-gray-600 text-sm">
        <span className="mr-2">作成日：{createdAt}</span>
        <span>最終更新日：{updatedAt}</span>
      </div>
    </div>
  );
};
