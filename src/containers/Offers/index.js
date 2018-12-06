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

import { actions as offersActions } from 'reducers/offers';

class Offers extends Component {
  state = {
    searchWords: '',
  }

  componentDidMount() {
    this.props.getOffers();
  }

  handleSearch = e => {
    this.props.filterOffersBySearch(e);
    this.setState({ searchWords: e.target.value });
  }

  render() {
    const {
      offersList,
      filteredData,
      selectedCategory,
      selectedPrice,
      filterCompaniesByCategory,
      filterOffersByPrice,
      turnOffOffersFilter,
    } = this.props;

    const { searchWords } = this.state;

    const categories = ['1', '2', '3', '4']; // TODO: replace by correct categories
    const prices = ['10-20', '20-50'];
    return (
      <div className={styles.Companies}>
        <PageTitle title="Offers" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={turnOffOffersFilter}
          />
          <SearchBar
            onChange={this.handleSearch}
            placeholder="Search (brand name, offer title)"
          />
          <Dropdown
            title={selectedCategory || 'Country'}
            values={categories}
            onSelect={filterCompaniesByCategory}
          />
          <Dropdown
            title={selectedPrice || 'Price'}
            values={prices}
            onSelect={filterOffersByPrice}
          />
        </InstrumentsPanel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offersList: state.offers.offersList,
  filteredData: state.offers.filteredData,
  selectedCategory: state.offers.selectedCategory,
  selectedPrice: state.offers.selectedPrice,
});

const mapDispatchToProps = dispatch => ({
  getOffers: () => dispatch(offersActions.getOffers()),
  filterOffersByCategory: category => dispatch(offersActions.filterOffersByCategory(category)),
  filterOffersByPrice: price => dispatch(offersActions.filterOffersByPrice(price)),
  filterOffersBySearch: event => dispatch(offersActions.filterOffersBySearch(event)),
  turnOffOffersFilter: () => dispatch(offersActions.turnOffOffersFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
