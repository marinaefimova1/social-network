import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import state, { 
    addPost, 
    subscribe, 
    updateNewPostText,
    addMessage, 
    updateMessage } from './redux/state';
import './index.css';
import App from './App';

const rerenderEntrieTree = (state) => {

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

rerenderEntrieTree(state);
subscribe(rerenderEntrieTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
