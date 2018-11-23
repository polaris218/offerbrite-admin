import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const NavItem = ({ to, title, icon, hidden }) => (
  <li className={styles.NavItem}>
    <NavLink
      className={styles.NavItem__button}
      style={
        !hidden
          ? { padding: '20px 3rem 20px 3rem' }
          : { padding: '20px 0px 20px 0px', justifyContent: 'center' }
      }
      activeClassName={styles.active}
      to={to}
    >
      <img src={icon} className={styles.NavItem__icon} alt={`${title} icon`} />
      {title && <div className={styles.NavItem__title}>{title}</div>}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
