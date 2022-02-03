import React from 'react';
// import Friend from './Friend/Friend';
import s from './Users.module.css';

const Users = (props) => {
  const { users, follow, unFollow } = props;

  // const onFollow = (userId)=> {
  //   follow(userId)
  // };

  // const onUnFollow = (userId)=> {
  //   unFollow(userId)
  // };

  return (
    <div className={s.users}>
      {
        users.map(u => {
          return (
            <div key={u.id}>
              <div>
                <div>
                  <img src={u.avaUrl} alt=""/>
                </div>
                <div className="div">
                  { u.followed 
                  ? <button onClick={() => {unFollow(u.id)}}>UNFOLLOW</button> 
                  : <button onClick={() => {follow(u.id)}}>FOLLOW</button>
                  }
                  
                </div>
              </div>

              <div>
                <div className="div">
                  <div className="div">{u.fullName}</div>
                  <div className="div">{u.status}</div>
                </div>
                <div className="div">
                  <div className="div">{u.location.country}</div>
                  <div className="div">{u.location.city}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Users;
