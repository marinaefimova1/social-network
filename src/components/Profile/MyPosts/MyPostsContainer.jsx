import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profileReducer';

const MyPostsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  // state.profilePage.newPostText

  const onPostChange = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  };

  const onAddPost = () => {
    store.dispatch(addPostActionCreator());
  };


  return (
    <MyPosts updateNewPostText={onPostChange} 
      addPost={onAddPost} 
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}/>
  )
}

export default MyPostsContainer;
