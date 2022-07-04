import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextArea from '../FormItems/TextArea/TextArea';
import * as Yup from "yup";

const Dialogs = (props) => {
    const { dialogs, messages, isAuth } = props;

    const dialogElements = dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);

    const messageElements = messages.map((m) => <Message message={m.message} key={m.id} owner={m.owner} />);

    const onMessageAdd = (message) => {
        props.addMessage(message.message);
    };

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}

                <MessageForm  onSubmit={onMessageAdd}/>

            </div>
        </div>
    )
};

export default Dialogs;

const MessageForm = (props) => {
   console.log(props)
    return (
        <>
            <Formik
                initialValues={{
                    message: ""
                }}
                
                validationSchema={
                    Yup.object({
                        message: Yup.string()
                            .max(10, `Must be 10 characters or less`)
                            .required("Required")
                    })
                }

                onSubmit={props.onSubmit}
            >
                <Form>
                    <TextArea
                        name="message"
                        type="text"
                        placeholder="message"
                    />
                    <button type="submit">Add Message</button>
                </Form>
            </Formik>
        </>
    );
};