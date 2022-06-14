import React from "react";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (AuthRedirectComponent) => {
    const WrappedComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'} />
        }
        return <AuthRedirectComponent {...props}/>
    }

    return WrappedComponent
}

export default withAuthRedirect;