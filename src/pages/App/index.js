// Core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Users from '../Users';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Users} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}
