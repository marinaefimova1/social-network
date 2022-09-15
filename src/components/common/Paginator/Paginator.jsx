import React, { useState } from 'react';
import s from './Paginator.module.css';
import c from 'classnames';

const Paginator = (props) => {

  const { pageSize,
    totalItemsCount, currentPage, onChangePage, portionSize=10 } = props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const portionsCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
// debugger;
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  };

  return (
    <div className={s.paginator}>
      { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

      { pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return <span className={ c({[s.selectedPage]: currentPage === p}, s.page) }
            key={p} onClick={(e) => { onChangePage(p) }}>{p}</span>
        })
      }

      { portionsCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  )
}

export default Paginator;
