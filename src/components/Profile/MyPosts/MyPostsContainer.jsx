import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profileReducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
  
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
      
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
            newPostText={state.profilePage.newPostText} />
        )      
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
