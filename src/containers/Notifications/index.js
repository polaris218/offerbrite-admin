import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import { NotificationForm } from 'components/Forms';
import styles from './styles.module.scss';

class Notifications extends Component {
  state = {
    isFormVisible: false,
  }

  onToggleForm = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  }

  render() {
    const { isFormVisible } = this.state;

    return (
      <div className={styles.Notifications}>
        <PageTitle title="Notifications" />
        <div className={styles.Notifications__content}>
          <p className={styles.Notifications__description}>
            You can enter your text, set the interval and \ or the action
            at which the notification comes. You can also send individual
            user groups (by type only to companies or only to users in
            England who are interested in this category)
          </p>
          <div className={styles.Notifications__button}>
            <Button onClick={this.onToggleForm}>
              Create
            </Button>
          </div>
          <Modal
            isVisible={isFormVisible}
            onClose={this.onToggleForm}
            header="Create notification"
          >
            <NotificationForm onClose={this.onToggleForm} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Notifications;
