import React from 'react';
import { Container } from 'reactstrap';
import graphql from 'graphql';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/index.scss';

const TemplateWrapper = ({ children, data }) => {
  let user;

  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser();
  }

  return (
    <div className="App">
      <Helmet title={data.site.siteMetadata.title} />
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Link to="/" className="navbar-brand">{data.site.siteMetadata.title}</Link>
          <ul className="nav navbar-nav">

            {user && (
              <li className="nav-item">
                <a href="/admin" className="nav-link">Admin</a>
              </li>
            )}

            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className="pageContent">{children()}</div>
    </div>
  );
};

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
