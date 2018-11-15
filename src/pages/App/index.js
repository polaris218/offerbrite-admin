// Core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Components
import Users from '../Users';
import Companies from '../Companies';
import Offers from '../Offers';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Users} exact />
                    <Route path="/companies" component={Companies} exact />
                    <Route path="/offers" component={Offers} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}
