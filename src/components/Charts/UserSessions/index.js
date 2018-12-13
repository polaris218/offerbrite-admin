import React from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Dropdown from 'components/UI/Dropdown';
import styles from './styles.module.scss';

export const UserSessions = ({ data, onChangeTime, time, times }) => (
  <div className={styles.Chart}>
    <div className={styles.Chart__dropdown}>
      <Dropdown
        title={time}
        values={times}
        onSelect={onChangeTime}
      />
    </div>
    <ResponsiveContainer width="70%" minWidth={600} aspect={3}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey="count" name="sessions" stroke="#FFB018" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </div>
  
);
