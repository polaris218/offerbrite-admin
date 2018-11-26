import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Backdrop = ({ isVisible }) => isVisible ?
  <div className={styles.Backdrop} /> : null;

Backdrop.propTypes = {
  isVisible: PropTypes.bool,
};

export default Backdrop;
