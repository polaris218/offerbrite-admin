import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserSessions, UserSessionsByDevice } from 'components/Charts';
import styles from './styles.module.scss';

import { actions as analyticsActions } from 'reducers/analytics';

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getSessions();
    this.props.getSessionsByDevice();
  }

  render() {
    const { sessions, sessionsByDevice, onChangeRequestedTime } = this.props;

    return (
      <div className={styles.UserAnalytics__row}>
        <UserSessions
          data={sessions.data}
          onChangeTime={onChangeRequestedTime}
          times={sessions.times}
          time={sessions.requestedTime}
        />
        <UserSessionsByDevice
          data={sessionsByDevice.data}
          onChangeTime={onChangeRequestedTime}
          times={sessionsByDevice.times}
          time={sessionsByDevice.requestedTime}
        />
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  sessions: state.analytics.sessions,
  sessionsByDevice: state.analytics.sessionsByDevice,
});

const mapDispatchToProps = dispatch => ({
  getSessions: () => dispatch(analyticsActions.getSessions()),
  getSessionsByDevice: () => dispatch(analyticsActions.getSessionsByDevice()),
  onChangeRequestedTime: (time, dataSelector) => dispatch(analyticsActions.onChangeRequestedTime(time, dataSelector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalytics);
