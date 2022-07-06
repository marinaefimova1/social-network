import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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
                        <TextInput
                            label="login"
                            name="login"
                            type="text"
                            placeholder="login"
                        />
                        <TextInput
                            label="password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <TextInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="marina@formik.com"
                        />
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
