import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const { dialogs, messages, newMessage, addMessage, changeMessage } = props;

    const dialogElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

    const messageElements = messages.map((m) => <Message message={m.message} owner={m.owner} />);

    const onMessageChange = (e) => {
        const text = e.target.value;
        changeMessage(text);
    };

    const onMessageAdd = () => {
        addMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange}
                    value={newMessage}></textarea>
                <button onClick={onMessageAdd}>Add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;