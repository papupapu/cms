import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from '../../src/components/Layout/Page';
import List from '../../src/components/PostList/List';

import { useCtxLayout } from '../_app';

import Api from '../../src/lib/http/Post';

const api = new Api();

export async function getStaticProps() {
  const apiResponse = await api.getPostsList();
  return {
    props: {
      posts: apiResponse.data,
    },
  };
}

const propTypes = {
  posts: PropTypes.instanceOf(Array),
};
const defaultProps = {
  posts: [],
};

const PostList = ({ posts }) => {
  const [list, updateList] = useState(posts);

  const { refreshPostsList, toggleRefreshPostsList } = useCtxLayout();

  useEffect(() => {
    if (refreshPostsList) {
      const refresh = async () => {
        const apiResponse = await api.getPostsList();
        updateList(apiResponse.data);
        toggleRefreshPostsList(false);
      };
      refresh();
    }
  }, []);

  const deletePost = async (id) => {
    const doDelete = await api.deletePost(id);
    if (doDelete.success) {
      const newList = list.filter((post) => post._id !== id);
      updateList(newList);
    } else {
      console.log('ooooops');
    }
  };
  return (
    <Page pageType="postList">
      <p>{`ci sono ${list.length} post`}</p>
      <List posts={list} deleteAction={deletePost} />
    </Page>
  );
};

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;
export default PostList;
