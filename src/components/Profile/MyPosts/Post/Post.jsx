import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  const { message, likeCount } = props;
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="ava.jpeg" />
      { message }
      <div> like = { likeCount } </div>
    </div>
  )
}

export default Post;
