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
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
