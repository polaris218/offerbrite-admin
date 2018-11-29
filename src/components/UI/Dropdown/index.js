import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'styles.module.scss';

class Dropdown extends Component {
  state = {
    isOpened: false,
  }

  onToggle = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    const { isOpened } = this.state;
    const { title, values, onSelect } = this.props;

    return (
      <div className={styles.Dropdown}>
        <div
          onClick={this.onToggle}
          className={[
            styles.Dropdown__row_first,
            isOpened ? styles.Dropdown__row_first_opened : styles.Dropdown__row_first_closed,
          ].join(' ')}
        >
          {title}
        </div>
        <div className={styles.Dropdown__list}>
          {
            values.map((value, index) => (
              <div
                key={index}
                onClick={() => onSelect(value)}
                className={styles.Dropdown__list__item}
              >
                {value}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {

};

export default Dropdown;
