import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Head } from '../components/Head';
import { PageHeader } from '../components/PageHeader';
import { ArticlePageContext } from '../pageContext';

import 'github-markdown-css/github-markdown.css';

const TemplateComponent: React.FC<{ pageContext: ArticlePageContext }> = ({
  pageContext: { article },
}) => {
  return (
    <Layout>
      <Head title={article.title} description={article.description} />
      <PageHeader title={article.title}>
        <div className="text-right text-gray-700 my-4 text-xs">
          <div>作成日：{article.createdAt}</div>
          <div>最終更新日：{article.updatedAt}</div>
        </div>
        <div className="mb-4 text-sm">
          {article.tags.map((tag, i) => (
            <Link to={`/article/tag/${tag.id}`} key={i} className="mr-2">
              #{tag.name}
            </Link>
          ))}
        </div>
      </PageHeader>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: article.html }}
      ></div>
    </Layout>
  );
};

export default TemplateComponent;
