import React from 'react';

import Link from 'next/link';

import { useCtxLayout } from '../../../../pages/_app';

import { createAModal } from '../../../factories/modals';

import styles from './style.module.scss';

const Nav = () => {
  const { openModal } = useCtxLayout();
  const modal = () => openModal(createAModal({}));
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav__item}>
          <Link href="/posts">
            <a href="/posts" title="Lista" className={styles.nav__item_a}>
              Lista
            </a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/posts/create">
            <a href="/posts/create" title="Crea" className={styles.nav__item_a}>
              Crea
            </a>
          </Link>
        </li>
        <li>
          <button type="button" onClick={modal}>
            modale
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
