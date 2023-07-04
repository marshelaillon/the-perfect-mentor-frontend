import React from 'react';
import editIcon from '../../../assets/editIcon.svg';

export default function ProfileHeader({ isEditing, errors, activateEdit }) {
  return (
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
  );
}
