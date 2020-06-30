import React from 'react';
import {navigate} from 'gatsby';
import { SEO } from 'common/components';

const BlogPage = () => {
    const handleNavigate = () =>{
        navigate('/');
    }
  return (
    <>
      <SEO
        title="Blog"
        keywords={[
          'lemoncode',
          'gatsby',
          'gatsby by sample',
          'frontend',
          'ssr',
        ]}
      />
      <div>This is a blog page</div>
      <button onClick={handleNavigate}>Navigate using button</button>
    </>
  );
};

export default BlogPage;