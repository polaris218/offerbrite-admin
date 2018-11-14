//Core
import React, { Component } from 'react';

// //Styles
// import Styles from './styles.scss';

//Instruments
import Select from 'react-select';

export default class InstrumentsBar extends Component {
    render() {
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
                    Filter
                </div>
                <input type="text" />
                <div className="selectContainer">
                    <Select className="select" />
                    <Select className="select" />
                    <Select className="select" />
                    <Select className="select" />
                    <Select className="select" />
                </div>
            </div>
        );
    }
}
