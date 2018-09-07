import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'reactstrap';
import Navbar from '../navbar';

// Import Sass entry point. This is handled by Webpack, thanks to the Gatsby
// Sass plugin.
import '../../styles/index.scss';

// Main layout component. All page components should be rendered as children of
// an instance of this.
const Layout = ({ children, data }) => {
  const siteTitle = data.site.config.title;

  return (
    <div className="app">
      <Helmet title={siteTitle} />
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

// Export the component wrapped in a GraphQL query which will fetch the relevant
// data and provide it to the component itself.
export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          ...ConfigSiteTitle
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);
