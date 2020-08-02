import React from 'react';

import Link from 'next/link';

import { useCtxLayout } from '../../../../pages/_app';

import makeClassName from '../../../lib/utils/makeClassName';

import styles from './style.module.scss';

const Nav = () => {
  const { navVisible } = useCtxLayout();
  const cls = makeClassName([styles.nav, !navVisible && styles['nav-closed']]);
  return (
    <nav className={cls}>
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
      </ul>
    </nav>
  );
};
export default Nav;
