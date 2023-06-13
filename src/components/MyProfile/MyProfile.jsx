import { useState } from 'react';
import editIcon from '../../assets/editIcon.svg';
import profilePic from '../../assets/profile.svg';
import addIcon from '../../assets/addIcon.svg';
import statsIcon from '../../assets/statsIcon.svg';
import notesIcon from '../../assets/notesIcon.svg';
import { useLocation } from 'react-router-dom';
import './MyProfile.css';

export default function MyProfile() {
  const [disabled, setDisabled] = useState(true);
  const { pathname } = useLocation();

  const activateEdit = () => {
    setDisabled(prevState => !prevState);
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
      <div className="user-data-container w-full flex-grow">
        <div className="bg-primary-white rounded-t-2xl relative mx-4">
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
              className="mb-4 input-shadow font-bold text-primary-dark outline-none"
              id="name"
              type="text"
              disabled={disabled}
              value={'David Gordon'}
            />

            <label htmlFor="email" className="text-sm text-primary-gray">
              Your email
            </label>
            <input
              className="mb-4 input-shadow font-bold text-primary-dark outline-none"
              id="email"
              type="email"
              disabled={disabled}
              value={'davidgordon@gmail.com'}
            />

            <label htmlFor="password" className="text-sm text-primary-gray">
              Your password
            </label>
            <input
              className="mb-4 input-shadow font-bold text-primary-dark outline-none"
              id="password"
              type="password"
              disabled={disabled}
              value={'davidgordon'}
            />

            <label htmlFor="age" className="text-sm text-primary-gray">
              Age
            </label>
            <input
              className="mb-4 input-shadow font-bold text-primary-dark outline-none"
              id="age"
              type="number"
              disabled={disabled}
              value={'35'}
            />

            <label htmlFor="role" className="text-sm text-primary-gray">
              Role
            </label>
            <input
              className="mb-2 input-shadow font-bold text-primary-dark outline-none"
              id="role"
              type="text"
              disabled={disabled}
              value={'Mentor'}
            />
          </form>
        </div>
      </div>

      <div className="bg-primary-dark flex justify-around pt-5 pb-8 rounded-t-3xl nav-container">
        <button className="cursor-pointer nav-button-icon">
          <img src={addIcon} alt="social icon" />
        </button>
        <button className="cursor-pointer nav-button-icon">
          <img src={statsIcon} alt="stats icon" />
        </button>
        <button className="cursor-pointer nav-button-icon">
          <img src={notesIcon} alt="notes icon" />
        </button>
        <button className="cursor-pointer">
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
      </div>
    </div>
  );
}
