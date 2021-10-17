import fs from 'fs';
import path from 'path';

import { parseMarkdown } from '../markdownParser';
import { Article } from '../models';

const ARTICLES_DIR = 'content/articles';

export function getArticles(): Article[] {
  const articles = fs
    .readdirSync(ARTICLES_DIR)
    .map((filename) => {
      const filecontent = fs.readFileSync(
        path.join(ARTICLES_DIR, filename),
        'utf-8'
      );
      const id = path.basename(filename, '.md');
      const res = parseMarkdown(filecontent, true);
      const title: string = res.frontmatters.title;
      const description: string = res.frontmatters.description;
      const createdAt: Date = res.frontmatters.createdAt;
      const updatedAt: Date = res.frontmatters.updatedAt;
      return {
        id: id,
        title: title,
        description: description,
        createdAt: createdAt.toISOString().substr(0, 10).replace(/-/g, '/'),
        updatedAt: updatedAt.toISOString().substr(0, 10).replace(/-/g, '/'),
        tags: res.frontmatters.tags,
        content: '',
      };
    })
    .sort((a, b) => {
      return b.updatedAt > a.updatedAt ? -1 : 1;
    });
  return articles;
}

export function getArticle(id: string): Article {
  const articleFilePath = path.join(ARTICLES_DIR, id + '.md');
  const markdown = fs.readFileSync(articleFilePath, 'utf-8');
  const res = parseMarkdown(markdown);
  const title: string = res.frontmatters.title;
  const description: string = res.frontmatters.description;
  const createdAt: Date = res.frontmatters.createdAt;
  const updatedAt: Date = res.frontmatters.updatedAt;
  const content = res.content;
  return {
    id: id,
    title: title,
    description: description,
    createdAt: createdAt.toISOString().substr(0, 10).replace(/-/g, '/'),
    updatedAt: updatedAt.toISOString().substr(0, 10).replace(/-/g, '/'),
    content: content,
    tags: res.frontmatters.tags,
  };
}
