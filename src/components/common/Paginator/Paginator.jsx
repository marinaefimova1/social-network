import React from 'react';
import s from './Paginator.module.css';

const Paginator = (props) => {

  const { pageSize,
    totalUsersCount, currentPage, onChangePage } = props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  };

  return (
    <div className="">
      {
        pages.map(p => {
          return <span className={`${currentPage === p && s.selectedPage} ${s.page}`}
            onClick={() => { onChangePage(p) }}>{p}</span>
        })
      }
    </div>
  )
}

export default Paginator;
