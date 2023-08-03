import Landingpage from "./pages/landingpage/Landingpage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Error from "./pages/error/Error.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dsa from "./pages/dsa/Dsa.jsx";
import Development from "./pages/development/Development.jsx";
import Opensouce from "./pages/opensource/Opensouce.jsx";
import Finance from "./pages/finace/Finance.jsx";
import Web_dev from "./pages/development/dev_pages/web_dev/Web_dev";
import App_dev from "./pages/development/dev_pages/app_dev/App_dev";
import Cloud from "./pages/development/dev_pages/cloud/Cloud";
import Blockchain from "./pages/development/dev_pages/blockchain/Blockchain";
import Ai from "./pages/development/dev_pages/ai/Ai";
import { FirebaseApp } from "firebase/app";
import { auth } from "./firebase";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="Dashboard" element={<Dashboard />}/>
       <Route path="Landingpage" element={<Landingpage />}/>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Dsa" element={<Dsa/>} />
        <Route path="Development" element={<Development/>} />
        <Route path="Opensource" element={<Opensouce/>} />
        <Route path="Finance" element={<Finance/>} />
        <Route path="Web_dev" element={<Web_dev/>} />
        <Route path="App_dev" element={<App_dev/>} />
        <Route path="Cloud" element={<Cloud/>} />
        <Route path="Blockchain" element={<Blockchain/>} />
        <Route path="Ai" element={<Ai/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
