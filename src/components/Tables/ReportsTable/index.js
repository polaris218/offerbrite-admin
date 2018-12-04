import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from 'react-highlight-words';
import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';
import styles from './styles.module.scss';

export const ReportsTable = ({ data, searchWords }) => {
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
          onDelete={() => alert(`delete id = ${props.value}`)}
          id={props.value}
        />
      ),
      accessor: 'offerId',
      sortable: false,
      style: { display: 'flex', justifyContent: 'flex-end' },
      headerClassName: 'Table__cell__header',
    },
  ];

  return (
    <ReactTable
      className="-highlight"
      data={data}
      columns={columns}
      minRows={data.length}
    />
  );
};

ReportsTable.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};
