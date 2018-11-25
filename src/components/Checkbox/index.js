import React from 'react';

import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';
import styles from './styles.module.scss';

const Checkbox = ({ onClick, checked, label, id }) => (
  <div className={styles.Checkbox}>
    <div onClick={onClick}>
      {
        checked
          ? <FaCheckSquare className={styles.Checkbox__box} />
          : <FaRegSquare className={styles.Checkbox__box} />
      }
    </div>
    <div
      className={styles.Checkbox__label}
      onClick={onClick}
    >
      {label}
    </div>
  </div>
)

export default Checkbox;