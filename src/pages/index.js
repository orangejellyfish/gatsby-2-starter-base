import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hello world!</h1>
    <p>
      Welcome to your new basic Gatsby site, scaffolded by the orangejellyfish
      Gatsby base starter kit.
    </p>
    <p>
      You can follow this link to the <Link to="/about">about page</Link> to see
      the single page app in action.
    </p>
  </Layout>
);

export default IndexPage;
