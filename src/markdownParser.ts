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

const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const attrs = tokens[idx].attrs;
  if (attrs !== null && attrs[0][1].startsWith('http')) {
    tokens[idx].attrSet('target', '_blank');
    tokens[idx].attrSet('rel', 'nofollow');
  }
  return defaultRender(tokens, idx, options, env, self);
};

export function parseMarkdown(str: string, parseOnlyFrontmatter = false) {
  const { content, data } = grayMatter(str);
  if (parseOnlyFrontmatter) {
    return { frontmatters: data, content: '' };
  }
  return {
    frontmatters: data,
    content: md.render(content),
  };
}
