import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger;
  // console.log(props)
  const { postData, addPost, newPostText, updateNewPostText } = props;

  const newPostElement = React.createRef();

  const addPostw = () => {
    // let text = newPostElement.current.value;
    addPost();
    // updateNewPostText('');
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
    updateNewPostText(text);
  };

  const postElements = postData.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.posts}>
      <h1>My posts</h1>
      <div>
        <div className="div">
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
        </div>
        <div>
          <button onClick={ addPostw }>Add a post</button>
        </div>
      </div>
      { postElements }
    </div>
  )
}

export default MyPosts;
