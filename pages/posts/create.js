import React from 'react';

import Page from '../../src/components/Layout/Page';
import Post from '../../src/components/Post';

const CreatePost = () => {
  return (
    <Page pageType="postForm">
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
