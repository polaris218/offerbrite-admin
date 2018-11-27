import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdCreate, MdDelete } from 'react-icons/md';
import styles from './styles.module.scss';

class DotsMenu extends Component {
  state = {
    isMenuVisible: false,
  }

  handleClick = () => {
    this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
  }

  render() {
    const { isMenuVisible } = this.state;
    const { onEdit, onDelete } = this.props;

    const dotStyles = [
      styles.DotsMenu__dots__dot,
      isMenuVisible ? styles.DotsMenu__dots__dot_active : styles.DotsMenu__dots__dot_inactive,
    ].join(' ');

    return (
      <div className={styles.DotsMenu}>
        <div className={styles.DotsMenu__dots} onClick={this.handleClick}>
          <div className={dotStyles} />
          <div className={dotStyles} />
          <div className={dotStyles} />
        </div>
        {
          isMenuVisible &&
          <div className={styles.DotsMenu__menu} onClick={onEdit}>
            <div className={styles.DotsMenu__menu__item}>
              <MdCreate className={styles.DotsMenu__menu__item__icon} />
              Edit
            </div>
            <div className={styles.DotsMenu__menu__item} onClick={onDelete}>
              <MdDelete className={styles.DotsMenu__menu__item__icon} />
              Delete
            </div>
          </div>
        }
      </div>
    );
  }
}

export default DotsMenu;
