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
    post: {
      url: '/api/post',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
      },
    },
  },
};
