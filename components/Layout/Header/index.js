import React from 'react';

import styles from './style.module.scss';

const Header = () => (
  <header className={styles.header}>
    <a href="/posts" title="Lista">
      Lista
    </a>
    -
    <a href="/posts/create" title="Crea">
      Crea
    </a>
  </header>
);
export default Header;
