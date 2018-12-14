import React from 'react';

import styles from './styles.module.scss';

const StatBox = ({ label, value, icon, additionalValue }) => (
  <div className={styles.StatBox}>
    {
      icon &&
      <div className={styles.StatBox__icon}>
        {icon}
      </div>
    }
    <div className={styles.StatBox__data}>
      <div className={styles.StatBox__data__label}>
        {label}
      </div>
      <div className={styles.StatBox__data__value}>
        {value}
      </div>
      {
        additionalValue &&
        <div className={styles.StatBox__data__additionalValue}>
          {additionalValue}
        </div>
      }
    </div>
  </div>
);

export default StatBox;
