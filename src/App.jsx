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

      <main>
        <div className="image-container"></div>
        <div className="image-container"></div>
        <div className="image-container"></div>

        <div className="login-buttons-container absolute bottom-0 left-0 right-0 flex justify-center flex-col gap-2 p-6 mb-12">
          <button className="bg-primary-dark py-5 rounded-full text-primary-white">
            Sign up
          </button>
          <button className="py-5 rounded-full border-2 border-primary-dark font-bold text-primary-dark">
            Log in
          </button>
        </div>
      </main>
    </>
  );
}
