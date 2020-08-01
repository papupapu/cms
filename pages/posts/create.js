import React from 'react';

import HTTPLib from '../../lib/http';

const Post = () => {
  const httpLib = new HTTPLib();
  const createPost = async () => {
    const create = await httpLib.post('/api/post', {
      title: 'titolo prova',
      subtitle: 'sottotitolo prova',
      content: 'contenuto prova',
    });
    console.log(create);
  };
  return (
    <p>
      io creo un post
      <button type="button" onClick={createPost}>
        così
      </button>
    </p>
  );
};

export default Post;
