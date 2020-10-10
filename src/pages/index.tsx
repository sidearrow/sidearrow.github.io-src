import React from 'react';
import { Layout } from '../components/Layout';
import { GetStaticProps } from 'next';
import { content, Article } from '../content';
import Link from 'next/link';
import { DiaryList } from '../components/diaryList/DiaryList';

type Props = {
  articles: Article[];
};

const Component: React.FC<Props> = ({ articles }) => (
  <Layout title="HOME" description="sidearrow のメモ">
    <h2>記事一覧</h2>
    <div className="mt-4">
      {articles.map((article, i) => (
        <div key={i} className="mt-2">
          <Link href={`/article/${article.id}`}>
            <a>{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
    <section className="mt-8">
      <h2>Diary</h2>
      <div className="mt-4">
        <DiaryList />
      </div>
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = content.getArticles();

  return {
    props: { articles: articles },
  };
};

export default Component;

export const config = { amp: true };
