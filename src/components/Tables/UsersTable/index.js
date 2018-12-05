import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from 'react-highlight-words';
import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';

export const UsersTable = ({ data, searchWords }) => {
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
          onDelete={() => alert(`delete id = ${props.value}`)}
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
    <ReactTable
      className="-highlight"
      data={data}
      columns={columns}
      minRows={data.length}
    />
  );
};

UsersTable.propTypes = {
  searchWords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};
