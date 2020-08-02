import React, { useState, useContext } from 'react';
import PropTypes, { oneOfType, instanceOf } from 'prop-types';

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
  const [navVisible, toggleNav] = useState(true);
  const [refreshPostsList, toggleRefreshPostsList] = useState(false);
  const layoutCtx = {
    navVisible,
    toggleNav,
    refreshPostsList,
    toggleRefreshPostsList,
  };
  return (
    <LayoutContext.Provider value={layoutCtx}>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
};
MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
export default MyApp;
