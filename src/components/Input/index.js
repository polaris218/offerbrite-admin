import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { timingSafeEqual } from 'crypto';

class Input extends Component {
  state = {
    isFocused: false,
  };

  onToggleFocus = () => {
    this.setState(prevState => ({ isFocused: !prevState.isFocused }));
  };

  render() {
    const { isFocused } = this.state;

    return (
      <div className={styles.Input}>
        <input
          className={[
            styles.Input__element,
            isFocused ? styles.Input__element_focused : null,
          ].join(' ')}
          onFocus={this.onToggleFocus}
          onBlur={this.onToggleFocus}
          {...this.props}
        />
      </div>
    );
  }
}

Input.propTypes = {};

export default Input;
