import React from 'react';
import PropTypes from 'prop-types';

import HTTPLib from '../../lib/http';

export async function getStaticProps() {
  const httpLib = new HTTPLib();
  const res = await httpLib.getPostsList();
  return {
    props: {
      posts: res.data,
    },
  };
}

const propTypes = {
  posts: PropTypes.instanceOf(Array),
};
const defaultProps = {
  posts: [],
};

const PostList = ({ posts }) => (
  <>
    <h1>{`ci sono ${posts.length} post`}</h1>
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={`/posts/${post._id}`} title={post.title}>
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  </>
);

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;
export default PostList;
