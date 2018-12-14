import React, { Component } from 'react';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import styles from './styles.module.scss';

class ProgressBar extends Component {
  render() {
    const { label, percent } = this.props;

    return (
      <div className={styles.ProgressBar}>
        <div className={styles.ProgressBar__label}>
          {label}
        </div>
        <div className={styles.ProgressBar__bar}>
          <Progress
            percent={percent}
            status="error"
            theme={{
              error: {
                // symbol: '',
                color: '#fbc630'
              }
            }}
            symbolClassName={styles.ProgressBar__bar__symbol}
          />
        </div>
        <div className={styles.ProgressBar__description}>
          {`${percent.toFixed(1)}%`}
        </div>
      
      </div>
    );
  }
}

export default ProgressBar;
