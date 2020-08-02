import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HTTPLib from '../../lib/http';

import Page from '../../components/Layout/Page';
import List from '../../components/PostList/List';

const httpLib = new HTTPLib();

export async function getStaticProps() {
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

const PostList = ({ posts }) => {
  const [list, updateList] = useState(posts);

  const deletePost = async (id) => {
    const doDelete = await httpLib.deletePost(id);
    if (doDelete.success) {
      const newList = list.filter((post) => post._id !== id);
      updateList(newList);
    } else {
      console.log('ooooops');
    }
  };
  return (
    <Page pageType="list">
      <p>{`ci sono ${list.length} post`}</p>
      <List posts={list} deleteAction={deletePost} />
    </Page>
  );
};

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;
export default PostList;
