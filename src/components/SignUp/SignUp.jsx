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
    <div className="form-container">
      <div className="header-container relative">
        <img src={title} alt="title image" className="mb-6" />
        <img src={doodle1} alt="icon image" className="absolute doodle-1" />
        <img src={doodle2} alt="icon image" className="absolute doodle-2" />
      </div>
      <form className="flex flex-col gap-4">
        <input
          className="py-4 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
          type="username"
          placeholder="username"
        />
        <input
          className="py-4 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
          type="email"
          placeholder="email"
        />
        <input
          className="py-4 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full"
          type="password"
          placeholder="password"
        />
        <button className="align-center bg-primary-dark text-primary-white py-4 rounded-full capitalize">
          sign up
        </button>
      </form>
    </div>
  );
}
