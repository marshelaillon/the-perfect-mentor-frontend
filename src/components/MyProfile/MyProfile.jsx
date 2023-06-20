import { useEffect, useState } from 'react';
import { NavigationBar } from '../index';
import { useDispatch } from 'react-redux';
import { useGetMeQuery } from '../../services/thePerfectMentorApi';
import { setUser } from '../../app/features/userSlice';
import editIcon from '../../assets/editIcon.svg';
import profilePic from '../../assets/profile.svg';
import './MyProfile.css';
import '../../styles/loader.css';

export default function MyProfile() {
  const [editing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading, isSuccess } = useGetMeQuery();

  const activateEdit = () => {
    setIsEditing(prevState => !prevState);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(user));
    }
  }, [user, dispatch, isSuccess]);

  if (isLoading) return <p className="loader"></p>;

  return (
    <div className="profile-container full-height">
      <header className="h-20 pl-3 items-center flex gap-4 bg-primary-yellow ">
        <h2 className="font-bold capitalize text-3xl text-primary-dark">
          profile
        </h2>
        <div
          className="bg-primary-white rounded-full cursor-pointer flex place-content-center justify-center"
          onClick={activateEdit}
        >
          <img src={editIcon} alt="edit icon" className="p-3" />
        </div>
      </header>

      {/* USER DATA */}
      <div className="user-data-container w-full flex-grow flex">
        <div className="bg-white rounded-t-2xl relative mx-4 flex-grow shadow">
          <img
            src={profilePic}
            alt="profile picture"
            className="absolute profile-pic"
          />
          <form className="flex flex-col  p-4 form-shadow">
            <label htmlFor="name" className="text-sm text-primary-gray mt-10">
              Your name
            </label>
            <input
              className="mb-4 shadow font-bold text-primary-dark outline-none"
              id="name"
              type="text"
              disabled={!editing}
              value={user?.name}
            />

            <label htmlFor="email" className="text-sm text-primary-gray">
              Your email
            </label>
            <input
              className="mb-4 shadow font-bold text-primary-dark outline-none"
              id="email"
              type="email"
              disabled={!editing}
              value={user?.email}
            />

            <label htmlFor="password" className="text-sm text-primary-gray">
              Your password
            </label>
            <input
              className="mb-4 shadow font-bold text-primary-dark outline-none"
              id="password"
              type="password"
              disabled={!editing}
              value={'hereyournewpassword'}
            />

            <label htmlFor="age" className="text-sm text-primary-gray">
              Age
            </label>
            <input
              className="mb-4 shadow font-bold text-primary-dark outline-none"
              id="age"
              type="number"
              disabled={!editing}
              value={user?.age}
            />

            <label htmlFor="role" className="text-sm text-primary-gray">
              Role
            </label>
            <input
              className="mb-3 shadow font-bold text-primary-dark outline-none"
              id="role"
              type="text"
              disabled={!editing}
              value={user?.role?.name}
            />
          </form>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}
