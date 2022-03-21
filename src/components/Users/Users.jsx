import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import { usersAPI } from '../../api/api';

const Users = (props) => {

  const { users, unFollow, follow, pageSize, totalUsersCount, currentPage, onChangePage } = props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  };

  return (
    <div className={s.users}>
      <div className="">
        {
          pages.map(p => {
            return <span className={`${currentPage === p && s.selectedPage} ${s.page}`}
              onClick={() => { onChangePage(p) }}>{p}</span>
          })
        }
      </div>
      {
        users.map(u => {
          return (
            <div key={u.id}>
              <div>
                <div>
                  <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small ? u.photos.small : "ava.jpeg"} alt="" />
                  </NavLink>
                </div>
                <div className="div">
                  {u.followed
                    ? <button onClick={() => {
                      usersAPI.unFollow(u.id)
                        .then(response => {
                          if (response.resultCode === 0) {
                            unFollow(u.id)
                          }
                        })
                    }}>UNFOLLOW</button>

                    : <button onClick={() => {
                      usersAPI.follow(u.id)
                        .then(response => {
                          if (response.resultCode === 0) {
                            follow(u.id)
                          }
                        })
                    }}>FOLLOW</button>
                  }

                </div>
              </div>

              <div>
                <div className="div">
                  <div className="div">{u.name}</div>
                  <div className="div">{u.status}</div>
                </div>
                <div className="div">
                  <div className="div"></div>
                  <div className="div"></div>
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
