import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../../components/Layout';
import { Diary, diary } from '../../lib/diary';

type Props = {
  diary: Diary;
};

const Component: React.FC<Props> = ({ diary }) => {
  return (
    <Layout title={`日記 ${diary.id}`} description={`日記 ${diary.id}`}>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: diary.html }}
      ></div>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: diary.getIds().map((diaryId) => ({ params: { diaryId: diaryId } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = diary.getOne(ctx.params?.diaryId as string);
  if (res === undefined) {
    throw new Error();
  }
  return { props: { diary: res } };
};

export const config = { amp: true };
