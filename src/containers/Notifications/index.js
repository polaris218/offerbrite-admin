import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

class Notifications extends Component {
  render() {
    return (
      <div className={styles.Notifications}>
        <PageTitle title="Notifications" />
      </div>
    );
  }
}

export default Notifications;
