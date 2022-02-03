import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
          dispatch(updateNewPostTextActionCreator(text));
      },
      addPost: () => {
          dispatch(addPostActionCreator());
      }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
