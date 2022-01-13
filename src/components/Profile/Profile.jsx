import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { state, newPostText, dispatch } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
              postData={state.postData} 
              dispatch={dispatch} 
              newPostText={newPostText}/>
    </div>
  )
}

export default Profile;
