import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

import Page from '../../src/components/Layout/Page';
import Post from '../../src/components/Post';

import Api from '../../src/lib/http/Post';

const api = new Api();

export async function getStaticPaths() {
  const apiResponse = await api.getPostsList();
  const paths = apiResponse.data.map((post) => ({ params: { id: post._id } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const apiResponse = await api.getPost(params.id);
  return {
    props: {
      post: apiResponse ? apiResponse.data : null,
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
    const newData = await api.getPost(post._id);
    if (newData.success) {
      setState(newData.data);
    }
  };
  return (
    <Page pageType="postForm">
      <Post post={state} action="edit" afterSubmitFunc={updateAfterEdit} />
    </Page>
  );
};

EditPost.propTypes = propTypes;
EditPost.defaultProps = defaultProps;
export default EditPost;
