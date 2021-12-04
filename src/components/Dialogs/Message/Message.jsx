import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Message.module.css';

const Message = (props) => {
    const { message, owner } = props;
    let messageClass = `${s.message}`;
    
    if (owner) {
        messageClass = `${s.message} ${s.owner}`;
    }
    return (
        <div>
            <div className={messageClass}>
                <img src="ava.jpeg"/>
                <div>{message}</div>
            </div>         
        </div>
    )
};

export default Message;