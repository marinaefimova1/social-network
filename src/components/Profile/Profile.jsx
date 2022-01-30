import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { store } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store}/>
    </div>
  )
}

export default Profile;
