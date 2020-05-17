import React from 'react';
import { Layout } from '../components/Layout';
import { ContentCard } from '../components/ContentCard';
import { PageHeader } from '../components/PageHeader';
import { ArticleTagPageContext } from '../pageContext';

const Component: React.FC<{
  pageContext: ArticleTagPageContext;
}> = ({ pageContext }) => {
  const { tag, articles } = pageContext;

  return (
    <Layout>
      <PageHeader title={`#${tag.name}`} />
      {articles.map((article, i) => (
        <ContentCard
          key={i}
          id={article.id}
          title={article.title}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
        />
      ))}
    </Layout>
  );
};

export default Component;
