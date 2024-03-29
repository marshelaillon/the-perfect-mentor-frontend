import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearTokens } from '../../app/features/authSlice';
import { clearUserData } from '../../app/features/userSlice';

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
    <div className="bg-primary-dark flex justify-around pt-5 pb-8 rounded-t-3xl nav-container relative w-full">
      <button
        className="cursor-pointer nav-button-icon"
        onClick={() => navigate('/app/users')}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7938 17.1263H17.7317V15.0875C17.7317 14.9754 17.6389 14.8837 17.5255 14.8837H16.2882C16.1748 14.8837 16.082 14.9754 16.082 15.0875V17.1263H14.0199C13.9065 17.1263 13.8137 17.2181 13.8137 17.3302V18.5535C13.8137 18.6656 13.9065 18.7573 14.0199 18.7573H16.082V20.7961C16.082 20.9083 16.1748 21 16.2882 21H17.5255C17.6389 21 17.7317 20.9083 17.7317 20.7961V18.7573H19.7938C19.9072 18.7573 20 18.6656 20 18.5535V17.3302C20 17.2181 19.9072 17.1263 19.7938 17.1263ZM6.42871 10.1537C6.40551 9.93199 6.39262 9.70773 6.39262 9.48091C6.39262 9.0757 6.43128 8.68069 6.50346 8.29587C6.5215 8.20413 6.47253 8.10983 6.38746 8.07161C6.0369 7.91615 5.7147 7.70208 5.43631 7.43194C5.10828 7.11748 4.85015 6.73886 4.6784 6.32025C4.50664 5.90165 4.42503 5.45224 4.43877 5.0007C4.46196 4.18264 4.79448 3.40536 5.37445 2.81921C6.01113 2.17444 6.86691 1.82275 7.77681 1.83295C8.59908 1.84059 9.393 2.15406 9.99359 2.70962C10.1972 2.89821 10.3725 3.10718 10.5194 3.33145C10.571 3.41045 10.6715 3.44358 10.7591 3.413C11.2128 3.25754 11.6923 3.14796 12.1846 3.09699C12.3289 3.0817 12.4114 2.92879 12.347 2.80137C11.5092 1.1627 9.79769 0.0311796 7.81806 0.000597965C4.96203 -0.042726 2.58029 2.27383 2.58029 5.09754C2.58029 6.69798 3.32522 8.12512 4.4929 9.06041C3.67321 9.43504 2.91796 9.95238 2.26324 10.5997C0.850687 11.9937 0.0516173 13.8337 6.44543e-05 15.7986C-0.000623532 15.8258 0.00420208 15.8528 0.0142567 15.8782C0.0243113 15.9035 0.0393917 15.9266 0.0586091 15.946C0.0778266 15.9655 0.100792 15.981 0.126153 15.9916C0.151514 16.0021 0.178757 16.0076 0.206276 16.0075H1.65233C1.76317 16.0075 1.85597 15.9209 1.85855 15.8113C1.90752 14.3332 2.51327 12.9494 3.57783 11.8994C4.33566 11.1502 5.26361 10.6303 6.27663 10.378C6.37458 10.3499 6.44159 10.2556 6.42871 10.1537ZM18.041 9.48091C18.041 6.69288 15.7752 4.42729 12.9656 4.38397C10.1096 4.34064 7.73042 6.65721 7.73042 9.48091C7.73042 11.0814 8.47793 12.5085 9.64303 13.4438C8.81485 13.8233 8.06092 14.3444 7.41594 14.9831C6.0034 16.3771 5.20433 18.2171 5.15277 20.1794C5.15209 20.2066 5.15691 20.2337 5.16697 20.259C5.17702 20.2843 5.1921 20.3074 5.21132 20.3269C5.23053 20.3463 5.2535 20.3618 5.27886 20.3724C5.30422 20.3829 5.33147 20.3884 5.35898 20.3884H6.80246C6.9133 20.3884 7.0061 20.3017 7.00868 20.1921C7.05765 18.714 7.6634 17.3302 8.72796 16.2802C9.83893 15.1818 11.3133 14.5779 12.8857 14.5779C15.7314 14.5779 18.041 12.297 18.041 9.48091ZM15.2185 11.7873C14.5947 12.404 13.7673 12.743 12.8857 12.743C12.0041 12.743 11.1767 12.404 10.5529 11.7873C10.2417 11.4811 9.9957 11.1163 9.82966 10.7144C9.66362 10.3126 9.58088 9.88185 9.58632 9.44778C9.59405 8.61188 9.93172 7.80402 10.522 7.20513C11.1406 6.5782 11.9681 6.22906 12.8522 6.21887C13.726 6.21122 14.5741 6.54762 15.1979 7.15161C15.8371 7.77089 16.1877 8.59914 16.1877 9.48091C16.1851 10.3525 15.8423 11.1705 15.2185 11.7873Z"
            fill={`rgba(191, 215, 50, ${pathname === '/app/users' ? 1 : 0.3})`}
          />
        </svg>
      </button>

      <button className="cursor-pointer nav-button-icon">
        <img src={statsIcon} alt="stats icon" />
      </button>

      <button className="cursor-pointer nav-button-icon">
        <img src={notesIcon} alt="notes icon" />
      </button>

      <button
        className="cursor-pointer dropdown"
        onClick={() => {
          if (pathname !== '/app/profile') {
            navigate('/app/profile');
          } else {
            setDropdownOpen(!dropdownOpen);
          }
        }}
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
            strokeOpacity={`${pathname === '/app/profile' ? 1 : 0.3}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.846 21.7749V19.8766C20.846 17.6674 19.0552 15.8766 16.846 15.8766H7.15381C4.94467 15.8766 3.15381 17.6674 3.15381 19.8766V21.7749H12.6034"
            stroke="#BFD732"
            strokeOpacity={`${pathname === '/app/profile' ? 1 : 0.3}`}
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
