import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
    const { friends } = props;
    const friendsArray = friends.map( (f) => <Friend id={f.id} key={f.id} name={f.name} ava={f.ava}/>);

  return (
   <div className={s.friendsSidebar}>
       { friendsArray }
   </div>
  )
}

export default Friends;
