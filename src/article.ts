export type ArticleTag = {
  id: string;
  name: string;
};

export type Article = {
  type: 'ARTICLE' | 'FIXED';
  html: string;
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tags: ArticleTag[];
};
