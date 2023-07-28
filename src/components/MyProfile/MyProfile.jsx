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
import { alertUpdatedCorrectly } from '../../utils/sweetAlert';

import profilePic from '../../assets/profile.svg';
import './MyProfile.css';
import '../../styles/loader.css';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading, isSuccess, refetch } = useGetMeQuery();
  const { data: roles, isSuccess: AreRolesSucceeded } = useGetRolesQuery();
  const { accessToken } = useSelector(state => state.auth);

  const [initialValues, setInitialValues] = useState({
    name: user?.name || '',
    lastname: user?.lastname || '',
    residence_country: user?.residence_country || '',
    occupation: user?.occupation || '',
    description: user?.description || '',
    languages: user?.languages || [],
    skills: user?.skills || [],
    role: user?.role || '',
    email: user?.email,
  });

  useEffect(() => {
    refetch();
  }, [accessToken]);

  const handleSubmit = async values => {
    try {
      console.log('VALUES: ', values);
      setIsUpdating(true);
      const res = await updateUserData(
        {
          name: values.name,
          lastname: values.lastname,
          role: values.role,
          residence_country: values.residence_country,
          occupation: values.occupation,
          description: values.description,
          languages: values.languages,
          skills: values.skills,
        },
        user._id,
        accessToken
      );
      if (res?.ok) {
        dispatch(
          setTokens({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        );
        dispatch(setUser(res.user));
        setInitialValues({
          name: res.user?.name,
          lastname: res.user?.lastname,
          email: res.user?.email,
          role: res.user?.role._id,
          residence_country: res.user?.residence_country,
          occupation: res.user?.occupation,
          description: res.user?.description,
          languages: res.user?.languages,
          skills: res.user?.skills,
        });
        alertUpdatedCorrectly();
      }
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  // const handleValidation = values => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.requiredName = 'Enter your name';
  //   }
  //   if (!values.lastname) {
  //     errors.requiredName = 'Enter your lastname';
  //   }
  //   if (!values.role) {
  //     errors.requiredRole = 'Select a role';
  //   }
  //   return errors;
  // };

  const activateEdit = () => {
    setIsEditing(true);
  };

  if (isLoading || isUpdating) return <p className="loader"></p>;

  return isSuccess ? (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
