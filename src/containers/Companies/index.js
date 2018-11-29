import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import SearchBar from 'components/SearchBar';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

class Companies extends Component {
  render() {
    return (
      <div className={styles.Companies}>
        <PageTitle title="Companies" />
        <SearchBar
          onChange={() => { }}
          placeholder="Search (business id, brand name, country)"
        />
      </div>
    );
  }
}

export default Companies;
