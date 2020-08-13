import React from 'react';

import Pagination from '../../Atoms/Pagination';

import styles from './style.module.scss';

const Footing = () => (
  <div className={styles.footing}>
    <p className={styles.footing__infos}>Post 1 - n di tot</p>
    <Pagination className={styles.footing__pagination} />
  </div>
);
export default Footing;
