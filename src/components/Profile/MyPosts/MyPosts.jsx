import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { postData } = props;

  const postElements = postData.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.posts}>
      <h1>My posts</h1>
      <div>
        <div className="div">
          <textarea></textarea>
        </div>
        <div>
          <button>Add a post</button>
        </div>
      </div>
      { postElements }
    </div>
  )
}

export default MyPosts;
