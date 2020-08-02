import React from 'react';

import { useCtxLayout } from '../../../pages/_app';

import styles from './style.module.scss';

const Header = () => {
  const { navVisible, toggleNav } = useCtxLayout();
  const navToggle = () => toggleNav(!navVisible);
  return (
    <header className={styles.header}>
      <button type="button" onClick={navToggle}>
        menu
      </button>
      header
    </header>
  );
};
export default Header;
