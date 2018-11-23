import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import arrowDownIcon from 'assets/icons/arrow-down.svg';

class Header extends Component {
  state = {
    isDropDownVisible: false,
  };

  handleDropDownToggle = () => {
    this.setState(prevState => ({
      isDropDownVisible: !prevState.isDropDownVisible,
    }));
  };

  render() {
    const { adminUser } = this.props;

    return (
      <div className={styles.Header}>
        <div className={styles.Header__dropdown}>
          <div
            className={styles.Header__dropdown__row}
            onClick={this.handleDropDownToggle}
          >
            {adminUser.name}
            <div className={styles.Header__dropdown__arrow}>
              <img src={arrowDownIcon} alt="Arrow icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  adminUser: PropTypes.object,
};

const mapStateToProps = state => ({
  adminUser: state.session.adminUser,
});

export default connect(mapStateToProps)(Header);
