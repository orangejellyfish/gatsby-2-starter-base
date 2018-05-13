import React from 'react';
import Link from 'gatsby-link';
import graphql from 'graphql';
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const IndexPage = ({ data }) => (
  <Container>
    {data.posts.edges.map(({ node: post }) => (
      <Card style={{ marginBottom: 10 }} key={post.id}>
        <CardBody>
          <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
          <CardSubtitle style={{ marginBottom: 10 }}>{post.frontmatter.date}</CardSubtitle>
          <CardText>{post.excerpt}</CardText>
        </CardBody>
      </Card>
  ))}
  </Container>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          contentType: {
            eq: "blog"
          },
          hidden: {
            ne: true
          }
        }
      },
      sort: {
        fields: [frontmatter___date]
        order: DESC,
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`;
