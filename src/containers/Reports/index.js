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
    const searchTarget = e.target.value.toLowerCase();
    const filteredData = this.props.reportsList.filter(item => {
      const lowerTitle = item.offer.title.toLowerCase();
      if (this.state.selectedReason) {
        return lowerTitle.includes(searchTarget) && item.reports.reason === this.state.selectedReason;
      }
      return lowerTitle.includes(searchTarget);
    });
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
