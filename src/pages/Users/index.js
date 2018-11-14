//Core
import React, { Component } from 'react';

//Components
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import InstrumentsBar from '../../components/InstrumentsBar';

export default class Users extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <InstrumentsBar />
                <Table />
            </div>
        );
    }
}
