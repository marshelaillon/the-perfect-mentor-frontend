import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import title from '../../assets/title.png';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import emailIcon from '../../assets/email-icon.png';
import passwordIcon from '../../assets/password-icon.png';
import './SignUp.css';
import {
  useGetRolesQuery,
  useRegisterUserMutation,
} from '../../services/thePerfectMentorApi';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const { data: roles, isLoading: areRolesLoading } = useGetRolesQuery();
  const [registerUser, { isSuccess }] = useRegisterUserMutation();
  const [confirmationEmailLink, setConfirmationEmailLink] = useState('');

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="p-6">
          <p className="text-primary-dark">
            {`We've sent you an email confirmation, please check it out:`}
          </p>
          <Link
            to={confirmationEmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-dark"
          >
            {confirmationEmailLink}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="sign-form-container gap-1">
      <div className="header-container relative place-self-start">
        <img src={title} alt="title image" className="title-img" />
        <img
          src={doodle1}
          alt="icon image"
          className="absolute doodle-sign-up-1"
        />
        <img
          src={doodle2}
          alt="icon image"
          className="absolute doodle-sign-up-2"
        />
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          roleId: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await registerUser({
              email: values.email,
              password: values.password,
              passwordConfirmation: values.confirmPassword,
              role: values.roleId,
            });
            if (res?.data?.ok) {
              setConfirmationEmailLink(res.data.url);
            }
          } catch (error) {
            console.log(error.message);
          }
          resetForm();
        }}
        validate={values => {
          const errors = {};
          if (values.password !== values.confirmPassword) {
            errors.passDontMatchMsg = 'Passwords do not match';
          }
          if (!values.password) {
            errors.passDontMatchMsg = 'Enter a password';
          }
          if (!values.email) {
            errors.requiredEmail = 'Please, enter an email';
          }
          if (!values.roleId) {
            errors.requiredRole = 'Please, select a role';
          }
          return errors;
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col border-2 border-primary-dark p-8 sign-up-borders gap-2">
              <h2 className="font-bold capitalize text-2xl text-primary-dark">
                sign up
              </h2>

              <div className="relative">
                <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
                  <img src={emailIcon} alt="email icon" />
                </span>

                <Field
                  className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
                  type="email"
                  placeholder="email"
                  name="email"
                />
                {touched.email && errors.requiredEmail && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {errors.requiredEmail}
                  </p>
                )}
              </div>

              <div className="relative">
                <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
                  <img src={passwordIcon} alt="password icon" />
                </span>

                <Field
                  className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>

              <div className="relative">
                <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
                  <img src={passwordIcon} alt="password icon" />
                </span>

                <Field
                  className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
                  type="password"
                  placeholder="confirm password"
                  name="confirmPassword"
                />
                {touched.confirmPassword && errors.passDontMatchMsg && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {errors.passDontMatchMsg}
                  </p>
                )}
              </div>

              <Field
                as="select"
                name="roleId"
                id="roleId"
                className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roleId}
              >
                <option value="">-- Select a role --</option>
                {!areRolesLoading &&
                  roles.map(({ _id, name }) => (
                    <option key={_id} value={_id}>
                      {name[0].toUpperCase() + name.slice(1)}
                    </option>
                  ))}
              </Field>

              {touched.roleId && errors.requiredRole && (
                <p className="py-2 px-5 text-red-500 text-xs">
                  {errors.requiredRole}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="align-center bg-primary-dark text-primary-white py-3 rounded-full capitalize"
            >
              sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
