import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearTokens } from '../../app/features/authSlice';
import { clearUserData } from '../../app/features/userSlice';
import addIcon from '../../assets/addIcon.svg';
import statsIcon from '../../assets/statsIcon.svg';
import notesIcon from '../../assets/notesIcon.svg';

export default function NavigationBar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearData = () => {
    dispatch(clearTokens());
    dispatch(clearUserData());
    navigate('/');
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-primary-dark flex justify-around pt-5 pb-8 rounded-t-3xl nav-container relative">
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
    </div>
  );
}
