import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import SearchBar from 'components/SearchBar';
import InstrumentsPanel from 'components/UI/InstrumentsPanel';
import Dropdown from 'components/UI/Dropdown';
import FilterButton from 'components/UI/FilterButton';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

import { actions as companiesActions } from 'reducers/companies';

class Companies extends Component {
  state = {
    searchWords: '',
  }

  componentDidMount() {
    this.props.getCompanies();
  }

  handleSearch = e => {
    this.props.filterCompaniesBySearch(e);
    this.setState({ searchWords: e.target.value });
  }

  render() {
    const {
      companiesList,
      filteredData,
      selectedCountry,
      filterCompaniesByCountry,
      turnOffCompaniesFilter,
    } = this.props;

    const { searchWords } = this.state;

    const countries = ['1', '2', '3', '4']; // TODO: replace by correct categories

    return (
      <div className={styles.Companies}>
        <PageTitle title="Companies" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={turnOffCompaniesFilter}
          />
          <SearchBar
            onChange={this.handleSearch}
            placeholder="Search (brand name, website, email)"
          />
          <Dropdown
            title={selectedCountry || 'Country'}
            values={countries}
            onSelect={filterCompaniesByCountry}
          />
        </InstrumentsPanel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companiesList: state.companies.companiesList,
  filteredData: state.companies.filteredData,
  selectedCountry: state.companies.selectedCountry,
});

const mapDispatchToProps = dispatch => ({
  getCompanies: () => dispatch(companiesActions.getCompanies()),
  filterCompaniesByCountry: country => dispatch(companiesActions.filterCompaniesByCountry(country)),
  filterCompaniesBySearch: event => dispatch(companiesActions.filterCompaniesBySearch(event)),
  turnOffCompaniesFilter: () => dispatch(companiesActions.turnOffCompaniesFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
