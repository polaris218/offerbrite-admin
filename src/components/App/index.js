import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Spinner from 'components/UI/Spinner';

import Login from 'containers/Login';
import Users from 'containers/Users';
import Companies from 'containers/Companies';
import Offers from 'containers/Offers';
import Notifications from 'containers/Notifications';
import Analytics from 'containers/Analytics';
import Settings from 'containers/Settings';
import Reports from 'containers/Reports';

import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/admin/login" />
          <Route exact path="/admin/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <div className={styles.App}>
                <SideBar />
                <Spinner />
                <div className={styles.App__content}>
                  <Header />
                  <Route path="/admin/users" component={Users} />
                  <Route path="/admin/companies" component={Companies} />
                  <Route path="/admin/offers" component={Offers} />
                  <Route path="/admin/notifications" component={Notifications} />
                  <Route path="/admin/analytics" component={Analytics} />
                  <Route path="/admin/settings" component={Settings} />
                  <Route path="/admin/reports" component={Reports} />
                </div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
