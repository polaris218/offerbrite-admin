import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserSessions } from 'components/Charts';

import { actions as analyticsActions } from 'reducers/analytics';

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getSessions();
    this.props.getSessionsByDevice();
  }

  render() {
    const { sessions, onChangeRequestedTime } = this.props;

    return (
      <UserSessions
        data={sessions.data}
        onChangeTime={onChangeRequestedTime}
        times={sessions.times}
        time={sessions.requestedTime}
      />
    );
  }
}

const mapStateToProps = state => ({
  sessions: state.analytics.sessions,
});

const mapDispatchToProps = dispatch => ({
  getSessions: () => dispatch(analyticsActions.getSessions()),
  getSessionsByDevice: () => dispatch(analyticsActions.getSessionsByDevice()),
  onChangeRequestedTime: (time, dataSelector) => dispatch(analyticsActions.onChangeRequestedTime(time, dataSelector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalytics);
