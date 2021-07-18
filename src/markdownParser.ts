import MarkdownIt from 'markdown-it';
import grayMatter from 'gray-matter';
import { highlight } from 'highlightjs';

const mdkt = require('@neilsustc/markdown-it-katex');

const md = new MarkdownIt({
  highlight: (str, lang) => {
    return (
      `<pre class="hljs lang-${lang}">` + highlight(lang, str).value + '</pre>'
    );
  },
});
md.use(mdkt);

export function parseMarkdown(str: string, parseOnlyFrontmatter = false) {
  const { content, data } = grayMatter(str);
  return {
    frontmatters: data,
    content: parseOnlyFrontmatter ? content : md.render(content),
  };
}
