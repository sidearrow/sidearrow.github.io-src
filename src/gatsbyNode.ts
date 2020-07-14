import path from 'path';
import { GatsbyNode } from 'gatsby';
import { ArticleTag, Article } from './article';
import { ArticlePageContext, ArticleTagPageContext } from './pageContext';

const queryAllMarkdownRemark = `
{
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          type
          id
          title
          description
          tags {
            id
            name
          }
          createdAt(formatString: "YYYY/MM/DD")
          updatedAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
}
`;

type queryAllMarkdownRemarkResponse = {
  allMarkdownRemark: {
    edges: {
      node: {
        html: string;
        frontmatter: {
          type: string;
          id: string;
          title: string;
          description: string;
          tags: {
            id: string;
            name: string;
          }[];
          createdAt: string;
          updatedAt: string;
        };
      };
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}) => {
  const pages: { data?: queryAllMarkdownRemarkResponse } = await graphql(
    queryAllMarkdownRemark
  );

  if (pages.data === undefined) {
    throw new Error();
  }

  const allPages: Article[] = [];
  const tags: { [key: string]: { tag: ArticleTag; articles: Article[] } } = {};
  for (const v of pages.data.allMarkdownRemark.edges) {
    if (
      v.node.frontmatter.type !== 'FIXED' &&
      v.node.frontmatter.type !== 'ARTICLE'
    ) {
      continue;
    }

    const article: Article = {
      type: v.node.frontmatter.type,
      id: v.node.frontmatter.id,
      title: v.node.frontmatter.title,
      description: v.node.frontmatter.description,
      tags: v.node.frontmatter.tags,
      createdAt: v.node.frontmatter.createdAt,
      updatedAt: v.node.frontmatter.updatedAt,
      html: v.node.html,
    };

    allPages.push(article);

    v.node.frontmatter.tags.forEach((tag) => {
      if (Object.keys(tags).indexOf(tag.id) === -1) {
        tags[tag.id] = { tag: tag, articles: [] };
      }
      tags[tag.id].articles.push(article);
    });
  }
  console.log(allPages);

  allPages.forEach((article) => {
    if (article.type === 'ARTICLE') {
      createPage<ArticlePageContext>({
        path: `/article/${article.id}`,
        component: path.resolve('src/templates/MarkdownTemplate.tsx'),
        context: {
          article: article,
        },
      });
      return;
    }

    createPage<ArticlePageContext>({
      path: `/${article.id}`,
      component: path.resolve('src/templates/MarkdownTemplate.tsx'),
      context: {
        article: article,
      },
    });
  });

  Object.keys(tags).map((tagId) => {
    createPage<ArticleTagPageContext>({
      path: `/article/tag/${tagId}`,
      component: path.resolve('src/templates/ArticleTagTemplate.tsx'),
      context: {
        ...tags[tagId],
      },
    });
  });
};
