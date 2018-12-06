import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UsersTable } from 'components/Tables';
import PageTitle from 'components/PageTitle';
import SearchBar from 'components/SearchBar';
import InstrumentsPanel from 'components/UI/InstrumentsPanel';
import Dropdown from 'components/UI/Dropdown';
import FilterButton from 'components/UI/FilterButton';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

import { actions as usersActions } from 'reducers/users';

class Users extends Component {
  state = {
    searchWords: '',
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleSearch = e => {
    this.props.filterUsersBySearch(e);
    this.handleOnChangeSearch(e.target.value);
  }

  handleReset = () => {
    this.props.turnOffUsersFilter();
    this.handleOnChangeSearch('')
  }

  handleOnChangeSearch = text => {
    this.setState({ searchWords: text });
  }

  render() {
    const {
      usersList,
      filteredData,
      selectedCategory,
      filterUsersByCategory,
    } = this.props;
    const { searchWords } = this.state;

    const categories = ['1', '2', '3', '4']; // TODO: replace by correct categories

    return (
      <div className={styles.Users}>
        <PageTitle title="Users" />
        <InstrumentsPanel>
          <FilterButton
            active={Boolean(filteredData)}
            onClick={this.handleReset}
          />
          <SearchBar
            onChange={this.handleSearch}
            placeholder="Search by offer title"
            value={searchWords}
          />
          <Dropdown
            title={selectedCategory || 'Country'}
            values={categories}
            onSelect={filterUsersByCategory}
          />
          <Dropdown
            title={selectedCategory || 'Category'}
            values={categories}
            onSelect={filterUsersByCategory}
          />
        </InstrumentsPanel>
        <div className={styles.Users__table}>
          <UsersTable
            data={filteredData ? filteredData : usersList}
            searchWords={[searchWords]}
          />
        </div>
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
