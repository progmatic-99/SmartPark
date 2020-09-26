import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationPagePr.css';

const RegistrationPage = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', phoneNo: '', password: '', confirmPassword: ''}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required '),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                phoneNo: Yup.string().matches(phoneRegExp, 'Invalid Phone Number'),
                password: Yup.string()
                    .min(4, 'Password is too short - should be 5 chars minimum.')
                    .required('No password provided.'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], "Passwords don't match")
                    .required('Required password confirmation'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            
            <div className="content">
                <div className="image">
                    <div class="background">
            <Form>
               <div className="main-div">
                    <header className="heading">Sign Up</header>
                        <div className="container">
                            <div className="form-element">
                                <label htmlFor="firstName">First Name</label>
                                <div className="field">
                                    <Field name="firstName" type="text" />
                                </div>
                                <div className="error">
                                    <ErrorMessage name="firstName"  />
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="field">
                                    <Field name="lastName" type="text" />
                                </div>
                                <div className="error">
                                    <ErrorMessage name="lastName" />
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="email">Email</label>
                                <div className="field">
                                    <Field name="email" type="email" />
                                </div>
                                <div className="error">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="phoneNo">Phone</label>
                                <div className="field">
                                    <Field name="phoneNo" type="number" />
                                </div>
                                <ErrorMessage name="phoneNo"/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="password">Password</label>
                                <div className="field"> 
                                    <Field name="password" type="password" />
                                </div>
                                <div className="error">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="field">     
                                    <Field name="confirmPassword" type="password" />
                                </div>
                                <div className="error">
                                     <ErrorMessage name="confirmPassword" />
                                </div>
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </div>
                </div>
                
            </Form>
                <p>Already a SmartPark user?<a href="../login"> Login</a></p>
            </div>
           </div>
          </div>
            
        </Formik>
    );
};

export default RegistrationPage;