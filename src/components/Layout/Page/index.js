import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import dynamic from 'next/dynamic';

import { useCtxLayout } from '../../../../pages/_app';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import styles from './style.module.scss';

const Modal = dynamic(() => import('../../Modal'), {
  loading: () => <p>...</p>,
});

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
  const { modal, modalContent } = useCtxLayout();
  return (
    <>
      {pageType !== 'full' && <Header />}
      <div className={styles.container}>
        <Menu />
        <main className={styles.container__main}>{children}</main>
      </div>
      {pageType !== 'full' && <Footer />}
      {modal && <Modal {...modalContent} />}
    </>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
