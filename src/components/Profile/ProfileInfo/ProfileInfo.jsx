import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  // const { profile, status, updateStatus } = props;

  if (!props.profile) {
    return <Preloader />
  }
  return (

    <div className={s.profileInfo}>

      <div className={s.wrapper}>
        <img alt="" src='https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg' />
      </div>

      <div className={s.descriptionBlock}>
        
        <img alt="profile" src={props.profile.photos.small} />
        
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

        <div><b><span>{props.profile.fullName}</span></b></div>
        
        <div>{props.profile.aboutMe}</div>
        <div>
          <div><b>Ищу работу:</b></div>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
