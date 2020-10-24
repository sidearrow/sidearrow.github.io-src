const fs = require('fs');
const path = require('path');
const marked = require('marked');
const grayMatter = require('gray-matter');
const hljs = require('highlightjs');

const articleTags = require('./article_tags.json');

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a href="${href}" target="_blank" rel="noreferrer">${text}</a>`;
};
marked.setOptions({ highlight: function (code, lang) { return hljs.highlightAuto(code, [lang]).value } })

const DIR = {
  ARTICLES: path.join(__dirname, 'articles'),
  FIXED: path.join(__dirname, 'fixed'),
};

function getTagById(id) {
  return articleTags.find(v => v.id === id);
}

function getMarkdownBase(filepath) {
  const grayMatterRes = grayMatter(fs.readFileSync(filepath, 'utf-8'));
  const content = marked.parse(grayMatterRes.content, { renderer: renderer });
  return { content: content, metadata: grayMatterRes.data };
}

function getMarkdown(filepath) {
  const markdown = getMarkdownBase(filepath);
  if (!('title' in markdown.metadata)) {
    throw new Error(`'title' is required: ${filepath}`);
  }
  if (!('description' in markdown.metadata)) {
    throw new Error(`'description' is required: ${filepath}`);
  }
  const tags = [];
  if (!('tags' in markdown.metadata)) {
    throw new Error(`'tags' is required: ${filepath}`);
  }
  if (!Array.isArray(markdown.metadata.tags)) {
    throw new Error(`'tags' must be array: ${filepath}`);
  }
  for (const tagId of markdown.metadata.tags) {
    const tag = getTagById(tagId);
    if (tag === undefined) {
      throw new Error(`${tagId} is not regitered: ${filepath}`);
    }
    tags.push(tag);
  }
  const id = path.basename(filepath, '.md').substr(11)
  return {
    id: id,
    title: markdown.metadata.title,
    description: markdown.metadata.description,
    content: markdown.content,
    tags: tags,
  };
}

function collectArticles() {
  return fs.readdirSync(DIR.ARTICLES)
    .map(v => path.join(DIR.ARTICLES, v))
    .map(v => getMarkdown(v));
}

fs.writeFileSync('content/article.json', JSON.stringify(collectArticles(), null, 2));
