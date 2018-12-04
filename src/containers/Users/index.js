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

import { actions as usersActions } from 'reducers/users';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {
      usersList,
      filteredData,
      selectedCategory,
      filterUsersByCategory,
      filterUsersBySearch,
      turnOffUsersFilter,
    } = this.props;

    const categories = ['1', '2', '3', '4']; // TODO: replace by correct categories

    return (
      <div className={styles.Users}>
        <PageTitle title="Users" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={turnOffUsersFilter}
          />
          <SearchBar
            onChange={filterUsersBySearch}
            placeholder="Search by offer title"
          />
          <Dropdown
            title={selectedCategory || 'Reason'}
            values={categories}
            onSelect={filterUsersByCategory}
          />
        </InstrumentsPanel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.users.usersList,
  filteredData: state.users.filteredData,
  selectedCategory: state.users.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(usersActions.getUsers()),
  filterUsersByCategory: category => dispatch(usersActions.filterUsersByCategory(category)),
  filterUsersBySearch: event => dispatch(usersActions.filterUsersBySearch(event)),
  turnOffUsersFilter: () => dispatch(usersActions.turnOffUsersFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
