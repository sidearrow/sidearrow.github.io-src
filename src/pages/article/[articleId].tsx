import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { content } from '../../content';

type Props = {
  article: content.Article;
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: content.getArticleMany().map((v) => ({ params: { articleId: v.id } })),
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: { article: content.getArticleOne(ctx.params?.articleId as string) },
  }
};

export const config = { amp: true };
