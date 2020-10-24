import React from 'react';
import { Layout } from '../components/Layout';
import { GetStaticProps } from 'next';
import { content } from '../content';
import Link from 'next/link';

type Props = {
  articles: content.Article[];
};

const Article: React.FC<{ article: content.Article }> = ({ article }) => (
  <div>
    <div>
      <Link href={`article/${article.id}`}>
        <a>{article.title}</a>
      </Link>
    </div>
    {/*
    <div className="pl-4 text-sm">
      {article.tags.map(tag => (
        <Link href={`tags/${tag.id}`}>
          <a className="pr-2">#{tag.value}</a>
        </Link>
      ))}
    </div>
    */}
  </div>
);

const Component: React.FC<Props> = ({ articles }) => (
  <Layout title="HOME" description="sidearrow のメモ">
    <section>
      <h2>記事一覧</h2>
      <div className="mt-4">
        {articles.map(v => (
          <div className="mb-2">
            <Article article={v} />
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Component;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articles: content.getArticleMany().filter(v => v.id !== 'style-confirm') },
});

export const config = { amp: true };
