import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import Modal from 'components/UI/Modal';
import Confirmation from 'components/UI/Confirmation';
import DotsMenu from 'components/DotsMenu';

export class AdminsTable extends Component {
  state = {
    isDeleteModalVisible: false,
    adminId: null,
  }

  onCloseModal = () => {
    this.setState({ isDeleteModalVisible: false, adminId: null });
  }

  onSetDeleteAdmin = adminId => {
    this.setState({ isDeleteModalVisible: true, adminId });
  }

  handleDelete = adminId => {
    this.props.onDelete(adminId);
    this.onCloseModal();
  }

  render() {
    const { data } = this.props;
    const { isDeleteModalVisible, adminId } = this.state;

    const adminsTableColumns = [
      {
        Header: 'Name',
        Cell: props => props.value,
        accessor: 'username',
        headerClassName: 'withBorderRight',
      },
      {
        Header: 'Email',
        Cell: props => props.value,
        accessor: 'email',
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Role',
        Cell: props => props.value,
        accessor: 'role',
        headerClassName: 'Table__cell__header',
      },
      {
        Cell: props => (
          <DotsMenu
            onEdit={() => alert(`edit id = ${props.value}`)}
            onDelete={() => this.onSetDeleteAdmin(props.value)}
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
          columns={adminsTableColumns}
          minRows={5}
          showPaginationBottom={false}
        />
        <Modal
          isVisible={isDeleteModalVisible}
          onClose={this.onCloseModal}
          header="Delete admin"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(adminId)}
          />
        </Modal>
      </Fragment>
    );
  }
}

AdminsTable.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};
