// import { useFormik } from 'formik';
import title from '../../assets/title.png';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import emailIcon from '../../assets/email-icon.png';
import passwordIcon from '../../assets/password-icon.png';
import './SignUp.css';
import { useGetRolesQuery } from '../../services/thePerfectMentorApi';

export default function SignUp() {
  const { data: roles, isLoading } = useGetRolesQuery();
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     roleId: '',
  //   },
  //   onSubmit(values) {
  //     console.log(values);
  //   },
  // });

  return (
    <div className="sign-form-container gap-1">
      <div className="header-container relative place-self-start">
        <img src={title} alt="title image" className="title-img" />
        <img
          src={doodle1}
          alt="icon image"
          className="absolute doodle-sign-up-1"
        />
        <img
          src={doodle2}
          alt="icon image"
          className="absolute doodle-sign-up-2"
        />
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col border-2 border-primary-dark p-8 sign-up-borders gap-2">
          <h2 className="font-bold capitalize text-2xl text-primary-dark">
            sign up
          </h2>

          <div className="relative">
            <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
              <img src={emailIcon} alt="email icon" />
            </span>

            <input
              className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
              type="email"
              placeholder="email"
            />
          </div>

          <div className="relative">
            <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
              <img src={passwordIcon} alt="password icon" />
            </span>

            <input
              className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="relative">
            <span className="absolute top-2 left-2 bg-primary-white p-3 rounded-full">
              <img src={passwordIcon} alt="password icon" />
            </span>

            <input
              className="py-3 pl-12 pr-5 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
              type="password"
              placeholder="confirm password"
            />
          </div>

          <select
            name="roles"
            id="roles"
            className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray"
          >
            <option value="null">-- Select a role --</option>
            {!isLoading &&
              roles.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name[0].toUpperCase() + name.slice(1)}
                </option>
              ))}
          </select>
        </div>
        <button className="align-center bg-primary-dark text-primary-white py-3 rounded-full capitalize">
          sign up
        </button>
      </form>
    </div>
  );
}
