import { Link } from 'react-router-dom';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import saly from '../../assets/saly-1.png';
import './Home.css';

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle pt-14 img-container relative">
      {/* IMAGES */}
      {/* Having this first picture without "absolute" positioning we can have space for the other images, so the buttons stay below */}
      <img className="max-w-full" src={saly} alt="img" />
      <img className="doodle-2" src={doodle1} alt="img" />
      <img className="doodle-5" src={doodle2} alt="img" />

      {/* BUTTONS */}
      <div className="flex flex-col gap-2 btn-container">
        <Link
          to="/signup"
          className="capitalize py-5 text-center bg-primary-dark text-primary-white rounded-full"
        >
          sign up
        </Link>

        <Link
          to="/profile"
          className="capitalize py-5 text-center border-2 border-primary-dark font-bold rounded-full text-primary-dark"
        >
          log in
        </Link>
      </div>
    </div>
  );
}
