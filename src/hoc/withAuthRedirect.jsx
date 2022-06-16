import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

const withAuthRedirect = (AuthRedirectComponent) => {
    const WrappedComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'} />
        }
        return <AuthRedirectComponent {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(WrappedComponent);

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;