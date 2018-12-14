import React from 'react';

import ReactTable from 'react-table';
import Dropdown from 'components/UI/Dropdown';
import styles from './styles.module.scss';

export const AnalyticsScreenTable = ({ data, time, times, onChangeTime }) => {
  const columns = [
    {
      Header: 'Screen name',
      Cell: props => props.value,
      accessor: 'name',
      headerClassName: 'Table__cell__header',
    },
    {
      Header: 'Screen views',
      Cell: props => props.value,
      accessor: 'views',
      headerClassName: 'Table__cell__header',
      sortable: false,
    },
    {
      Header: 'Unique screen views',
      Cell: props => props.value,
      accessor: 'uniqViews',
      headerClassName: 'Table__cell__header',
      sortable: false,
    },
    {
      Header: 'Avg. Time on screen',
      Cell: props => props.value,
      accessor: 'avgDuration',
      headerClassName: 'Table__cell__header',
    },
    {
      Header: '% Exit',
      Cell: props => props.value,
      accessor: 'exitPercent',
      headerClassName: 'Table__cell__header',
      sortable: false,
    },
  ];

  return (
    <div className={styles.Table}>
      <div className={styles.Table__header}>
        <h3 className={styles.Table__header__text}>Screen support</h3>
        <Dropdown
          title={time}
          values={times}
          onSelect={onChangeTime}
          dataSelector="screenSupport"
          small
        />
      </div>
      <ReactTable
        className="-highlight"
        data={data}
        minRows={data.length}
        columns={columns}
        showPaginationBottom={false}
      />
    </div>
    
  );
};
