import React from 'react';
import PropTypes from 'prop-types';

import makeClassName from '../../../lib/utils/makeClassName';

import styles from './style.module.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  label: PropTypes.string,
  onBlurFunc: PropTypes.func,
  cssClass: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  label: '',
  onBlurFunc: () => {},
  cssClass: '',
  error: '',
};

const Input = ({
  name,
  type,
  value,
  label,
  onChangeFunc,
  onBlurFunc,
  cssClass,
  error,
}) => {
  return (
    <div
      className={makeClassName([
        styles.input,
        cssClass,
        !!error && styles.input_err,
      ])}
    >
      <input
        className={makeClassName([
          styles.input__field,
          !!error && styles.input__field_err,
        ])}
        name={name}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChangeFunc}
        onBlur={onBlurFunc}
      />
      {error && <p className={styles.input__errmsg}>{error}</p>}
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;
