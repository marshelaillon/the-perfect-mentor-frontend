import './App.css';
import title from './assets/title.png';
import doodle1 from './assets/doodle-1.png';
import doodle2 from './assets/doodle-2.png';
import saly from './assets/saly-1.png';

export default function App() {
  return (
    <>
      <header className="h-8 mt-6">
        <img src={title} alt="The perfect mentor" />
      </header>

      <form className="form" onSubmit={'handleSubmit'}>
        {/* IMAGES */}
        <div className="img-container relative">
          <img className="max-w-full" src={saly} alt="img" />
          <img className="doodle-2" src={doodle1} alt="img" />
          <img className="doodle-5" src={doodle2} alt="img" />
        </div>
        {/* BUTTONS */}
        <div className="flex flex-col justify-center gap-2">
          <button className="capitalize py-5 bg-primary-dark text-primary-white rounded-full">
            sign up
          </button>
          <button className="capitalize py-5 border rounded-full text-primary-dark">
            log in
          </button>
        </div>
      </form>
    </>
  );
}
