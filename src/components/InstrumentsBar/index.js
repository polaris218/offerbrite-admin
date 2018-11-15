//Core
import React, { Component } from 'react';
import { string, arrayOf, shape } from 'prop-types';

//Instruments
import Select from 'react-select';

export default class InstrumentsBar extends Component {
    static propTypes = {
        selectNames: arrayOf(string),

        //ARRAY of ARRAYS of OBJECTS
        selects: arrayOf(
            arrayOf(
                shape({
                    value: string.isRequired,
                    label: string.isRequired,
                }),
            ),
        ),
    };

    render() {
        const { selects, selectNames } = this.props;

        return (
            <div className="instruments">
                <div className="button">
                    <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 -1.58707e-05L7 -1.62204e-05L7 1.99998L11 1.99998L11 -1.58707e-05ZM18 12L18 9.99998L1.74846e-07 9.99998L0 12L18 12ZM15 4.99998L3 4.99998L3 6.99998L15 6.99998L15 4.99998Z"
                            fill="#0461EC"
                        />
                    </svg>
                    <span>Filter</span>
                </div>
                <input type="text" />
                <div className="selectContainer">
                    {selects.map((item, index) => (
                        <Select
                            className="select"
                            options={item}
                            placeholder={selectNames[index]}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
