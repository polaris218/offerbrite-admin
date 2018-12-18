import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';
import Modal from 'components/UI/Modal';
import Confirmation from 'components/UI/Confirmation';

export class NotificationsTable extends Component {
  state = {
    isDeleteModalVisible: false,
    notificationId: null,
  }

  onCloseModal = () => {
    this.setState({
      isDeleteModalVisible: false,
      notificationId: null
    });
  }

  onSetDeleteNotification = notificationId => {
    this.setState({ isDeleteModalVisible: true, notificationId });
  }

  handleDelete = notificationId => {
    this.props.onDelete(notificationId);
    this.onCloseModal();
  }

  render() {
    const { data } = this.props;
    const { isDeleteModalVisible, notificationId } = this.state;

    const columns = [
      {
        Header: 'Text',
        accessor: 'text',
        Cell: ({ value }) => value,
        sortable: false,
      },
      {
        Header: 'Title',
        Cell: props => props.value,
        accessor: 'title',
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Country',
        accessor: 'country',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Cell: props => (
          <DotsMenu
            withoutEdit
            onDelete={() => this.onSetDeleteNotification(props.value)}
            id={props.value}
          />
        ),
        accessor: 'id',
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
          header="Delete notification"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(notificationId)}
          />
        </Modal>
      </Fragment>
    );
  }
}

NotificationsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
