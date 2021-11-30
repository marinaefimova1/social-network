import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';

const Dialog = (props) => {
    const { id, name } = props;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>
                { name }
            </NavLink >
        </div>
    )
};

const Message = (props) => {
    const { message } = props;
    return (
        <div className={s.message}>{ message }</div> 
    )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Marina" id="1"/>
                <Dialog name="Slava" id="2"/>
                <Dialog name="Syapick" id="3"/>
                <Dialog name="Danil" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="HI!"/>
                <Message message="Yo"/>
                <Message message="What are you doing?"/>
            </div>
        </div>
    )
};

export default Dialogs;