import React from 'react';

import Page from '../components/Layout/Page';

const Home = () => (
  <Page pageType="list">
    <p>todos</p>
    <ul>
      <li>Modal / Dialog</li>
      <li>
        code review on:
        <ul>
          <li>APIs &amp; HTTPLib</li>
          <li>list items</li>
          <li>form</li>
        </ul>
      </li>
      <li>ContentEditable</li>
    </ul>
  </Page>
);

export default Home;
