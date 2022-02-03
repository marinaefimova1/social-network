import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {
    const { id, name, ava } = props;

    return (
        <div className={s.friend}>
            <img src={ava} alt=""/>
            <NavLink to={`/friends/${id}`}>
                {name}
            </NavLink >
        </div>
    )
}

export default Friend;
