import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { MdCreate, MdDelete } from 'react-icons/md';
import styles from './styles.module.scss';

class DotsMenu extends Component {
  state = {
    isMenuVisible: false,
  }

  handleClose = () => {
    this.setState({ isMenuVisible: false });
  }

  handleClick = () => {
    this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
  }

  handleClickEdit = () => {
    this.handleClose();
    this.props.onEdit(this.props.id);
  }

  handleClickDelete = () => {
    this.handleClose();
    this.props.onDelete(this.props.id);
  }

  render() {
    const { isMenuVisible } = this.state;
    const { onEdit, onDelete, id } = this.props;

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
          <div className={styles.DotsMenu__menu} onClick={this.handleClickEdit}>
            <div className={styles.DotsMenu__menu__item}>
              <MdCreate className={styles.DotsMenu__menu__item__icon} />
              Edit
            </div>
            <div className={styles.DotsMenu__menu__item} onClick={this.handleClickDelete}>
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
