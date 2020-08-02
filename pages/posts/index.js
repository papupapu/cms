import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Api from '../../lib/http/Post';

import Page from '../../components/Layout/Page';
import List from '../../components/PostList/List';

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
