import fs from 'fs';
import path from 'path';
import marked from 'marked';
import grayMatter from 'gray-matter';
import { highlightAuto } from 'highlightjs';

const ARTICLE_DIR = 'content/articles';

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

function getArticlePaths(): string[] {
  return fs.readdirSync(ARTICLE_DIR);
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

function getArticle(name: string): MarkdownParseResponse {
  const filepath = path.join(ARTICLE_DIR, name, `${name}.md`);
  const markdownRaw = fs.readFileSync(filepath, { encoding: 'utf-8' });

  const { title, description, html } = parseMarkdown(markdownRaw);

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
