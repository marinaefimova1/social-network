import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../FormItems/TextInput/TextInput";
import Select from "../FormItems/Select/Select";
import Checkbox from "../FormItems/Checkbox/Checkbox";
import ValidationSchema from "./ValidationSchema";
import { login } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";

const LoginContainer = (props) => {
    // debugger;
    const onSubmit = (formData) => {
        console.log("formData",formData);
        props.login(formData.login, formData.password);
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

                onSubmit={props.onSubmit}
            >
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
                        type="text"
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

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    // login: state.auth.login,
    userId: state.auth.userId
});

export default connect(mapStateToProps, { login: login })(LoginContainer);
