import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import DotsMenu from 'components/DotsMenu';

export const AdminsTable = ({ data }) => {
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
      columns={adminsTableColumns}
      minRows={5}
      showPaginationBottom={false}
    />
  );
};

AdminsTable.propTypes = {
  data: PropTypes.array,
};
