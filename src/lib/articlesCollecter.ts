import fs from 'fs';
import path from 'path';
import { parseMarkdown } from './markdownParser';

const ARTICLES_DIR = 'content/articles';

export type Article = {
  articleId: string;
  title: string;
  description: string;
  content: string;
};

export const articlesCollecter = {
  getList: (): Article[] => {
    return fs.readdirSync(ARTICLES_DIR).map((filename) => {
      const { frontmatters } = parseMarkdown(
        fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8'),
        true
      );
      if (!('title' in frontmatters)) {
        throw new Error(`title is required in frontmatter: ${filename}`);
      }
      return {
        articleId: path.basename(filename, '.md').substr(11),
        title: <string>frontmatters.title,
        description: <string>frontmatters.description,
        content: '',
      };
    });
  },
  getOne: (articleId: string): Article => {
    const filename = fs
      .readdirSync(ARTICLES_DIR)
      .find(
        (filename) => path.basename(filename, '.md').substr(11) === articleId
      );
    if (filename === undefined) {
      throw new Error(`file not found: ${articleId}`);
    }
    const { frontmatters, content } = parseMarkdown(
      fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8')
    );
    if (!('title' in frontmatters)) {
      throw new Error(`title is required in frontmatter: ${filename}`);
    }
    return {
      articleId: articleId,
      title: <string>frontmatters.title,
      description: <string>frontmatters.description,
      content: content,
    };
  },
};
