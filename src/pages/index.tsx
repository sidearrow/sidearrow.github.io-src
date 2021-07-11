import React from 'react';
import { Layout } from '../components/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Article } from '../models';
import { ArticleService } from '../server/articleService';

type Props = {
  articles: Article[];
};

const ArticleBox: React.FC<{ article: Article }> = ({ article }) => (
  <div>
    <div>
      <Link href={`article/${article.id}`}>
        <a className="text-blue-700">{article.title}</a>
      </Link>
    </div>
    <div className="text-sm">
      <span>作成日：{article.createdAt}</span>
      <span className="ml-2">更新日：{article.updatedAt}</span>
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
      <div className="mt-4">
        {articles.map((v, i) => (
          <div className="mb-2" key={i}>
            <ArticleBox article={v} />
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Component;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: new ArticleService()
      .getMany()
      .filter((v) => v.id !== 'style-confirm'),
  },
});
