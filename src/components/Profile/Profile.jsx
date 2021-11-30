import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <img src='https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg'/>
      </div>
      <div>
        ava+ description
      </div>
     <MyPosts />
    </div>
  )
}

export default Profile;
