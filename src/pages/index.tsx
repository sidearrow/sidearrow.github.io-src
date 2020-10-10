import React from 'react';
import { Layout } from '../components/Layout';
import { GetStaticProps } from 'next';
import { DiaryList } from '../components/diaryList/DiaryList';
import { ArticleList } from '../components/articleList/ArticleList';
import { Article, articlesCollecter } from '../lib/articlesCollecter';

type Props = {
  articles: Article[];
};

const Component: React.FC<Props> = ({ articles }) => (
  <Layout title="HOME" description="sidearrow のメモ">
    <section>
      <h2>記事一覧</h2>
      <div className="mt-4">
        <ArticleList articles={articles} />
      </div>
    </section>
    <section className="mt-8">
      <h2>Diary</h2>
      <div className="mt-4">
        <DiaryList />
      </div>
    </section>
  </Layout>
);

export default Component;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { articles: articlesCollecter.getList() },
});

export const config = { amp: true };
