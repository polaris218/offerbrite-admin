//Core
import React, { Component } from 'react';

//Components
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import InstrumentsBar from '../../components/InstrumentsBar';
import HeaderBar from '../../components/HeaderBar';

export default class Users extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <HeaderBar
                    name="James Bond"
                    avatar="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                    text="Managing of users"
                />
                <InstrumentsBar
                    // pass into select ARRAY of ARRAYS of OBJECTS
                    //!---WARNING - hardcoded data below
                    selects={[
                        [
                            {
                                value: 'value1',
                                label: 'value1.1',
                            },
                            {
                                value: 'value1',
                                label: 'value1.2',
                            },
                            {
                                value: 'value1',
                                label: 'value1.3',
                            },
                        ],
                        [
                            {
                                value: 'value2',
                                label: 'value2.1',
                            },
                            {
                                value: 'value2',
                                label: 'value2.2',
                            },
                            {
                                value: 'value2',
                                label: 'value2.3',
                            },
                        ],
                        [
                            {
                                value: 'value3',
                                label: 'value3.1',
                            },
                        ],
                        [
                            {
                                value: 'value4',
                                label: 'value4.1',
                            },
                            {
                                value: 'value4',
                                label: 'value4.2',
                            },
                        ],
                        [
                            {
                                value: 'value5',
                                label: 'value5.1',
                            },
                        ],
                    ]}
                    selectNames={[
                        'User id',
                        'Name',
                        'Email',
                        'Country',
                        'Categories',
                    ]}
                />
                <Table />
            </div>
        );
    }
}
