import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const { dialogs, messages } = props.state;

    const dialogElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>);
    
    const messageElements = messages.map( (m) => <Message message={m.message} owner={m.owner}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
};

export default Dialogs;