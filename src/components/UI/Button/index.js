import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({ children, onClick }) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
