import React, { Component } from 'react';

import NavItem from 'components/NavItem';
import styles from './styles.module.scss';
import logo from 'assets/images/logo.svg';
import menuButtonIcon from 'assets/icons/menu-button.svg';
import navigation from './navigation';

class SideBar extends Component {
  state = {
    isSideBarHidden: window.innerWidth < 1560,
  };

  componentDidMount() {
    window.addEventListener('resize', e => {
      console.log(e.target.innerWidth);
      if (e.target.innerWidth < 1560) {
        this.hideSideBar();
      }
    });
  }

  hideSideBar = () => {
    this.setState({ isSideBarHidden: true });
  };

  handleMenuButtonClick = () => {
    this.setState(prevState => ({
      isSideBarHidden: !prevState.isSideBarHidden,
    }));
  };

  render() {
    const { isSideBarHidden } = this.state;
    console.log(isSideBarHidden);

    const navItems = isSideBarHidden
      ? navigation.map(item => ({ to: item.to, icon: item.icon }))
      : navigation;

    return (
      <aside
        className={[
          styles.SideBar,
          isSideBarHidden ? styles.hidden : styles.visible,
        ].join(' ')}
      >
        <div className={styles.SideBar__header}>
          {!isSideBarHidden && (
            <div className={styles.SideBar__header__logo}>
              <img src={logo} alt="Logo" />
              <h4 className={styles.SideBar__header__title}>Admin panel</h4>
            </div>
          )}
          <div
            className={styles.SideBar__header__menuButton}
            onClick={this.handleMenuButtonClick}
          >
            <img src={menuButtonIcon} alt="Menu icon" />
          </div>
        </div>
        <nav className={styles.SideBar__navigation}>
          <ul style={{ listStyle: 'none' }}>
            {navItems.map(item => (
              <NavItem hidden={isSideBarHidden} {...item} />
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideBar;
