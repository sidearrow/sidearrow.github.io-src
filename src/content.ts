import fs from 'fs';
import path from 'path';
import marked from 'marked';
import grayMatter, { GrayMatterFile } from 'gray-matter';

const ARTICLE_DIR = 'content/articles';

type MarkdownParseResponse = {
  title: string;
  description: string;
  html: string;
  breadcrumbs?: { text: string; path: string | null }[];
};

function getArticlePaths(): string[] {
  return fs.readdirSync(ARTICLE_DIR);
}

class ArticleMarkdown {
  private md: undefined | GrayMatterFile<string>;

  public parse(str: string) {
    this.md = grayMatter(str);
    console.log(this.md);
  }

  public getTitle(): string {
    if (this.md === undefined || !('title' in this.md.data)) {
      throw new Error();
    }
    return this.md.data.title;
  }

  public getDescription(): string {
    if (this.md === undefined || !('description' in this.md.data)) {
      throw new Error();
    }
    return this.md.data.description;
  }

  public getHtml(): string {
    if (this.md === undefined) {
      throw new Error();
    }
    return marked(this.md.content);
  }
}

function getArticle(name: string): MarkdownParseResponse {
  const filepath = path.join(ARTICLE_DIR, name, `${name}.md`);
  const markdownRaw = fs.readFileSync(filepath, { encoding: 'utf-8' });
  const articleMarkdown = new ArticleMarkdown();
  articleMarkdown.parse(markdownRaw);

  const title = articleMarkdown.getTitle();
  const description = articleMarkdown.getDescription();
  const html = articleMarkdown.getHtml();

  return {
    title: title,
    description: description,
    html: html,
  };
}

export const content = {
  getArticlePaths: getArticlePaths,
  getArticle: getArticle,
};
