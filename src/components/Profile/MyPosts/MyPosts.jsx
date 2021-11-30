import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>
      <textarea></textarea>
      <button>Add a post</button>
      </div>
      
      My posts
      <Post message="Hi!" likeCount={15}/>
      <Post message="It's my first post!" likeCount={20}/>
    </div>
  )
}

export default MyPosts;
