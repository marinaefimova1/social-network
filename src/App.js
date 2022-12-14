import React from 'react';
import {
  Routes, Route, useParams
} from 'react-router-dom';
import { Component, Suspense } from 'react';

import './App.css';
// import DialogsContainer from './components/Dialogs/DialogsContainer';

import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/reducers/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  };
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar friends={this.props.friends} />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>

            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />

              <Route path="/profile/" element={<ProfileContainer />} >
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/news" element={<News />} />

              <Route path="/music" element={<Music />} />

              <Route path="/settings" element={<Settings />} />

              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/friends" element={<Friends friends={this.props.friends} />} />
            </Routes>
          </Suspense>

        </div>
      </div>
    )
  }
}

function withRouter(Child) {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params} />;
  }
}

const mapStateToProps = (state) => ({
  // isAuth: state.auth.isAuth,
  friends: state.sideBar.friends,
  initialized: state.app.initialized
});


export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)