import React from 'react';
import { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/authReducer';

class HeaderContainer extends Component {
   
    render() {
        return (
            <Header {...this.props}
             isAuth={this.props.isAuth} login={this.props.login}
              logout={this.props.logout} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
