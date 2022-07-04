import MyPosts from './MyPosts'
import {addPostActionCreator} from '../../../redux/reducers/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPost: (postText) => {
          dispatch(addPostActionCreator(postText));
      }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
