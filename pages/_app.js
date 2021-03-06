import React, { useState, useContext } from 'react';
import PropTypes, { oneOfType, instanceOf } from 'prop-types';

import Head from 'next/head';

import LayoutContext from '../src/context/LayoutContext';

import './reset.css';

export const useCtxLayout = () => useContext(LayoutContext);

const propTypes = {
  Component: oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  pageProps: instanceOf(Object),
};

const defaultProps = {
  pageProps: {},
};

const MyApp = ({ Component, pageProps }) => {
  const [navVisible, toggleNav] = useState(false);
  const [modal, toggleModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [refreshPostsList, toggleRefreshPostsList] = useState(false);

  const openModal = (props) => {
    setModalContent(props);
    if (!modal) {
      toggleModal(true);
    }
  };
  const closeModal = () => {
    setModalContent({
      ...modalContent,
      fadeOut: true,
    });
    setTimeout(() => {
      setModalContent({});
      toggleModal(false);
    }, 205);
  };

  const layoutCtx = {
    navVisible,
    toggleNav,
    modal,
    modalContent,
    openModal,
    closeModal,
    refreshPostsList,
    toggleRefreshPostsList,
  };
  return (
    <LayoutContext.Provider value={layoutCtx}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
};
MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
export default MyApp;
