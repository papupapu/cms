import React from 'react';

import Page from '../src/components/Layout/Page';

const Home = () => {
  return (
    <Page pageType="list">
      <p>todos</p>
      <ul>
        <li>Dialog: from modal + modal styles</li>
        <li>Finish header</li>
        <li>Add slug to BE Post Model</li>
        <li>
          code review on:
          <ul>
            <li>. APIs &amp; HTTPLib</li>
            <li>. list items</li>
            <li>. form</li>
          </ul>
        </li>
        <li>ContentEditable</li>
      </ul>
    </Page>
  );
};

export default Home;
