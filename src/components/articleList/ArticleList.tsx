import Link from 'next/link';
import React from 'react';
import { Article, articlesCollecter } from '../../lib/articlesCollecter';

export const ArticleList: React.FC<{ articles: Article[] }> = ({
  articles,
}) => {
  return (
    <>
      {articles.map((article, i) => (
        <div key={i}>
          <Link href={`/articles/${article.articleId}`}>
            <a>{article.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
};
