import React from 'react';
import {Link} from "gatsby";
import { css } from 'emotion';
import { SEO } from 'common/components';

const root = css`
  background-color: tomato;
  color: white;
  font-size: 4rem;
  font-family: 'Open Sans';
  padding: 2rem;
`;

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          'lemoncode',
          'gatsby',
          'gatsby by sample',
          'frontend',
          'ssr',
        ]}
      />
      <div className={root}>Hello from Gatsby</div>
      <Link to="/blog">Navigate to blog</Link>
    </>
  );
};

export default IndexPage;

