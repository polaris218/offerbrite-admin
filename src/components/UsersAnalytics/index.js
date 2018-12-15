import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Graph, UserSessionsByDevice, SessionsByCountry } from 'components/Charts';
import { AnalyticsScreenTable } from 'components/Tables';
import styles from './styles.module.scss';

import { actions as analyticsActions } from 'reducers/analytics';

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getSessions();
    this.props.getSessionsByDevice();
    this.props.getUserStats();
    this.props.getUsersGraph();
    this.props.getSessionDurationGraph();
    this.props.getSessionsByCountry();
    this.props.getScreenSupport();
  }

  render() {
    const {
      sessions,
      usersGraph,
      sessionDurationGraph,
      userStats,
      sessionsByDevice,
      sessionsByCountry,
      screenSupport,
      onChangeRequestedTime,
      onChangeGraphMode,
      selectedGraphMode,
      graphModes,
    } = this.props;

    let graphData = sessions.data;
    if (selectedGraphMode === 'Users') {
      graphData = usersGraph.data;
    } else if (selectedGraphMode === 'Session duration') {
      graphData = sessionDurationGraph.data;
    }

    return (
      <Fragment>
        <div className={styles.UserAnalytics__row}>
          <Graph
            data={graphData}
            onChangeTime={onChangeRequestedTime}
            times={sessions.times}
            time={sessions.requestedTime}
            userStats={userStats}
            onChangeGraph={onChangeGraphMode}
            activeMode={selectedGraphMode}
            graphModes={graphModes}
          />
          <UserSessionsByDevice
            data={sessionsByDevice.data}
            onChangeTime={onChangeRequestedTime}
            times={sessionsByDevice.times}
            time={sessionsByDevice.requestedTime}
          />
        </div>
        <AnalyticsScreenTable
          data={screenSupport.data}
          onChangeTime={onChangeRequestedTime}
          times={screenSupport.times}
          time={screenSupport.requestedTime}
        />
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
  graphModes: state.analytics.graphModes,
  selectedGraphMode: state.analytics.selectedGraphMode,
  sessions: state.analytics.sessions,
  usersGraph: state.analytics.usersGraph,
  sessionDurationGraph: state.analytics.sessionDurationGraph,
  sessionsByDevice: state.analytics.sessionsByDevice,
  sessionsByCountry: state.analytics.sessionsByCountry,
  screenSupport: state.analytics.screenSupport,
  userStats: state.analytics.userStats,
});

const mapDispatchToProps = dispatch => ({
  getSessions: () => dispatch(analyticsActions.getSessions()),
  getSessionsByDevice: () => dispatch(analyticsActions.getSessionsByDevice()),
  getSessionsByCountry: () => dispatch(analyticsActions.getSessionsByCountry()),
  getUserStats: () => dispatch(analyticsActions.getUserStats()),
  getUsersGraph: () => dispatch(analyticsActions.getUsersGraph()),
  getSessionDurationGraph: () => dispatch(analyticsActions.getSessionDurationGraph()),
  getScreenSupport: () => dispatch(analyticsActions.getScreenSupport()),
  onChangeRequestedTime: (time, dataSelector) => dispatch(analyticsActions.onChangeRequestedTime(time, dataSelector)),
  onChangeGraphMode: mode => dispatch(analyticsActions.onChangeGraphMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalytics);
