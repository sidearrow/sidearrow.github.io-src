import fs from 'fs';
import path from 'path';
import marked from 'marked';
import grayMatter from 'gray-matter';
import { highlightAuto } from 'highlightjs';
import { CONST } from './const';

const CONTENT_DIR = 'content';

const markedRenderer = new marked.Renderer();
marked.setOptions({
  highlight: (code, lang) => {
    return highlightAuto(code, [lang]).value;
  },
});

type MarkdownParseResponse = {
  title: string;
  description: string;
  html: string;
};

function getArticleIDs(): string[] {
  return fs.readdirSync(CONTENT_DIR);
}

function getArticleFilePath(id: string): string {
  return path.join(CONTENT_DIR, id, `${id}.md`);
}

function parseMarkdown(str: string): MarkdownParseResponse {
  const REQUIRED_FIELDS = ['title', 'description'];
  const grayMatterRes = grayMatter(str);
  for (const field of REQUIRED_FIELDS) {
    if (!(field in grayMatterRes.data)) {
      throw new Error(`${field} is required in markdown meta.`);
    }
  }
  const title = <string>grayMatterRes.data.title;
  const description = <string>grayMatterRes.data.description;
  const html = marked(grayMatterRes.content, { renderer: markedRenderer });

  return {
    title: title,
    description: description,
    html: html,
  };
}

export type Article = {
  id: string;
  title: string;
  description: string;
  html: string;
};

function getArticle(id: string): Article {
  const filepath = getArticleFilePath(id);
  const markdownRaw = fs.readFileSync(filepath, { encoding: 'utf-8' });

  const { title, description, html } = parseMarkdown(markdownRaw);

  return {
    id: id,
    title: title,
    description: description,
    html: html,
  };
}

function getArticles(withoutFixedPage = true): Article[] {
  const ids = getArticleIDs();
  const targetIds = withoutFixedPage
    ? ids.filter((id) => CONST.FIXED_PAGE_IDS.indexOf(id) === -1)
    : ids;

  const articles = targetIds.map((id) => getArticle(id));

  return articles;
}

export const content = {
  getArticleIDs: getArticleIDs,
  getArticle: getArticle,
  getArticles: getArticles,
};
