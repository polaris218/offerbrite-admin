import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';
import logo from 'assets/images/logo-blue.svg';

import { actions as sessionActions } from 'reducers/session';

class Login extends Component {
  render() {
    const { login, password, onChangeText, rememberSession, onToggleRememberSession } = this.props;
    return (
      <div className={styles.Login}>
        <div className={styles.Login__logo}>
          <img src={logo} alt="Logo" />
          <h2 className={styles.Login__header}>Admin panel</h2>
        </div>
        <form className={styles.Login__form}>
          <div className={styles.Login__form__container}>
            <Input
              onChange={e => onChangeText(e, 'login')}
              value={login}
              type="text"
              placeholder="Login"
            />
            <Input
              onChange={e => onChangeText(e, 'password')}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.Login__form__checkbox}>
            <Checkbox
              checked={rememberSession}
              onClick={onToggleRememberSession}
              label="Remember me"
            />
          </div>
          <div className={styles.Login__form__button}>
            <Button
              orange
              block
              disabled={login.length === 0 || password.length === 0}
              onClick={() => { }}
            >
              Enter
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.session.login,
  password: state.session.password,
  rememberSession: state.session.rememberSession,
});

const mapDispatchToProps = dispatch => ({
  onChangeText: (text, inputName) => dispatch(sessionActions.onChangeText(text, inputName)),
  onToggleRememberSession: () => dispatch(sessionActions.onToggleRememberSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
