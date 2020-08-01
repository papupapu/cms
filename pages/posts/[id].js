import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

import HTTPLib from '../../lib/http';

export async function getStaticPaths() {
  const httpLib = new HTTPLib();
  const res = await httpLib.getPostsList();
  const paths = res.data.map((post) => ({ params: { id: post._id } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const httpLib = new HTTPLib();
  const res = await httpLib.getPost(params.id);
  return {
    props: {
      post: res ? res.data : null,
    },
  };
}

const propTypes = {
  post: PropTypes.instanceOf(Object),
};
const defaultProps = {
  post: null,
};

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>loading</p>;
  }
  if (!post) {
    return <DefaultErrorPage statusCode="404" />;
  }
  return <p>{`sono il post: ${post.title}`}</p>;
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;
