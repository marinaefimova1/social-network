import React from 'react';
import { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducers/authReducer';
import { usersAPI } from '../../api/api';


class HeaderContainer extends Component {
    componentDidMount() {

        usersAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    this.props.setAuthUserData(id, email, login);
                }

            })
    };
    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
