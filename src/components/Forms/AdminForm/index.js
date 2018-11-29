import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';

export const AdminForm = ({ onSubmit, onChange, values }) => (
  <div className={styles.AdminForm}>
    <div className={styles.AdminForm__form}>
      <Input
        placeholder="Email"
        onChange={e => onChange(e, 'email')}
        value={values.email}
      />
      <Input
        placeholder="Name"
        onChange={e => onChange(e, 'name')}
        value={values.name}
      />
      <Input
        placeholder="Password"
        onChange={e => onChange(e, 'password')}
        value={values.password}
      />
      <Button block onClick={onSubmit}>
        Save
      </Button>
    </div>
  </div>
);
