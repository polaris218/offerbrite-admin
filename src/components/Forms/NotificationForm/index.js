import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Button from 'components/UI/Button';
import Section from 'components/UI/Section';
import styles from './styles.module.scss';

export const NotificationForm = ({ onSubmit }) => (
  <div className={styles.NotificationForm}>
    <div className={styles.NotificationForm__form}>
      <Section header="Notice text">
        <Input placeholder="Header" label="Header (optional)" />
        <Input placeholder="Text" label="Text" inputtype="textarea" />
      </Section>
      <Section header="Targeting">

      </Section>
      <Section header="Notification settings">
        <div className={styles.NotificationForm__form__button}>
          <Button block onClick={onSubmit}>
            Send
          </Button>
        </div>
      </Section>

    </div>
  </div>
);

NotificationForm.propTypes = {

};
