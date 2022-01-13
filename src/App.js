import React from 'react';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  const { state, dispatch } = props;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={state.sideBar.friends} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={
              <Dialogs messages={state.dialogsPage.messages}
                dialogs={state.dialogsPage.dialogs}
                newMessage={state.dialogsPage.newMessage}
                dispatch={dispatch}/>} />
            <Route path="/profile" element={
              <Profile state={state.profilePage}
                dispatch={dispatch}
                newPostText={state.profilePage.newPostText}
                />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends friends={state.sideBar.friends} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
