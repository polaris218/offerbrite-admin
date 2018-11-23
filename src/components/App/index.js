import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'components/Header';
import SideBar from 'components/SideBar';

import styles from './styles.module.scss';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Users = () => <h2>Users</h2>;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <SideBar />
          <div className={styles.App__content}>
            <Header />
            <Route exact path="/users" component={Users} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
