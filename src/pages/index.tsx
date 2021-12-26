import React from 'react';
import { Layout } from '../components/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Article } from '../models';
import { getArticles } from '../server/articleService';

type Props = {
  articles: Article[];
};

const ArticleBox: React.FC<{ article: Article }> = ({ article }) => (
  <div>
    <Link href={`article/${article.id}`}>
      <a className="text-blue-700">{article.title}</a>
    </Link>
  </div>
);

const Component: React.FC<Props> = ({ articles }) => {
  return (
    <Layout title="HOME" description="sidearrow のメモ">
      <section>
        <div className="mt-4">
          {articles
            .filter((v) => v.tags.indexOf('compro') === -1)
            .filter((v) => v.tags.indexOf('statistics') === -1)
            .map((v, i) => (
              <div className="mb-2" key={i}>
                <ArticleBox article={v} />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Component;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: getArticles().filter((v) => v.id !== 'style-confirm'),
  },
});
