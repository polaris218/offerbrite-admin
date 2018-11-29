import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdArrowDropDown } from 'react-icons/md';
import styles from './styles.module.scss';

class Dropdown extends Component {
  state = {
    isOpened: false,
  }

  onToggle = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  handleSelect = value => {
    this.onToggle();
    this.props.onSelect(value);
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
          <div className={[
            styles.Dropdown__icon__wrapper,
            isOpened ? styles.Dropdown__icon__wrapper_rotated : null
          ].join(' ')}>
            <MdArrowDropDown className={styles.Dropdown__icon} />
          </div>
        </div>
        <div
          className={[
            styles.Dropdown__list,
            !isOpened ? styles.Dropdown__list_closed : null,
          ].join(' ')}
          style={!isOpened ? { height: 0 } : { height: `${values.length * 48}px` }}
        >
          {
            values.map((value, index) => (
              <div
                key={index}
                onClick={() => this.handleSelect(value)}
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
