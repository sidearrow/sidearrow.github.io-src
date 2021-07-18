import fs from 'fs';
import path from 'path';

import { parseMarkdown } from '../markdownParser';
import { Article } from '../models';

export class ArticleService {
  private static ARTICLES_DIR = 'content/articles';

  static parseMarkdown(
    id: string,
    markdown: string,
    parseOnlyFrontmatter = false
  ): Article {
    const res = parseMarkdown(markdown, parseOnlyFrontmatter);
    const title: string = res.frontmatters.title;
    const description: string = res.frontmatters.description;
    const createdAt: Date = res.frontmatters.createdAt;
    const updatedAt: Date = res.frontmatters.updatedAt;
    const content = parseOnlyFrontmatter ? '' : res.content;
    return {
      id: id,
      title: title,
      description: description,
      createdAt: createdAt.toISOString().substr(0, 10).replace(/-/g, '/'),
      updatedAt: updatedAt.toISOString().substr(0, 10).replace(/-/g, '/'),
      content: content,
      tags: [],
    };
  }

  getMany(): Article[] {
    const articles = fs
      .readdirSync(ArticleService.ARTICLES_DIR)
      .map((filename) => {
        const filecontent = fs.readFileSync(
          path.join(ArticleService.ARTICLES_DIR, filename),
          'utf-8'
        );
        const id = path.basename(filename, '.md');
        const article = ArticleService.parseMarkdown(id, filecontent, true);
        return article;
      })
      .sort((a, b) => {
        return b.updatedAt > a.updatedAt ? -1 : 1;
      });
    return articles;
  }

  getOne(id: string): Article {
    const filename = fs
      .readdirSync(ArticleService.ARTICLES_DIR)
      .find((filename) => path.basename(filename, '.md') === id);
    if (filename === undefined) {
      throw new Error(`file not found: ${id}`);
    }
    const filecontent = fs.readFileSync(
      path.join(ArticleService.ARTICLES_DIR, filename),
      'utf-8'
    );
    const article = ArticleService.parseMarkdown(id, filecontent);
    return article;
  }
}
