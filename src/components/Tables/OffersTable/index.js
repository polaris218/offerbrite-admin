import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Highlighter from 'react-highlight-words';
import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';
import Modal from 'components/UI/Modal';
import Confirmation from 'components/UI/Confirmation';
import { UserForm } from 'components/Forms';
import defaultImage from 'assets/images/question-mark.png';

import { actions as offersActions } from 'reducers/offers';
import { convertLocation } from 'services/helpers';

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
      offerId: null
    });
  }

  // onSetUpdateUser = user => {
  //   this.props.onEdit(user);
  //   this.setState({ isEditFormVisible: true, offerId: user.id });
  // }

  onSetDeleteOffer = offerId => {
    this.setState({ isDeleteModalVisible: true, offerId });
  }

  // handleUpdate = () => {
  //   this.onCloseModal();
  //   this.props.updateUser();
  // }

  handleDelete = offerId => {
    this.props.deleteOffer(offerId);
    this.onCloseModal();
  }

  render() {
    const { data, searchWords, settings, onChangeUserFormField, userToUpdate } = this.props;
    const { isDeleteModalVisible, isEditFormVisible, offerId } = this.state;

    const columns = [
      {
        Header: 'Offer id',
        accessor: 'id',
        width: 150,
        Cell: props => (
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          />
        ),
        sortable: false,
      },
      {
        Header: 'Title',
        Cell: props => (
          <Highlighter
            highlightClassName="search_highlight"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={props.value}
          />
        ),
        accessor: 'title',
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Price',
        accessor: 'fullPrice',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Discount',
        accessor: 'discount',
        Cell: props => props.value,
        headerClassName: 'Table__cell__header',
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: props => `${props.value[0].toUpperCase()}${props.value.slice(1)}`,
        headerClassName: 'Table__cell__header',
        width: 180,
      },
      {
        Header: 'Address',
        accessor: 'locations[0].address',
        Cell: props => convertLocation(props.value),
        headerClassName: 'Table__cell__header',
      },
      {
        Cell: props => (
          <DotsMenu
            // onEdit={() => this.onSetUpdateOffer(props.original)}
            onEdit={() => { }}
            onDelete={() => this.onSetDeleteOffer(props.value)}
            id={props.value}
          />
        ),
        width: 100,
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
        />
        <Modal
          isVisible={isDeleteModalVisible}
          onClose={this.onCloseModal}
          header="Delete user"
        >
          <Confirmation
            actionTitle="Delete"
            onCancel={this.onCloseModal}
            onConfirm={() => this.handleDelete(offerId)}
          />
        </Modal>
        <Modal
          isVisible={isEditFormVisible}
          onClose={this.onCloseModal}
          header="Edit user"
        >
          <UserForm
            onSubmit={this.handleUpdate}
            onChange={onChangeUserFormField}
            values={userToUpdate}
          />
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.offers,
  // offerToUpdate: state.offers.offerToUpdate,
});

const mapDispatchToProps = dispatch => ({
  deleteOffer: offerId => dispatch(offersActions.deleteOffer(offerId)),
  // onChangeOfferFormField: (e, fieldSelector) => dispatch(offersActions.onChangeOfferFormField(e, fieldSelector)),
  // updateOffer: () => dispatch(offersActions.updateOffer()),
});

Table.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export const OffersTable = connect(mapStateToProps, mapDispatchToProps)(Table);
