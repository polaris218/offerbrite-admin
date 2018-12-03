import React from 'react';
import PropTypes from 'prop-types';

import { MdFilterList } from 'react-icons/md';
import styles from './styles.module.scss';

const FilterButton = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={[
      styles.Button,
      active ? styles.Button_active : null,
    ].join(' ')}
  >
    <MdFilterList className={[
      styles.Button__icon,
      active ? styles.Button__icon_active : null,
    ].join(' ')} />
  </button>
);

FilterButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default FilterButton;
