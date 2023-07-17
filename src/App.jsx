import Landingpage from "./pages/landingpage/Landingpage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>
        {/* <Route index element={<Landingpage />}/> */}
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
       </Route> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
