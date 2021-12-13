import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const { dialogs, messages, addMessage, updateMessage, newMessage } = props;

    const dialogElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

    const messageElements = messages.map((m) => <Message message={m.message} owner={m.owner} />);

    const newMessageElement = React.createRef();

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        updateMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange}
                    ref={newMessageElement}
                    value={newMessage}></textarea>
                <button onClick={()=> addMessage()}>Add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;