import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { postData, addPost, newPostText, updateNewPostText } = props;

  const newPostElement = React.createRef();

  const onPostChange = () => {
    let text = newPostElement.current.value;
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
          <button onClick={() => addPost()}>Add a post</button>
        </div>
      </div>
      { postElements}
    </div>
  )
}

export default MyPosts;
