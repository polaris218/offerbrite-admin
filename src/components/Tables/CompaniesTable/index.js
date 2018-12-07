import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Highlighter from 'react-highlight-words';
import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';
import Modal from 'components/UI/Modal';
import Confirmation from 'components/UI/Confirmation';

class Table extends Component {
  state = {
    isDeleteModalVisible: false,
    isEditFormVisible: false,
    businessUserId: null,
  }

  onCloseModal = () => {
    this.setState({
      isDeleteModalVisible: false,
      isEditFormVisible: false,
      businessUserId: null
    });
  }

  // onSetUpdateUser = user => {
  //   this.props.onEdit(user);
  //   this.setState({ isEditFormVisible: true, businessUserId: user.id });
  // }

  onSetDeleteCompany = businessUserId => {
    this.setState({ isDeleteModalVisible: true, businessUserId });
  }

  handleUpdate = () => {
    this.onCloseModal();
    // this.props.updateUser();
  }

  handleDelete = businessUserId => {
    this.props.onDelete(businessUserId);
    this.onCloseModal();
  }

  render() {
    const { data, searchWords, settings } = this.props;
    const {
      isDeleteModalVisible,
      isEditFormVisible,
      businessUserId,
    } = this.state;

    const columns = [
      {
        Header: 'Company id',
        accessor: 'id',
        Cell: props => props.value,
        sortable: false,
      },
      {
        Header: 'Name',
        Cell: props => props.value ?
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          /> :
          props.value,
        accessor: 'brandName',
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: props => props.value ?
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          /> :
          props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Country',
        accessor: 'country',
        Cell: props => props.value ?
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          /> :
          props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Phone',
        accessor: 'mobileNumber',
        Cell: props => props.value ?
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          /> :
          props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Website',
        accessor: 'websiteUrl',
        Cell: props => props.value ?
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          /> :
          props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Cell: props => (
          <DotsMenu
            onEdit={() => alert(`edit id = ${props.value}`)}
            onDelete={() => this.onSetDeleteCompany(props.value)}
            id={props.value}
          />
        ),
        accessor: 'id',
        sortable: false,
        style: { display: 'flex', justifyContent: 'flex-end' },
        headerClassName: 'Table__cell__header',
      },
    ];

    const settingsSelectors = {};
    settings.forEach(setting => {
      settingsSelectors[setting.label] = setting.value;
    });

    const filteredColumns = columns.filter(column => {
      return settingsSelectors[column.Header] || !column.hasOwnProperty('Header');
    });

    return (
      <Fragment>
        <ReactTable
          className="-highlight"
          data={data}
          columns={filteredColumns}
          minRows={data.length}
        />
        <Modal
          isVisible={isDeleteModalVisible}
          onClose={this.onCloseModal}
          header="Delete company"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(businessUserId)}
          />
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.companies,
})

Table.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export const CompaniesTable = connect(mapStateToProps)(Table);
