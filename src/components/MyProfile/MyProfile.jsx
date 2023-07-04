import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { NavigationBar } from '../index';
import UserDataContainer from './UserDataContainer/UserDataContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';

import {
  useGetMeQuery,
  useGetRolesQuery,
  updateUserData,
} from '../../services/thePerfectMentorApi';
import { setUser } from '../../app/features/userSlice';
import { setTokens } from '../../app/features/authSlice';

import profilePic from '../../assets/profile.svg';

import './MyProfile.css';
import '../../styles/loader.css';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading, isSuccess } = useGetMeQuery();
  const { data: roles, isSuccess: AreRolesSucceeded } = useGetRolesQuery();
  const { accessToken } = useSelector(state => state.auth);

  useEffect(() => {
    if (isSuccess) setUser(user);
  }, [user, dispatch, isSuccess, accessToken]);

  const initialValues = {
    name: user.name || '',
    lastname: user.lastname || '',
    email: user.email,
    role: user.role._id || '',
  };

  const handleSubmit = async values => {
    try {
      const res = await updateUserData(
        {
          name: values.name,
          lastname: values.lastname,
          role: values.role,
        },
        user._id,
        accessToken
      );
      if (res?.ok) {
        dispatch(setUser(res.user));
        dispatch(
          setTokens({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        );
      }
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleValidation = values => {
    const errors = {};
    if (!values.name) {
      errors.requiredName = 'Enter your name';
    }
    if (!values.lastname) {
      errors.requiredName = 'Enter your lastname';
    }
    if (!values.role) {
      errors.requiredRole = 'Select a role';
    }
    return errors;
  };

  const activateEdit = () => {
    setIsEditing(true);
  };

  if (isLoading) return <p className="loader"></p>;

  return isSuccess ? (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={handleValidation}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <div className="profile-container full-height">
          <ProfileHeader
            isEditing={isEditing}
            errors={errors}
            activateEdit={activateEdit}
          />

          <UserDataContainer
            values={values}
            profilePic={profilePic}
            roles={roles}
            AreRolesSucceeded={AreRolesSucceeded}
            isEditing={isEditing}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />

          <NavigationBar />
        </div>
      )}
    </Formik>
  ) : (
    <p>An error occured!</p>
  );
}
