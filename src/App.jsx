import {
  AccountCircleOutlined,
  DocumentScannerOutlined,
  SearchOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import "./App.css";

function App() {
  return (
    <div className="App flex justify-center">
      {/* Header */}

      <div className="header__container w-screen h-12 mt-4 mb-5  flex flex-row items-center justify-evenly ">
        <div className="header__left flex justify-between mx-4 min-w-32 max-w-1/4">
          <a href="" className="m-8 ">
            <WorkOutlineOutlined
              fontSize="large"
              className="hover:fill-slate-200"
            />
          </a>
          <a href="" className="m-8">
            <DocumentScannerOutlined
              fontSize="large"
              className="hover:fill-slate-200"
            />
          </a>
        </div>
        <div className="header__center flex text-3xl font-bold justify-evenly w-1/2 max-w-1/2 basis-2 mx-4 px-2">
          <a href="" className="m-8">
            Home
          </a>
        </div>
        <div className="header__right flex justify-between mx-4 min-w-32 max-w-1/4">
          <a href="" className="m-8">
            <SearchOutlined fontSize="large" className="hover:fill-slate-200" />
          </a>
          <a href="" className="m-8">
            <AccountCircleOutlined
              fontSize="large"
              className="hover:fill-slate-200"
            />
          </a>
        </div>
      </div>

      {/* Landing */}
    </div>
  );
}

export default App;
