import path from 'path';
import { GatsbyNode } from 'gatsby';

const queryAllMarkdownRemark = `
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          id
          title
          description
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
        frontmatter: {
          id: string;
          title: string;
          description: string;
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

  pages.data.allMarkdownRemark.edges.map((edge) => {
    createPage({
      path: `/article/${edge.node.frontmatter.id}`,
      component: path.resolve('src/templates/article.template.tsx'),
      context: {
        articleId: edge.node.frontmatter.id,
      },
    });
  });
};
