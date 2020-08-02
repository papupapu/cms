import React from 'react';

import Page from '../components/Layout/Page';

const Home = () => (
  <Page pageType="list">
    <p>
      <a href="/posts">aaa</a>
    </p>
    <ul>
      <li>list items</li>
      <li>edit</li>
      <li>delete</li>
      <li>form</li>
      <li>ContentEditable</li>
    </ul>
  </Page>
);

export default Home;
