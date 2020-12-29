import marked from 'marked';
import grayMatter from 'gray-matter';
import { highlightAuto } from 'highlightjs';

const markedRenderer = new marked.Renderer();
marked.setOptions({
  highlight: (code, lang) => {
    return highlightAuto(code, [lang]).value;
  },
});

export function parseMarkdown(str: string, parseOnlyFrontmatter = false) {
  const { content, data } = grayMatter(str);
  return {
    frontmatters: data,
    content: parseOnlyFrontmatter
      ? content
      : marked(content, { renderer: markedRenderer }),
  };
}
