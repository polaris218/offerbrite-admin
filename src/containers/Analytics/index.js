import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReactTable from 'react-table';
import PageTitle from 'components/PageTitle';
import Modal from 'components/UI/Modal';
import styles from './styles.module.scss';

import { actions as analyticsActions } from 'reducers/analytics';

class Analytics extends Component {
  componentDidMount() {
    this.props.getSessions();
  }

  render() {
    return (
      <div className={styles.Analytics}>
        <PageTitle title="Analytics" />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getSessions: () => dispatch(analyticsActions.getSessions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
