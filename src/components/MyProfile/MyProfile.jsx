import { useEffect, useState } from 'react';
import { NavigationBar } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import {
  useGetMeQuery,
  useGetRolesQuery,
  updateUserData,
} from '../../services/thePerfectMentorApi';
import { setUser } from '../../app/features/userSlice';
import editIcon from '../../assets/editIcon.svg';
import profilePic from '../../assets/profile.svg';
import './MyProfile.css';
import '../../styles/loader.css';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading, isSuccess } = useGetMeQuery();
  const { data: roles, isSuccess: AreRolesSucceeded } = useGetRolesQuery();
  const { accessToken } = useSelector(state => state.auth);

  const activateEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isSuccess) dispatch(setUser(user));
  }, [user, dispatch, isSuccess]);

  if (isLoading) return <p className="loader"></p>;

  return isSuccess ? (
    <Formik
      initialValues={{
        name: user.name || '',
        email: user.email,
        password: 'Changeyourpasswordhere1$',
        age: user.age || '',
        roleId: user.role._id,
      }}
      onSubmit={async values => {
        try {
          const res = await updateUserData(
            {
              name: values.name,
              email: values.email,
              password: values.password,
              age: values.age,
              roleId: values.roleId,
            },
            user._id,
            accessToken
          );
          if (res?.ok) {
            setUser(res?.data);
            console.log('RES DATA OK', res?.data);
          }
          console.log(values);
          setIsEditing(false);
        } catch (error) {
          console.log(error);
        }
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.requiredName = 'Enter your name';
        }
        if (!values.password) {
          errors.requiredPassword = 'Enter a password';
        }
        if (!values.email) {
          errors.requiredEmail = 'Enter your email';
        }
        if (!values.age) {
          errors.requiredAge = 'Enter your age';
        }
        if (!values.roleId) {
          errors.requiredRole = 'Select a role';
        }
        return errors;
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <div className="profile-container full-height">
          <header className="h-20 pl-3 items-center flex gap-4 bg-primary-yellow ">
            <h2 className="font-bold capitalize text-3xl text-primary-dark">
              profile
            </h2>
            {isEditing ? (
              <button
                disabled={Object.keys(errors).length > 0}
                type="submit"
                form="profile-form"
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#444444"
                  style={{ padding: '7px' }}
                  className="bg-primary-white rounded-full cursor-pointer flex place-content-center justify-center"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z"
                      stroke="#878787"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>
                </svg>
              </button>
            ) : (
              <div
                className="bg-primary-white rounded-full cursor-pointer flex place-content-center justify-center"
                onClick={activateEdit}
              >
                <img src={editIcon} alt="edit icon" className="p-3" />
              </div>
            )}
          </header>

          {/* USER DATA */}

          <div className="user-data-container w-full flex-grow flex">
            <div className="bg-white rounded-t-2xl relative mx-4 flex-grow shadow">
              <Form className="flex flex-col p-4 form-shadow" id="profile-form">
                <img
                  src={profilePic}
                  alt="profile picture"
                  className="absolute profile-pic"
                />

                <label
                  htmlFor="name"
                  className="text-sm text-primary-gray mt-10"
                >
                  Your name
                </label>
                <Field
                  className="mb-4 shadow font-bold text-primary-dark outline-none"
                  id="name"
                  type="text"
                  disabled={!isEditing}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.requiredName && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {errors.requiredName}
                  </p>
                )}

                <label htmlFor="email" className="text-sm text-primary-gray">
                  Your email
                </label>
                <Field
                  className="mb-4 shadow font-bold text-primary-dark outline-none"
                  id="email"
                  type="email"
                  name="email"
                  disabled={!isEditing}
                />
                {touched.email && errors.requiredEmail && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {errors.requiredEmail}
                  </p>
                )}

                <label htmlFor="password" className="text-sm text-primary-gray">
                  Your password
                </label>
                <Field
                  className="mb-4 shadow font-bold text-primary-dark outline-none"
                  id="password"
                  type="password"
                  name="password"
                  disabled={!isEditing}
                />

                <label htmlFor="age" className="text-sm text-primary-gray">
                  Age
                </label>
                <Field
                  className="mb-4 shadow font-bold text-primary-dark outline-none"
                  id="age"
                  name="age"
                  disabled={!isEditing}
                />

                <label htmlFor="role" className="text-sm text-primary-gray">
                  Role
                </label>
                <Field
                  as="select"
                  name="roleId"
                  id="roleId"
                  className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
                  disabled={!isEditing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.roleId}
                >
                  {AreRolesSucceeded &&
                    roles.map(({ _id, name }) => (
                      <option key={_id} value={_id}>
                        {name[0].toUpperCase() + name.slice(1)}
                      </option>
                    ))}
                </Field>
              </Form>
            </div>
          </div>

          <NavigationBar />
        </div>
      )}
    </Formik>
  ) : (
    <p>An error occured!</p>
  );
}
