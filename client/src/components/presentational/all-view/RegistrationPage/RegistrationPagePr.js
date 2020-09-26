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
                phoneNo: Yup.string()
                    .matches(phoneRegExp, 'Invalid Phone Number')
                    .required('No Phone Number Provided'),
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
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="phoneNo">Phone</label>
                    <Field name="phoneNo" type="number" />
                    <ErrorMessage name="phoneNo" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default RegistrationPage;