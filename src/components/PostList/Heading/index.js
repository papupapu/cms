import React from 'react';

import Pagination from '../../Atoms/Pagination';

import styles from './style.module.scss';

const Heading = () => (
  <div className={styles.heading}>
    <h1 className={styles.heading__title}>Posts</h1>
    <div className={styles.heading__actions}>
      <div className={styles.heading__actions__btns}>
        <button type="button" className={styles['heading__actions__btns-btn']}>
          Categorie
        </button>
        <button type="button" className={styles['heading__actions__btns-btn']}>
          Ordina
        </button>
        <button type="button" className={styles['heading__actions__btns-btn']}>
          Cerca
        </button>
      </div>
      <Pagination className={styles.heading__actions__pagination} />
    </div>
  </div>
);
export default Heading;
