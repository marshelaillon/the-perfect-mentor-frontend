import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationBar } from '../index';
import editIcon from '../../assets/editIcon.svg';
import profilePic from '../../assets/profile.svg';
import './MyProfile.css';
import '../../styles/loader.css';

export default function MyProfile() {
  const [editing, setIsEditing] = useState(false);

  const user = useSelector(state => state.user);

  const activateEdit = () => {
    setIsEditing(prevState => !prevState);
  };

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
              value={user?.password}
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

      {/* <div className="bg-primary-dark flex justify-around pt-5 pb-8 rounded-t-3xl nav-container relative">
        <button className="cursor-pointer nav-button-icon">
          <img src={addIcon} alt="social icon" />
        </button>

        <button className="cursor-pointer nav-button-icon">
          <img src={statsIcon} alt="stats icon" />
        </button>

        <button className="cursor-pointer nav-button-icon">
          <img src={notesIcon} alt="notes icon" />
        </button>

        <button
          className="cursor-pointer dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.9999"
              cy="6.8278"
              r="4.66468"
              stroke="#BFD732"
              strokeOpacity={`${pathname === '/profile' ? 1 : 0.3}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.846 21.7749V19.8766C20.846 17.6674 19.0552 15.8766 16.846 15.8766H7.15381C4.94467 15.8766 3.15381 17.6674 3.15381 19.8766V21.7749H12.6034"
              stroke="#BFD732"
              strokeOpacity={`${pathname === '/profile' ? 1 : 0.3}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <nav className="absolute bg-primary-dark  right my-profile-nav rounded-t-md">
            <ul className="flex flex-col">
              <li className="px-3 py-2">
                <button onClick={clearData} className="text-primary-white">
                  Log out
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div> */}
    </div>
  );
}
