import React from 'react';

import { useRouter } from 'next/router';

import Page from '../../src/components/Layout/Page';
import Post from '../../src/components/Post';

const CreatePost = () => {
  const router = useRouter();
  const afterCreate = (id) => router.push('/posts/[id]', `/posts/${id}`);
  return (
    <Page pageType="postForm">
      <Post
        post={{
          title: '',
          subtitle: '',
          content: '',
        }}
        action="create"
        afterSubmitFunc={afterCreate}
      />
    </Page>
  );
};

export default CreatePost;
