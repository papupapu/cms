import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

import Page from '../../components/Layout/Page';
import Post from '../../components/Post';

import HTTPLib from '../../lib/http';

const httpLib = new HTTPLib();

export async function getStaticPaths() {
  const res = await httpLib.getPostsList();
  const paths = res.data.map((post) => ({ params: { id: post._id } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
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

const EditPost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>loading</p>;
  }
  if (!post) {
    return <DefaultErrorPage statusCode="404" />;
  }
  const [state, setState] = useState(post);
  const updateAfterEdit = async () => {
    const newData = await httpLib.getPost(post._id);
    if (newData.success) {
      setState(newData.data);
    }
  };
  return (
    <Page pageType="list">
      <Post post={state} action="edit" afterSubmitFunc={updateAfterEdit} />
    </Page>
  );
};

EditPost.propTypes = propTypes;
EditPost.defaultProps = defaultProps;
export default EditPost;
