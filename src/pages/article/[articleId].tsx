import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/Layout';
import { Article } from '../../models';
import { ArticleService } from '../../server/articleService';

type Props = {
  article: Article;
};

const Component: React.FC<Props> = ({
  article: { title, description, content },
}) => {
  return (
    <Layout title={title} description={description}>
      <i className="fas fa-external-link-alt"></i>
      <div
        className="markdown-body my-20"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: new ArticleService()
      .getMany()
      .map((v) => ({ params: { articleId: v.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: {
      article: new ArticleService().getOne(ctx.params?.articleId as string),
    },
  };
};
