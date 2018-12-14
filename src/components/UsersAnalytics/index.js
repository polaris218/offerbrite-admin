import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { UserSessions, UserSessionsByDevice, SessionsByCountry } from 'components/Charts';
import styles from './styles.module.scss';

import { actions as analyticsActions } from 'reducers/analytics';

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getSessions();
    this.props.getSessionsByDevice();
    this.props.getUserStats();
    this.props.getUsersGraph();
    this.props.getSessionsByCountry();
  }

  render() {
    const {
      sessions,
      sessionsByDevice,
      sessionsByCountry,
      onChangeRequestedTime,
      userStats,
    } = this.props;

    return (
      <Fragment>
        <div className={styles.UserAnalytics__row}>
          <UserSessions
            data={sessions.data}
            onChangeTime={onChangeRequestedTime}
            times={sessions.times}
            time={sessions.requestedTime}
            userStats={userStats}
          />
          <UserSessionsByDevice
            data={sessionsByDevice.data}
            onChangeTime={onChangeRequestedTime}
            times={sessionsByDevice.times}
            time={sessionsByDevice.requestedTime}
          />
        </div>
        <SessionsByCountry
          data={sessionsByCountry.data}
          totalSessions={sessionsByCountry.data.reduce((prev, cur) => prev + cur.count, 0)}
          onChangeTime={onChangeRequestedTime}
          times={sessionsByCountry.times}
          time={sessionsByCountry.requestedTime}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sessions: state.analytics.sessions,
  sessionsByDevice: state.analytics.sessionsByDevice,
  sessionsByCountry: state.analytics.sessionsByCountry,
  userStats: state.analytics.userStats,
});

const mapDispatchToProps = dispatch => ({
  getSessions: () => dispatch(analyticsActions.getSessions()),
  getSessionsByDevice: () => dispatch(analyticsActions.getSessionsByDevice()),
  getSessionsByCountry: () => dispatch(analyticsActions.getSessionsByCountry()),
  getUserStats: () => dispatch(analyticsActions.getUserStats()),
  getUsersGraph: () => dispatch(analyticsActions.getUsersGraph()),
  onChangeRequestedTime: (time, dataSelector) => dispatch(analyticsActions.onChangeRequestedTime(time, dataSelector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalytics);
