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
    userId: null,
  }

  onCloseModal = () => {
    this.setState({ isDeleteModalVisible: false, userId: null });
  }

  onSetDeleteUser = userId => {
    this.setState({ isDeleteModalVisible: true, userId });
  }

  handleDelete = userId => {
    this.props.onDelete(userId);
    this.onCloseModal();
  }

  render() {
    const { data, searchWords, settings } = this.props;
    const { isDeleteModalVisible, userId } = this.state;

    const columns = [
      {
        Header: 'User id',
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
        accessor: 'username',
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
        Cell: props => (
          <DotsMenu
            onEdit={() => alert(`edit id = ${props.value}`)}
            onDelete={() => this.onSetDeleteUser(props.value)}
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
          header="Delete admin"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(userId)}
          />
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.users,
})

Table.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export const UsersTable = connect(mapStateToProps)(Table);
