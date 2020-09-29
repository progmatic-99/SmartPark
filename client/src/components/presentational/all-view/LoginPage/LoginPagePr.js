import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginPagePr.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class LoginPage extends Component {
    constructor(props) {
        super();
        this.state = {
            isLogined: false,
            accessToken: ''
        };
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }
    login(response) {
        if (response.accessToken) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
        }
    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        alert('Failed to log out')
    }
    render() {
        const CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENTID;
        return (
            // <div>
            // <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .min(4, 'Password is too short - should be 5 chars minimum.')
                        .required('No password provided.'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
               
                <div className="login-content">
                    <div className="login-main-div">
                        
                        <Form className="login-form">
                            <div className="login-container">
                            <header className="login-header">Login</header>
                                <div className="login-form-element">
                                    <label htmlFor="email" className="login-label">Email</label>
                                    <Field name="email" type="email" />
                                    <div className="error">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                            
                                <div className="login-form-element">
                                    <label htmlFor="password" className="login-label">Password</label>
                                    <Field name="password" type="password" />
                                    <div className="error">
                                        <ErrorMessage name="password" />
                                    </div>
                                 </div>
                                <button type="submit" className="login-btn">Login</button>
                            </div>
                        
                    </Form>
                    <p className="login-para1">OR</p>
                    <div className="google-auth">
                        {this.state.isLogined ?
                            <GoogleLogout
                                clientId={CLIENT_ID}
                                buttonText='Logout'
                                onLogoutSuccess={this.logout}
                                onFailure={this.handleLogoutFailure}
                            >
                            </GoogleLogout> : <GoogleLogin
                                clientId={CLIENT_ID}
                                buttonText='Login'
                                onSuccess={this.login}
                                onFailure={this.handleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                responseType='code,token'
                            />
                        }
                        {/* {this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null} */}
                        </div>
                          <p className="login-para2">New User?<a href="../signup">Sign-Up</a></p>
                        </div>
                    </div>
                

            </Formik>


        );
    }
};

export default LoginPage;