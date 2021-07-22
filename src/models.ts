export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
};

export type ArticleTag = {
  id: string;
  value: string;
};
