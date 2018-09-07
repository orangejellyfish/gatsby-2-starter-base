import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>About us</h1>
    <p>This is the &quot;about&quot; page. <Link to="/">Back to home</Link>.</p>
  </Layout>
);

export default AboutPage;
