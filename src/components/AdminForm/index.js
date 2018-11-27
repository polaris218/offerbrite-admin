import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';

const AdminForm = ({ onSubmit }) => (
  <div className={styles.AdminForm}>
    <div className={styles.AdminForm__form}>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button block onClick={onSubmit}>
        Save
      </Button>
    </div>
  </div>
);

export default AdminForm;
