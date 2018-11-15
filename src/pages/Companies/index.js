//Core
import React, { Component } from 'react';

//Components
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import InstrumentsBar from '../../components/InstrumentsBar';
import HeaderBar from '../../components/HeaderBar';

export default class Companies extends Component {
    render() {
        return (
            <div>
                <SideBar />

                <HeaderBar
                    //!---WARNING - hardcoded data below
                    name="James Bond"
                    avatar="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                    text="Management of companies"
                />
                <InstrumentsBar />

                <Table
                    //!--WARNING - harcoded data below
                    data={[
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                        {
                            _id: Math.random(),
                            name: 'Oleksa Industries',
                            email: 'roquefore@gmail.com',
                            country: 'Ukraine',
                            phone: '+380449789867',
                            website: 'https://sitename.com',
                        },
                    ]}
                    columns={[
                        {
                            accessor: '_id',
                            Header: 'Id',
                        },
                        {
                            accessor: 'name',
                            Header: 'Name',
                        },
                        {
                            accessor: 'email',
                            Header: 'Email',
                        },
                        {
                            accessor: 'country',
                            Header: 'Country',
                        },
                        {
                            accessor: 'phone',
                            Header: 'Phone',
                        },
                        {
                            accessor: 'website',
                            Header: 'Website',
                        },
                    ]}
                />
            </div>
        );
    }
}
