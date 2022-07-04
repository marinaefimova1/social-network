import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextArea from '../../FormItems/TextArea/TextArea';
// import { maxLengthCreator } from '../../../utils/validators/validator';


const MyPosts = (props) => {
  const { posts, addPost } = props;

  const onAddPost = (data) => {
    addPost(data.post);
  };

  const postElements = posts.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.posts}>
      <h1>My posts</h1>
      <div>
        <PostForm onSubmit={onAddPost}/>
      </div>
      { postElements}
    </div>
  )
}

export default MyPosts;

const PostForm = (props) => {

  return(
    <>
    <Formik
        initialValues={{
          post: ""
        }}
        validationSchema={
          Yup.object({
            post: Yup.string()
                .max(10, `Must be 10 characters or less`)
                .required("Required")
        })
        }

        onSubmit={props.onSubmit}
    >
        <Form>
            <TextArea
                name="post"
                type="text"
                placeholder="post"
            />
            <button type="submit">Add Post</button>
        </Form>
    </Formik>
</>
  )
}