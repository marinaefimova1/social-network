import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../FormItems/TextInput/TextInput";
import Checkbox from "../FormItems/Checkbox/Checkbox";
import ValidationSchema from "./ValidationSchema";
import { login } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from './Login.module.css';

const LoginContainer = (props) => {
    const onSubmit = (formData, actions) => {
        props.login(formData.login, formData.password, formData.rememberMe, actions.setStatus);
    };

    if (props.isAuth) {
        return <Navigate to={`/profile/${props.userId}`} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
};

const createTextInput = (label, name, type, placeholder) => {
    return <TextInput
        label={label}
        name={name}
        type={type}
        placeholder={placeholder}
    />
};

const LoginForm = (props) => {

    return (
        <>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                    email: "",
                    rememberMe: false
                }}
                validationSchema={ValidationSchema}

                onSubmit={props.onSubmit}>

                {({ status }) => (
                    <Form>
                       { createTextInput("login", "login", "text", "login") }
                       { createTextInput("password", "password", "password", "password") }
                       { createTextInput("Email Address", "email", "email", "marina@formik.com") }

                        <Checkbox name="rememberMe">
                            Remember Me
                        </Checkbox>

                        <div className={s.formSummaryError}>
                            {status}
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
};


export default connect(mapStateToProps, { login: login })(LoginContainer);
