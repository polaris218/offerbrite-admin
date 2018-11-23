import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import Button from 'components/UI/Button';
import styles from './styles.module.scss';

class Settings extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Settings" />
        <Button onClick={() => alert('Hi')}>Add admin</Button>
      </div>
    );
  }
}

export default connect()(Settings);
