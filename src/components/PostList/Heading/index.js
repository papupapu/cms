import React from 'react';

import styles from './style.module.scss';

const Heading = () => (
  <div className={styles.heading}>
    <h1 className={styles.heading__title}>Posts</h1>
    <div className={styles.heading__btns}>
      <button type="button" className={styles['heading__btns-btn']}>
        Categorie
      </button>
      <button type="button" className={styles['heading__btns-btn']}>
        Ordina
      </button>
      <button type="button" className={styles['heading__btns-btn']}>
        Cerca
      </button>
    </div>
  </div>
);
export default Heading;
