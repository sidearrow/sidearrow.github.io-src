import React from 'react';
import { graphql } from 'gatsby';
import CmpLayout from '../components/layout.cmp';

export const pageQuery = graphql`
  query($articleId: String!) {
    markdownRemark(frontmatter: { id: { eq: $articleId } }) {
      html
      frontmatter {
        id
        title
        description
      }
    }
  }
`;

type PageQueryResponse = {
  markdownRemark: {
    html: string;
    frontmatter: {
      id: string;
      title: string;
      description: string;
    };
  };
};

const TemplateComponent: React.FC<{ data: PageQueryResponse }> = ({ data }) => {
  return (
    <CmpLayout>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </CmpLayout>
  );
};

export default TemplateComponent;
