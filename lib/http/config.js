export default {
  host: {
    local: 'http://localhost:5000',
    prod: 'http://localhost:5000',
  },
  endpoints: {
    postsList: {
      url: '/api/posts',
      keepAlive: true,
    },
    getPost: {
      url: '/api/post',
      keepAlive: true,
    },
    createPost: {
      url: '/api/post',
    },
    editPost: {
      url: '/api/post',
    },
    deletePost: {
      url: '/api/post',
    },
  },
};
