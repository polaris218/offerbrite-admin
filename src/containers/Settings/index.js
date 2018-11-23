import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';

class Settings extends Component {
  render() {
    return <PageTitle title="Settings" />;
  }
}

export default connect()(Settings);
