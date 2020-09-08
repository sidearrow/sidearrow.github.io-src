import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { content } from '../../content';
import { Layout } from '../../components/Layout';

type Props = {
  title: string;
  description: string;
  html: string;
};

const Component: React.FC<Props> = ({ title, description, html }) => {
  return (
    <Layout>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = content.getArticlePaths();

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
