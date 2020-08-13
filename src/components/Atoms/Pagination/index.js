import React from 'react';
import PropTypes from 'prop-types';

import makeClassName from '../../../lib/utils/makeClassName';

import styles from './style.module.scss';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: '',
};

const Pagination = ({ className }) => (
  <div className={makeClassName([styles.pagination, className])}>
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

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
