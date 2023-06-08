// import { useFormik } from 'formik';
import title from '../../assets/title.png';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import emailIcon from '../../assets/email-icon.png';
import passwordIcon from '../../assets/password-icon.png';
import './LogIn.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   onSubmit(values) {
  //     console.log(values);
  //   },
  // });

  return (
    <div className="form-container">
      <div className="header-container relative place-self-start">
        <img src={title} alt="title image" className="mb-6" />
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
      <form className="flex flex-col gap-7">
        <div className="flex flex-col gap-6 border-2 border-primary-dark p-8 sign-up-borders">
          <h2 className="font-bold capitalize text-3xl text-primary-dark border-b-2 border-dotted border-primary-dark pb-4">
            sign in
          </h2>
          <h2 className="mb-2 font-normal text-3xl text-primary-dark">
            Hi, name
          </h2>

          <div className="relative">
            <input
              className="py-6 pl-16 pr-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full bg-primary-yellow"
              type="email"
              placeholder="email"
            />
            <span className="absolute top-5 left-4 bg-primary-white p-3 rounded-full">
              <img src={emailIcon} alt="email icon" />
            </span>
          </div>

          <div className="relative">
            <input
              className="py-6 pl-16 pr-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full bg-primary-yellow"
              type="password"
              placeholder="password"
            />

            <span className="absolute top-5 left-4 bg-primary-white p-3 rounded-full">
              <img src={passwordIcon} alt="email icon" />
            </span>
          </div>

          <Link className="pl-4">Forgot your password?</Link>
        </div>
        <button className="align-center bg-primary-dark text-primary-white py-5 rounded-full capitalize">
          Sign In
        </button>
      </form>
    </div>
  );
}
