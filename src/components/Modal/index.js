import React, { useState, useEffect, useContext } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import LayoutContext from '../../context/LayoutContext';

import makeClassName from '../../lib/utils/makeClassName';

import styles from './style.module.scss';

const propTypes = {
  title: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  children: oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
  fadeOut: PropTypes.bool,
};

const defaultProps = {
  title: '',
  maxWidth: 0,
  maxHeight: 0,
  children: null,
  fadeOut: PropTypes.false,
};

const Modal = ({ title, maxWidth, maxHeight, children, fadeOut }) => {
  const { closeModal } = useContext(LayoutContext);

  const [isUp, setIsUp] = useState(false);

  const cls = makeClassName([styles.modal]);
  const containerCls = makeClassName([
    styles.modal__container,
    isUp && !fadeOut && styles.up,
  ]);
  const style = {};
  if (maxWidth) {
    style.maxWidth = `${maxWidth}px`;
  }
  if (maxHeight) {
    style.maxHeight = `${maxHeight}px`;
  }

  useEffect(() => {
    setTimeout(() => setIsUp(true), 55);
  }, []);

  return (
    <div className={cls}>
      <div className={containerCls} style={style}>
        <p>{title}</p>
        <button type="button" onClick={closeModal}>
          chiudi
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
