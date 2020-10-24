import articleTags from '../content/article_tags.json';
import articles from '../content/article.json';

export namespace content {

  export type ArticleTag = {
    id: string;
    value: string;
  };

  export type Article = {
    id: string;
    title: string;
    description: string;
    content: string;
    tags: ArticleTag[];
  };

  export function getArticleTags(): ArticleTag[] {
    return articleTags;
  }

  export function getArticleOne(id: string): Article {
    return articles.find(v => v.id === id) as Article;
  }

  export function getArticleMany(): Article[] {
    return articles;
  }

};
