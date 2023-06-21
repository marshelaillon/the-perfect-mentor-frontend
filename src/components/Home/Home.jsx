import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../services/thePerfectMentorApi';
import { setUser } from '../../app/features/userSlice';
import doodle1 from '../../assets/doodle-1.png';
import doodle2 from '../../assets/doodle-2.png';
import saly from '../../assets/saly-1.png';
import './Home.css';
import '../../styles/loader.css';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector(state => state.auth);
  const { data, isLoading, isSuccess } = useGetMeQuery(undefined, {
    skip: accessToken ? false : true,
  });

  useEffect(() => {
    if (accessToken && isSuccess) {
      dispatch(setUser(data));
      navigate('/profile');
    }
  }, [data, dispatch, isSuccess, navigate, accessToken]);

  if (isLoading) return <p className="loader"></p>;

  return (
    <div className="flex flex-col justify-center align-middle pt-8 img-container relative mb-4">
      {/* IMAGES */}
      {/* Having this first picture without "absolute" positioning we can have space for the other images, so the buttons stay below */}
      <img className="max-w-full saly" src={saly} alt="img" />
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
          to="/login"
          className="capitalize py-5 text-center border-2 border-primary-dark font-bold rounded-full text-primary-dark"
        >
          log in
        </Link>
      </div>
    </div>
  );
}
