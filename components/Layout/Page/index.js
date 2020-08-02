import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import styles from './style.module.scss';

const propTypes = {
  pageType: PropTypes.string,
  children: oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};

const defaultProps = {
  pageType: '',
  children: null,
};

const Page = ({ pageType, children }) => {
  return (
    <>
      {pageType !== 'full' && <Header />}
      <main className={styles.main}>{children}</main>
      {pageType !== 'full' && <Footer />}
    </>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
