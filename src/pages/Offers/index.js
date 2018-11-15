//Core
import React, { Component } from 'react';

//Components
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import InstrumentsBar from '../../components/InstrumentsBar';
import HeaderBar from '../../components/HeaderBar';

export default class Offers extends Component {
    render() {
        return (
            <div>
                <SideBar />

                <HeaderBar
                    //!---WARNING - hardcoded data below
                    name="James Bond"
                    avatar="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                    text="Management Offers"
                />
                <InstrumentsBar
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
                    ]}
                    selectNames={['User', 'Category', 'Price']}
                />

                <Table
                    //!--WARNING - harcoded data below
                    data={[
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                        {
                            _id: 'https://url.com',
                            title: 'Very good title',
                            user: 'Oleksa',
                            category: 'best_category',
                            price: '100500',
                            address: `Very Main Str., ${Math.round(
                                Math.random() * 100,
                            )}`,
                        },
                    ]}
                    columns={[
                        {
                            accessor: '_id',
                            Header: 'Picture',
                        },
                        {
                            accessor: 'title',
                            Header: 'Title',
                        },
                        {
                            accessor: 'user',
                            Header: 'User',
                        },
                        {
                            accessor: 'category',
                            Header: 'Category',
                        },
                        {
                            accessor: 'price',
                            Header: 'Price',
                        },
                        {
                            accessor: 'address',
                            Header: 'Address',
                        },
                    ]}
                />
            </div>
        );
    }
}
