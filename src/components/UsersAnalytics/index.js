import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserSessions } from 'components/Charts';

import { actions as analyticsActions } from 'reducers/analytics';

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getSessions();
  }

  render() {
    const { sessions, onChangeUserSessionsTime } = this.props;

    return (
      <UserSessions
        data={sessions.data}
        onChangeTime={onChangeUserSessionsTime}
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
  onChangeUserSessionsTime: time => dispatch(analyticsActions.onChangeUserSessionsTime(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalytics);
