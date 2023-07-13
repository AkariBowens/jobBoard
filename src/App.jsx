import "./App.css";

function App() {
  return (
    <div className="App flex">
      <div className="header__container w-screen h-12 mb-5 px-8 flex flex-row items-center justify-between ">
        <div className="header__left flex justify-evenly w-1/4">
          <a href="">Jobs</a>
          <a href="">resume</a>
        </div>
        <div className="header__center flex justify-evenly m-auto">
          <a href="">Logo + Home</a>
        </div>
        <div className="header__right flex justify-evenly w-1/4">
          <a href="">Search</a>
          <a href="">Avatar</a>
        </div>
      </div>
    </div>
  );
}

export default App;
