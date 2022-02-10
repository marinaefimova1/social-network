import React from 'react';
import s from './Users.module.css';

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
                  <img src={u.photos.small ? u.photos.small : "ava.jpeg"} alt="" />
                </div>
                <div className="div">
                  {u.followed
                    ? <button onClick={() => { unFollow(u.id) }}>UNFOLLOW</button>
                    : <button onClick={() => { follow(u.id) }}>FOLLOW</button>
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
