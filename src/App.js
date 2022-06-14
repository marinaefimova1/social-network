import React from 'react';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  const { state } = props;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar friends={state.sideBar.friends} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={
              <DialogsContainer />} />

            <Route path="/profile/" element={<ProfileContainer />} >
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/friends" element={<Friends friends={state.sideBar.friends} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
