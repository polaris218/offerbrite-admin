//Core
import React, { Component } from 'react';

//Styles
import Styles from './styles.scss';

//Instruments
import { data } from './data';

export default class Table extends Component {
    render() {
        return (
            <table className={Styles.table}>
                <tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    {Object.keys(data[0]).map((item) => (
                        <th>
                            <div>{item}</div>
                        </th>
                    ))}
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <div>{item.id}</div>
                            </td>
                            <td>
                                <div>{item.name}</div>
                            </td>
                            <td>
                                <div>{item.email}</div>
                            </td>
                            <td>
                                <div>{item.country}</div>
                            </td>
                            <td>
                                <div>{item.categories}</div>
                            </td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}
