import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

  const { users, unFollow, follow, pageSize,
    totalUsersCount, currentPage, onChangePage, followInProgress } = props;

  return (
    <div className={s.users}>
      <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount}
        currentPage={currentPage} onChangePage={onChangePage} />

      {
        users.map(u => {
          return (
            <User user={u} key={u.id} followInProgress={followInProgress}
              unFollow={unFollow} follow={follow} />
          )
        })
      }
    </div>
  )
}

export default Users;
