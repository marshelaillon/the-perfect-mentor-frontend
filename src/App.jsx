import './App.css';

export default function App() {
  return (
    <>
      <header className="mb-8 pt-12">
        <h1 className="font-base font-black uppercase text-5xl text-primary-dark ">
          the <br />
          perfect <br />
          <span className="text-white">m</span>entor
        </h1>
      </header>

      <main className="main-container">
        <div className="image-container"></div>
        {/* <div className="image-container"></div>
        <div className="image-container"></div> */}
      </main>

      <div className="buttons-container flex flex-col gap-2">
        <button className="bg-primary-dark rounded-full py-2 text-primary-white capitalize sign-up">
          Sign up
        </button>
        <button className="border rounded-full py-2 capitalize text-primary-dark log-in">
          log in
        </button>
      </div>
    </>
  );
}
