import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import PetProfile from "./pages/PetProfile";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/pet" element={<PetProfile />} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/header" element={<Header/>} />
      </Routes>
    </>
  );
}

export default App;
