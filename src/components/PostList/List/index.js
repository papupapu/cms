import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from '../Item';

const propTypes = {
  posts: PropTypes.instanceOf(Array),
  deleteAction: PropTypes.func,
};

const defaultProps = {
  posts: [],
  deleteAction: () => {},
};

const List = ({ posts, deleteAction }) => (
  <>
    {posts.map((post) => (
      <PostListItem key={post._id} post={post} deleteAction={deleteAction} />
    ))}
  </>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
