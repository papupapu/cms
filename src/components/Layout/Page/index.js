import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import dynamic from 'next/dynamic';

import { useCtxLayout } from '../../../../pages/_app';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import makeClassName from '../../../lib/utils/makeClassName';

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
  const { navVisible, modal, modalContent } = useCtxLayout();
  const ctnCls = makeClassName([
    styles.container,
    navVisible && styles['container--open'],
  ]);
  return (
    <>
      {pageType !== 'full' && <Header />}
      <div className={ctnCls}>
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
