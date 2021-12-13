import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { state, addPost, newPostText, updateNewPostText } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
              postData={state.postData} 
              addPost={addPost} 
              newPostText={newPostText}
              updateNewPostText={updateNewPostText}/>
    </div>
  )
}

export default Profile;
