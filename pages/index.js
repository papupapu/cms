import React from 'react';

import Page from '../src/components/Layout/Page';

const Home = () => (
  <Page pageType="list">
    <p>todos</p>
    <ul>
      <li>Update list on build</li>
      <li>Add slug to BE Post Model</li>
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
