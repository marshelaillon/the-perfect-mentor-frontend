import './App.css';

export default function App() {
  return (
    <div className="bg-primary-yellow min-h-screen font-base p-8 relative">
      <h1 className="font-base font-xbold uppercase text-5xl text-primary-dark mb-8 pt-20">
        the <br />
        perfect <br />
        <span className="text-white">m</span>entor
      </h1>

      <main className="bg-primary-yellow">
        <div className="image-container"></div>
        <div className="image-container"></div>
        <div className="image-container"></div>

        <div className="login-buttons-container absolute bottom-0 left-0 right-0 flex justify-center flex-col gap-2 p-6 mb-16">
          <button className="bg-primary-dark py-5 rounded-full text-primary-white">
            Sign up
          </button>
          <button className="py-5 rounded-full border-2 border-primary-dark font-bold text-primary-dark">
            Log in
          </button>
        </div>
      </main>
    </div>
  );
}
