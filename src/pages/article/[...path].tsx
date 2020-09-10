import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { content } from '../../content';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';

type Props = {
  title: string;
  description: string;
  html: string;
};

const Component: React.FC<Props> = ({ title, description, html }) => {
  return (
    <Layout title={title} description={description}>
      <PageHeader title={title} description={description} />
      <div
        className="markdown-body mt-8"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = content.getArticleIDs();

  return {
    paths: paths.map((path) => ({ params: { path: [path] } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (ctx.params === undefined || !(ctx.params.path instanceof Array)) {
    throw new Error();
  }
  const path = ctx.params.path[0];
  const article = content.getArticle(path);

  return {
    props: { ...article },
  };
};

export default Component;
