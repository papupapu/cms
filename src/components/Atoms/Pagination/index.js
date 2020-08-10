import React from 'react';

import styles from './style.module.scss';

const Pagination = () => (
  <div className={styles.pagination}>
    <button type="button" className={styles['pagination-skipbtn']}>
      &laquo;
    </button>
    <div className={styles.pagination__pgs}>
      <button type="button" className={styles['pagination__pgs-btn']}>
        -
      </button>
      <button type="button" className={styles['pagination__pgs-btn']}>
        -
      </button>
      <button type="button" className={styles['pagination__pgs-btn']}>
        -
      </button>
    </div>
    <button type="button" className={styles['pagination-skipbtn']}>
      &raquo;
    </button>
  </div>
);
export default Pagination;
