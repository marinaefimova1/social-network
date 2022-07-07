import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

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
