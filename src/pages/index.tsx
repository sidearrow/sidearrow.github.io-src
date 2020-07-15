import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { ContentCard } from '../components/ContentCard';
import { Head } from '../components/Head';

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "ARTICLE" } } }) {
      edges {
        node {
          frontmatter {
            id
            title
            description
            createdAt(formatString: "YYYY/MM/DD")
            updatedAt(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`;

type PageQueryResponse = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          id: string;
          title: string;
          description: string;
          createdAt: string;
          updatedAt: string;
        };
      };
    }[];
  };
};

const IndexPage: React.FC<{ data: PageQueryResponse }> = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Head description="sidearrow's memo の TOP ページです。" />
      <section>
        {articles.map((article, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <ContentCard
              id={article.node.frontmatter.id}
              title={article.node.frontmatter.title}
              createdAt={article.node.frontmatter.createdAt}
              updatedAt={article.node.frontmatter.updatedAt}
            />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
