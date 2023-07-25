import Landingpage from "./pages/landingpage/Landingpage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirebaseApp } from "firebase/app";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}/>
       <Route path="Landingpage" element={<Landingpage />}/>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
