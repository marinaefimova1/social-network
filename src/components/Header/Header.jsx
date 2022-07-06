import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/reducers/authReducer';
import s from './Header.module.css';

const Header = (props) => {
  // debugger;
  return (
    <header className={s.header}>
      <img src='./logo192.png' alt="" />
      <div className={s.loginBlock}>
        {
          props.isAuth 
          ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div>
          : <NavLink to="/login">
            Login here!
        </NavLink>
        }

      </div>
    </header>
  )
}

export default Header;
