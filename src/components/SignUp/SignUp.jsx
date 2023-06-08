// import { useFormik } from 'formik';
import title from '../../assets/title.png';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import './SignUp.css';

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
    <div className="form-container pt-14">
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
          <h2 className="font-bold capitalize text-3xl text-primary-dark mb-4">
            sign up
          </h2>
          <input
            className="py-6 px-12 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
            type="username"
            placeholder="username"
          />
          <input
            className="py-6 px-12 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
            type="email"
            placeholder="email"
          />
          <input
            className="py-6 px-12 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
            type="password"
            placeholder="password"
          />
        </div>
        <button className="align-center bg-primary-dark text-primary-white py-4 rounded-full capitalize">
          sign up
        </button>
      </form>
    </div>
  );
}
