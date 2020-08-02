import React from 'react';

import Page from '../../components/Layout/Page';
import Post from '../../components/Post';

const CreatePost = () => {
  return (
    <Page pageType="list">
      <Post
        post={{
          title: '',
          subtitle: '',
          content: '',
        }}
        action="create"
      />
    </Page>
  );
};

export default CreatePost;
