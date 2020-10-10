import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { Article, articlesCollecter } from '../../lib/articlesCollecter';

type Props = {
  article: Article;
};

const Component: React.FC<Props> = ({
  article: { title, description, content },
}) => {
  return (
    <Layout title={title} description={description}>
      <PageHeader title={title} description={description} />
      <div
        className="markdown-body mt-8"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: articlesCollecter
    .getList()
    .map((articles) => ({ params: { articleId: articles.articleId } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async (ctx) => ({
  props: { article: articlesCollecter.getOne(ctx.params?.articleId as string) },
});

export const config = { amp: true };
