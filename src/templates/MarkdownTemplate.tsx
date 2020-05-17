import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Head } from '../components/Head';
import { PageHeader } from '../components/PageHeader';
import { ArticlePageContext } from '../pageContext';

const TemplateComponent: React.FC<{ pageContext: ArticlePageContext }> = ({
  pageContext: { article },
}) => {
  return (
    <Layout>
      <Head title={article.title} description={article.description} />
      <PageHeader title={article.title}>
        <div
          style={{
            textAlign: 'right',
            color: 'gray',
            fontSize: 'small',
            marginBottom: '1rem',
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <span style={{ marginRight: '0.3rem' }}>作成日</span>
            <span>{article.createdAt}</span>
          </div>
          <div>
            <span style={{ marginRight: '0.3rem' }}>最終更新日</span>
            <span>{article.updatedAt}</span>
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          {article.tags.map((tag, i) => (
            <Link
              to={`/article/tag/${tag.id}`}
              key={i}
              style={{ marginRight: '0.5rem' }}
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </PageHeader>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: article.html }}
      ></div>
    </Layout>
  );
};

export default TemplateComponent;
