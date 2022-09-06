import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';

const User = (props) => {

  const { user, unFollow, follow, followInProgress } = props;

  return (
    <div key={user.id}>
      <div>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small ? user.photos.small : "ava.jpeg"} alt="" />
          </NavLink>
        </div>
        <div className="div">
          {user.followed
            ? <button disabled={followInProgress.includes(user.id)} onClick={() => {
              unFollow(user.id)
            }}>UNFOLLOW</button>

            : <button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
            }}>FOLLOW</button>
          }

        </div>
      </div>

      <div>
        <div className="div">
          <div className="div">{user.name}</div>
          <div className="div">{user.status}</div>
        </div>
        <div className="div">
          <div className="div"></div>
          <div className="div"></div>
        </div>
      </div>
    </div>
  )
}

export default User;
