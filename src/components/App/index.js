import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Spinner from 'components/UI/Spinner';

import Login from 'containers/Login';
import Settings from 'containers/Settings';

import styles from './styles.module.scss';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Users = () => <h2>Users</h2>;
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
                  <Route path="/admin/surveys" component={Dashboard} />
                  <Route path="/admin/surveys/new" component={SurveyNew} />
                  <Route path="/admin/settings" component={Settings} />
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
