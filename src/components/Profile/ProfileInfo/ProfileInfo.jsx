import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  const { profile } = props;

  if (!profile) {
    return <Preloader />
  }
  return (

    <div className={s.profileInfo}>
      <div className={s.wrapper}>
        <img alt="" src='https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img alt="profile" src={profile.photos.small} />
        <div><b><span>{profile.fullName}</span></b></div>
        <div>{profile.aboutMe}</div>
        <div>
          <div><b>Ищу работу:</b></div>
          <div>{profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
