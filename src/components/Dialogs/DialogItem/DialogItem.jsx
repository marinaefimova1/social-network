import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './DialogItem.module.css';

const DialogItem = (props) => {
    const { id, name } = props;
    return (
        <div className={s.dialog}>
            <img src="ava.jpeg" />
            <NavLink to={`/dialogs/${id}`}>
                { name }
            </NavLink >
        </div>
    )
};

export default DialogItem;
