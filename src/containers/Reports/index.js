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
import FilterButton from 'components/UI/FilterButton';
import styles from './styles.module.scss';

import { actions as reportsActions } from 'reducers/reports';
import Settings from 'containers/Settings';

class Reports extends Component {
  state = {
    filteredData: null,
    selectedReason: '',
  }

  componentDidMount() {
    this.props.getReports();
  }

  handleFilterByReason = reason => {
    const filteredData = this.props.reportsList.filter(item => item.reports.reason === reason);
    this.setState({ filteredData, selectedReason: reason });
  }

  handleSearch = e => {
    const filteredData = this.props.reportsList.filter(item => item.offer.title.includes(e.target.value));
    this.setState({ filteredData });
  }

  handleOffFilter = () => {
    this.setState({ filteredData: null, selectedReason: '' });
  }

  render() {
    const { filteredData, selectedReason } = this.state;
    const { reportsList } = this.props;
    const reasons = reportsList.map(item => item.reports.reason);
    const uniqReasons = [...new Set(reasons)];

    return (
      <div className={styles.Reports}>
        <PageTitle title="Reports" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={this.handleOffFilter}
          />
          <SearchBar
            onChange={e => this.handleSearch(e)}
            placeholder="Search by offer title"
          />
          <Dropdown
            title={selectedReason || 'Reason'}
            values={uniqReasons}
            onSelect={this.handleFilterByReason}
          />
        </InstrumentsPanel>

        <div className={styles.Reports__table}>
          <ReportsTable data={filteredData ? filteredData : reportsList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reportsList: state.reports.reportsList,
});

const mapDispatchToProps = dispatch => ({
  getReports: () => dispatch(reportsActions.getReports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
