import { Article, ArticleTag } from './article';

export type ArticlePageContext = {
  article: Article;
};

export type ArticleTagPageContext = {
  tag: ArticleTag;
  articles: Article[];
};
