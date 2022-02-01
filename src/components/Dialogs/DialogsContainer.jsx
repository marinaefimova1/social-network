import React from 'react';
import { connect } from 'react-redux';

import { changeMessageActionCreator, addMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeMessage: (text) => {
            dispatch(changeMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;