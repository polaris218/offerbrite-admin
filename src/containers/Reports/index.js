import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import { ReportsTable } from 'components/Tables';
import PageTitle from 'components/PageTitle';
import SearchBar from 'components/SearchBar';
import Modal from 'components/UI/Modal';
import InstrumentsPanel from 'components/UI/InstrumentsPanel';
import Dropdown from 'components/UI/Dropdown';
import styles from './styles.module.scss';

class Reports extends Component {
  render() {
    const { reportsList } = this.props;

    return (
      <div className={styles.Reports}>
        <PageTitle title="Reports" />
        <InstrumentsPanel>
          <SearchBar
            onChange={() => { }}
            placeholder="Search (user id, name, email, offer title)"
          />
          <Dropdown
            title="Dropdown"
            values={['asd', 'qwe', 'zxc']}
            onSelect={() => { }}
          />
        </InstrumentsPanel>

        <div className={styles.Reports__table}>
          <ReportsTable data={reportsList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reportsList: state.reports.reportsList,
});

export default connect(mapStateToProps)(Reports);
