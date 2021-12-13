import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateMessage } from './redux/state';

export const rerenderEntrieTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={addPost} 
        updateNewPostText={updateNewPostText} 
        addMessage={addMessage} 
        updateMessage={updateMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};