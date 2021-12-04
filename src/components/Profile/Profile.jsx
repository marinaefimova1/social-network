import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { postData } = props.state;
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={postData}/>
    </div>
  )
}

export default Profile;
