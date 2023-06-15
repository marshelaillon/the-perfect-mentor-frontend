import { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from '../../services/thePerfectMentorApi';
import { setTokens } from '../../app/features/authSlice';
import title from '../../assets/title.png';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import emailIcon from '../../assets/email-icon.png';
import passwordIcon from '../../assets/password-icon.png';
import './LogIn.css';

export default function SignUp() {
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const { accessToken, refreshToken } = useSelector(state => state.auth);

  useEffect(() => {
    // console.log('accessToken', accessToken);
    // console.log('refreshToken', refreshToken);
  }, [accessToken, refreshToken]);

  return (
    <div className="form-container mt-10">
      <div className="relative place-self-start  pl-6">
        <img src={title} alt="title image" className="mb-3 login-title" />
        <img
          src={doodle1}
          alt="icon image"
          className="absolute doodle-login-1"
        />
        <img
          src={doodle2}
          alt="icon image"
          className="absolute doodle-login-2"
        />
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await loginUser({
              email: values.email,
              password: values.password,
            });
            if (res?.data?.ok) {
              dispatch(
                setTokens({
                  accessToken: res.data.accessToken,
                  refreshToken: res.data.accessToken,
                })
              );
            }
          } catch (error) {
            console.log(error.message);
          }
          resetForm();
        }}
        validate={values => {
          const errors = {};
          if (!values.password) {
            errors.passDontMatchMsg = 'Enter your password';
          }
          if (!values.email) {
            errors.requiredEmail = 'Enter your email';
          }
          return errors;
        }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 border-2 border-primary-dark p-6 sign-up-borders">
            <h2 className="font-bold capitalize text-2xl text-primary-dark border-b-2 border-dotted border-primary-dark pb-4">
              sign in
            </h2>
            <h2 className="mb-2 font-normal text-2xl text-primary-dark">
              Hi, name
            </h2>

            <div className="relative">
              <Field
                className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full bg-primary-yellow"
                type="email"
                placeholder="email"
                name="email"
              />
              <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
                <img src={emailIcon} alt="email icon" />
              </span>
            </div>

            <div className="relative">
              <Field
                className="py-3 pl-12 pr-5  outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full bg-primary-yellow"
                type="password"
                placeholder="password"
                name="password"
              />

              <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
                <img src={passwordIcon} alt="email icon" />
              </span>
            </div>

            <Link to="/profile" className="pl-4">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="align-center bg-primary-dark text-primary-white py-5 rounded-full capitalize"
          >
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
