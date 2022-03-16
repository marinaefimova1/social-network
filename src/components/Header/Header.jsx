import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  // debugger;
  return (
    <header className={s.header}>
      <img src='./logo192.png' alt="" />
      <div className={s.loginBlock}>
        {
          props.isAuth ? props.login : <NavLink to="/login">
            Login here!
        </NavLink>
        }

      </div>
    </header>
  )
}

export default Header;
