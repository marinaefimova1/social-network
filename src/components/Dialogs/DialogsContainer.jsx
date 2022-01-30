import React from 'react';

import { changeMessageActionCreator, addMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const { store } = props;
    const state = store.getState();

    const onMessageChange = (text) => {
        store.dispatch(changeMessageActionCreator(text));
    };

    const onMessageAdd = () => {
        store.dispatch(addMessageActionCreator());
    };

    return (
        <Dialogs addMessage={onMessageAdd}
            changeMessage={onMessageChange}
            dialogs={state.dialogsPage.dialogs} 
            messages={state.dialogsPage.messages}
            newMessage={state.dialogsPage.newMessage} />
    )
};

export default DialogsContainer;