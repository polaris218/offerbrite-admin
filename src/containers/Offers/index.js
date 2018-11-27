import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

class Offers extends Component {
  render() {
    return (
      <div className={styles.Offers}>
        <PageTitle title="Offers" />
      </div>
    );
  }
}

export default Offers;
