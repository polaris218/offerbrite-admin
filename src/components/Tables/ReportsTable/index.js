import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Highlighter from 'react-highlight-words';
import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';
import Modal from 'components/UI/Modal';
import Confirmation from 'components/UI/Confirmation';
import styles from './styles.module.scss';

import { actions as reportsActions } from 'reducers/reports';

class Table extends Component {
  state = {
    isDeleteModalVisible: false,
    isEditFormVisible: false,
    offerId: null,
  }

  onCloseModal = () => {
    this.setState({
      isDeleteModalVisible: false,
      isEditFormVisible: false,
      offerId: null,
    });
  }

  onSetDeleteReport = offerId => {
    console.log(offerId);
    this.setState({ isDeleteModalVisible: true, offerId });
  }

  handleDelete = offerId => {
    this.props.deleteReport(offerId);
    this.onCloseModal();
  }

  render() {
    const { searchWords, data } = this.props;
    const { isDeleteModalVisible, offerId } = this.state;

    const columns = [
      {
        Header: 'Date',
        accessor: 'reports.createdAt',
        Cell: props => new Date(props.value).toDateString(),
      },
      {
        Header: 'User id',
        Cell: props => props.value,
        accessor: 'user.id',
        sortable: false,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'User name',
        accessor: 'user.username',
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
        Header: 'Email',
        accessor: 'user.email',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Reason',
        accessor: 'reports.reason',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Offer title',
        accessor: 'offer.title',
        Cell: props => (
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          />
        ),
        headerClassName: 'Table__cell__header',
      },
      {
        Cell: props => (
          <DotsMenu
            onEdit={() => alert(`edit id = ${props.value}`)}
            onDelete={() => this.onSetDeleteReport(props.original.reports.id)}
          />
        ),
        accessor: 'reports.id',
        sortable: false,
        style: { display: 'flex', justifyContent: 'flex-end' },
        headerClassName: 'Table__cell__header',
      },
    ];

    return (
      <Fragment>
        <ReactTable
          className="-highlight"
          data={data}
          columns={columns}
          minRows={data.length}
        />
        <Modal
          isVisible={isDeleteModalVisible}
          onClose={this.onCloseModal}
          header="Delete report"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(offerId)}
          />
        </Modal>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteReport: reportId => dispatch(reportsActions.deleteReport(reportId)),
});

Table.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export const ReportsTable = connect(null, mapDispatchToProps)(Table);
