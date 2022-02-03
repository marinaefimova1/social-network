import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.wrapper}>
        <img alt="" src='https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        ava+ description
      </div>
    </div>
  )
}

export default ProfileInfo;
