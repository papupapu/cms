import React from 'react';
import PropTypes, { oneOfType, instanceOf } from 'prop-types';

import './reset.css';

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

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
export default MyApp;
