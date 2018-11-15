//Core
import React, { Component } from 'react';
import { string } from 'prop-types';

export default class HeaderBar extends Component {
    static propTypes = {
        avatar: string.isRequired,
        name: string.isRequired,
        text: string.isRequired,
    };

    render() {
        const { avatar, name, text } = this.props;

        return (
            <div className="headerbar">
                <div className="userlabel">
                    <img src={avatar} alt="avatar" />
                    <p>
                        {name}
                        {/* arrow */}
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.175 0L5 3.7085L8.825 0L10 1.1417L5 6L0 1.1417L1.175 0Z"
                                fill="#474747"
                            />
                        </svg>
                    </p>
                </div>
                <p>{text}</p>
            </div>
        );
    }
}
