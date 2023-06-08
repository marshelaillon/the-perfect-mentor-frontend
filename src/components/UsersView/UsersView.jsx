import users from '../../mocks/users.json';
import doodle1 from '../../assets/doodle-1-svg.svg';
import doodle3 from '../../assets/doodle-3-svg.svg';
import searchIcon from '../../assets/search-icon.png';
import './UsersView.css';

// width: 340px;
/*margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/

export default function UsersView() {
  return (
    <>
      <header className="h-24 main-header-container">
        <div className="relative header-container">
          <h2 className="font-bold capitalize text-3xl text-primary-dark">
            users
          </h2>
          <p className="font-normal  text-primary-dark">View all the users</p>
          <img src={doodle1} alt="icon" className="doodle-sm" />
          <img src={doodle3} alt="icon" className="doodle-md" />
          <div className="search-user-input-container flex p-4 z-10 flex-row justify-center bg-primary-white rounded-full">
            <img src={searchIcon} alt="search icon" className="pr-2 pl-1" />
            <input
              className="outline-none"
              type="text"
              placeholder="search for users"
            />
          </div>
        </div>
      </header>

      {/* PUT HERE FILTERS */}

      {/* USERS */}
      <div className="main-container">
        <div className="flex flex-col gap-2 justify-center bg-primary-white users-container">
          {users.map(({ name, age, email, role, joined_date, verified }) => (
            <div
              key={name}
              className={`p-4 mt-3 ${
                verified ? 'verified' : 'unverified'
              } text-primary-dark`}
            >
              <p className="font-bold ">
                <span className="capitalize">{name}</span> | age {age}
              </p>
              <p>
                <span className="font-bold">Email: </span>
                {email}
              </p>
              <p>
                <span className="font-bold">Role:</span>{' '}
                <span className="capitalize">{role}</span>
              </p>
              <p>
                <span className="font-bold">Joined Date:</span>{' '}
                <span className="capitalize">{joined_date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
