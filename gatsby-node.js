const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              contentType
              path
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const template = String(node.frontmatter.contentType);

        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/${template}.js`),
          context: {}, // additional data can be passed via context
        });
      });
    });
};
