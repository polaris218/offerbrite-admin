import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReportsTable } from 'components/Tables';
import PageTitle from 'components/PageTitle';
import SearchBar from 'components/SearchBar';
import InstrumentsPanel from 'components/UI/InstrumentsPanel';
import Dropdown from 'components/UI/Dropdown';
import FilterButton from 'components/UI/FilterButton';
import styles from './styles.module.scss';

import { actions as reportsActions } from 'reducers/reports';

class Reports extends Component {
  componentDidMount() {
    this.props.getReports();
  }

  render() {
    const {
      reportsList,
      filteredData,
      selectedReason,
      onFilterByReason,
      onFilterBySearch,
      onFilterTurnOff,
    } = this.props;

    const reasons = reportsList.map(item => item.reports.reason);
    const uniqReasons = [...new Set(reasons)];

    return (
      <div className={styles.Reports}>
        <PageTitle title="Reports" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={onFilterTurnOff}
          />
          <SearchBar
            onChange={onFilterBySearch}
            placeholder="Search by offer title"
          />
          <Dropdown
            title={selectedReason || 'Reason'}
            values={uniqReasons}
            onSelect={onFilterByReason}
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
  filteredData: state.reports.filteredData,
  selectedReason: state.reports.selectedReason,
});

const mapDispatchToProps = dispatch => ({
  getReports: () => dispatch(reportsActions.getReports()),
  onFilterByReason: reason => dispatch(reportsActions.onFilterByReason(reason)),
  onFilterBySearch: event => dispatch(reportsActions.onFilterBySearch(event)),
  onFilterTurnOff: () => dispatch(reportsActions.onFilterTurnOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
